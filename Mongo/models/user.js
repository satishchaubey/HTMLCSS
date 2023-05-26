const mongoose=require('mongoose');
const {Schema}= mongoose;



//oops concept thoda sa jo yhaa se start hota h Schema
const productSchema =new Schema({
      name: String,
      username: [String,"wrong"],
      email: String,
      address: {
        street: String,
        city: String,
        zipcode: String
      }
});

exports.User =mongoose.model('UserCollection',productSchema);//Product isme collection hota h

