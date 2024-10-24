import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {

    try {
        if(!localFilePath) return null;
        return await cloudinary.uploader.upload(
            localFilePath,
            resouorce_type: "auto");
        console.log("file uploaded successfully File Src:"+response.url);
        fs.unlink(localFilePath)
        return response
    } catch (error) {
        fs.unlinkO(localFilePath);
        return null;
        
        
    }
    
}