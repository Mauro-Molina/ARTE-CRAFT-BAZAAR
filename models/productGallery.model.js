const { Schema, model } = require("mongoose");


const productGalerySchema = new Schema(
  {
    namePhoto: {
      type: String,
      required: true,
      trim: true,
    },
    photos: {
        type: Image,
      },
          
    craftsmanName:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Craftsman",
    }],
    event:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Event",
    }],
    
  },
  
  {
        timestamps: true,
  }
);

const ProductGalery = model("ProductGalery", productGalerySchema);

module.exports = ProductGalery;