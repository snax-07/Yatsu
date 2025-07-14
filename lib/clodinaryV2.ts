import  {v2} from "cloudinary"
import { error } from "console";

v2.config({
    api_key : process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
    cloud_name : process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
});

async function uploadFile(fileBuffer : Buffer){

    try {
        const response = await new Promise((resolve , reject) => {
            const docsUploader = v2.uploader.upload_stream({
                folder : "CommunityMemberResume",
                resource_type : 'raw'
            } , (error , result) => {
                if(error){
                    return reject(error);
                }else{
                    return resolve(result);
                }
            });

            docsUploader.end(fileBuffer);
        })

        console.log("Document uploaded succefully !!!")
        return response;
    } catch (error) {
        console.log("Internal error while Uploading !!!");
        process.exit();
    }
}

export default uploadFile;