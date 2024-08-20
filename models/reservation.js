const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Listing = require("./listing.js");
const reservationSchema = new Schema({
    listing:{
        type: Schema.Types.ObjectId,
        ref:"Listing",
        required:true,
    },
    checkIn:{
            type:Date,
            required:true,
        },
    checkOut:{
            type:Date,
            required:true,
        },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    guest:{
        type:Number,
        default:1,
        required:true,
    }
});
module.exports = mongoose.model("Reservation",reservationSchema);
