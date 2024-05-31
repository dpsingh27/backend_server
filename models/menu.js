const mongoose = require("mongoose");

// define menu schema 
const menuSchema = new mongoose.Schema({

    price: {
        type: Number,
        required: true,
        default: 2
    },
    is_drink: {
        type: Boolean,
        required: true,
        default: false
    },

    ingredients: {
        type: [String],
        required: true
    },
    num_sales: {
        type: Number,
        default: 0
    }
});
// Note   its time export menu 
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;