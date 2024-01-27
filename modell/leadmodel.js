import mongoose, { mongo } from "mongoose";

const leadSchema = new mongoose.Schema({
  
     adminId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
     },

    askId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'ask'
    },
    category : {
         type : String
    },
    lead : [{
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user"
        },
        discription : {
        type : String
    }
    }],
    isDelete : {
        type : Boolean,
        default : false
    }
},
{
    timestamps : true
});

const Lead = mongoose.model('lead',leadSchema);

export default Lead ;
