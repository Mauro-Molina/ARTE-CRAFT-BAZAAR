const { Schema, model, default: mongoose } = require("mongoose");


const comentsSchema = new Schema(
  {
    message: {
      type: String,
      
    },

    date:{
        type: Date,
   
    },
          
    craftsmanName:[{
        type: Schema.Types.ObjectId, ref:"Craftsman",
    }],

    userName: [{
      type: Schema.Types.ObjectId, ref:"UserName",
    }]
  },
  
  {
        timestamps: true,
  }
);

const Coments = model("Coments", comentsSchema);

module.exports = Coments;