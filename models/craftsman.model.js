const { Schema, model } = require("mongoose");


const craftsmanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      minLength: 6,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "craftsman"],
      default: "craftsman",
    },
    
      event:[{
        type: mongoose.Schema.Types.ObjectId, ref:"Event",
    }],
      
    
    profilePic: {
      type: String,
      default:
          "https://us.123rf.com/450wm/imagevectors/imagevectors1606/imagevectors160600380/59162629-icono-de-perfil-blanco-en-el-bot%C3%B3n-negro-aislado-en-blanco.jpg?ver=6",
    },
    
    post:[{
      type: mongoose.Schema.Types.ObjectId, ref:"Post",
  }],
   
   
    socialMedia:{
      facebookProfile:{
        type:String,
        validate:{
          validator:(text)=>{
            return text.indexOf('https://www.facebook.com')=== 0;
          },
          message: "facebookProfile must start with 'https://www.facebook.com'"  
        }
      },
      instagramProfile:{
        type:String,
        validate:{
          validator:(text)=>{
            return text.indexOf('https://www.instagram.com')=== 0;
          },
          message: "facebookProfile must start with 'https://www.instagram.com'"  
        },
      }

    }
 
  },
  {
        timestamps: true,
  }
);

const Craftsman = model("Craftsman", craftsmanSchema);

module.exports = Craftsman;
