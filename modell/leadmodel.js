import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({

  
    category : {
         type : String
    },
    lead : [{
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user"
        },
        discription : {
        type : String}
    }]
},
{
    timestamps : true
});

const Lead = mongoose.model('lead',leadSchema);

export default Lead ;
