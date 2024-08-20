const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true 
    },
    Reservations:[
        {
          type:Schema.Types.ObjectId,
          ref:"Reservation",
        }
      ],
});
//automatically add username and password with salt and hash
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',userSchema);
