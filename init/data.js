//data of the website stored in the array as an object(key-value pair)
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [118.6923, 34.0381],
    },
    categories: ["Mountains","Amazing pools","Boat"],
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [74.0060, 40.7128],
    },
    categories: ["Mountains","Camping","Boat"],
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image:{
        filename:"listingimage",
        url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [106.8175, 39.1911],
    },
    categories: ["Amazing pools","Castles","Iconic Cities"],
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image:{
      filename:"listingimage",
      url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [11.2577, 43.7700],
    },
    categories: ["Amazing pools","Castles","Iconic Cities","Farms"],
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image:
      {filename:"listingimage",
        url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [122.6784, 45.5152],
    },
    categories: ["Amazing pools","Castles","Farms","Boat","Dome"],
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image:{
        filename:"listingimage",
        url : "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [102.5528, 23.6345],
    },
    categories: ["Amazing pools","Farms","Boat"],
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [120.0324,39.0968],
    },
    categories: ["Camping","Castles","Farms","Dome"],
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [118.2426, 34.0549],
    },
    categories: ["Amazing pools","Castles","Boat"],
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [ 7.2286,46.0961],
    },
    categories: ["Amazing pools","Boat"],
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [34.8888, 6.3690],
    },
    categories: ["Castles","Farms","Arctic","Dome"],
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image:{filename:"listingimage",
      url:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
    categories: ["Camping","Castles","Dome","Arctic","Farms"],
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [ 178.0650, 17.7134],
    },
    categories: ["Castles","Farms"],
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [1.9586, 51.7904],
    },
    categories: ["Amazing pools","Boat"],
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
      geometry: {
        type: "Point",
        coordinates: [71.0589, 42.3601],
      },
      categories: ["Boat","Castles","Farms"],
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image:{filename:"listingimage",
        url:"https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
      owner: new ObjectId("6674e4f1fa4549530a19acd8"),
    geometry: {
      type: "Point",
      coordinates: [115.1889, 8.4095],
    },
    categories: ["Camping","Dome","Castles","Farms"],
    },
  ];
  
  module.exports = { data: sampleListings };