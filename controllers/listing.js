const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


//index
module.exports.index = async (req,res) => {
    const allListings = await Listing.find({});
      res.render("listings/index.ejs",{allListings});
  }

  //new route
     module.exports.renderNewForm = (req,res) => {
     res.render("listings/new.ejs");
    }

 //show route
 module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const data = await Listing.findById(id)
    //nested populate
    .populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    const username = req.session.username;
    if(!data){
        req.flash("error","Listing does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{data,username});
}

//create route
module.exports.createListing = async(req,res,next) => { //wrapAsync error middleware function
    let response = await geocodingClient.forwardGeocode({
        query:req.body.listing.location,
        limit: 1,
      })
        .send(); 
    let url = req.file.path; 
    let filename = req.file.filename;
    const categories = Array.isArray(req.body.listing.categories) ? req.body.listing.categories : [req.body.listing.categories];
    const listingData = req.body.listing;
    const newListing = new Listing(listingData); //making instance of the javascipt object
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;
    newListing.categories = categories;
    let saved = await newListing.save();
    req.flash("success","New listing created!!");
    res.redirect("/listings");
}

//edit render route
module.exports.renderEditForm = async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing does not exist");
        res.redirect("/listings");
    } 
    res.render("listings/edit.ejs",{listing}); 
}

//update/edit route
module.exports.updateListing = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    //location edit
    if (req.body.listing.location) {
        let response = await geocodingClient.forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        }).send();
        listing.geometry = response.body.features[0].geometry;
    }
    //image edit
    if(typeof req.file!=="undefined"){ //file exist
    let url = req.file.path; 
    let filename = req.file.filename;
    listing.image = {url,filename};
    }
    await listing.save();
    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}`);
}
//search route
module.exports.search = async (req, res) => {
    const { query } = req.body;
    if (query && query.trim()) {
      const regex = new RegExp(query.trim(), 'i'); // Case-insensitive search
      const searchQuery = {
        $or: [{ country: regex }, { title: regex }],
      };
      const results = await Listing.find(searchQuery);
      if(results.length===0){
        req.flash("error","No listing found");
        return res.redirect("/listings");
      }
      res.render("listings/search.ejs",{results})
    } else {
      // Handle empty query case (optional)
      // You can send an informative message or an empty array here
      req.flash("error","Error found");
    }
  };

//feature
module.exports.category = async (req,res)=>{
  const { category } = req.query;
  if(category=='Trending' || category=='Rooms'){
    req.flash("error","This feature is in development stage");
  }
  let query = {};
  if (category) {
    query = { categories: category };
  }
  const listings = await Listing.find(query);
  res.render("listings/category.ejs",{listings,category});
    // req.flash("error","This feature is in development stage");
    // res.redirect("/listings");
}

//delete route
module.exports.destroyListing = async (req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    res.redirect("/listings");
} 