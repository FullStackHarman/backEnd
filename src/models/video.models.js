import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        videoFile :{
            type:String,
            required:true,
            trim:true
        },
        thumbnail:{
            type:String,
            required:true,
            trim:true
        },
        views:{
            type:Number,
            default:0
        },
        duration:{
            type:Number,
            required:true,
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{type:Schema.type.objectId,
        ref:"User"}
    },{timestamps:true}
)
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)