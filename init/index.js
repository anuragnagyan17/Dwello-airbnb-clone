const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/airbnb';
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});

    // We map the data INSIDE the function before inserting
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a3b87d3c2e7630450ddb790",
        image: { url: obj.image.url || obj.image, filename: "listingimage" },
        geometry: { type: 'Point', coordinates: [77.2090, 28.6139] } // Default map location
    }));

    await Listing.insertMany(initData.data);
    console.log("Data Initialized");
}





initDB();