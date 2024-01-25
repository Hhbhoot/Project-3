import mongoose from "mongoose";

const askSchema = new mongoose.Schema({
    user : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "user"
    },
    category : {
        type : String,
        required : true
    },
    keyword : {
        type : String
    },
    discription : {
        type : String
    },
    isDelete : {
        type : Boolean,
        default : false
    }
},
{
    timestamps : true
}
);

const Ask = mongoose.model('ask',askSchema);

export default Ask;