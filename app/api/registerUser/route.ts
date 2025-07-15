import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/model/userRegister.model";
import {nanoid} from "nanoid";
import uploadFile from "@/lib/clodinaryV2";

interface v2CloudinarResult{
    url : string,
}
export async function POST(req : NextRequest){
    dbConnect();

    try {

        const {name , email , address , instagram , linkedin , github ,githubUsername , college , graduationYear , currentYear , resume, codingLanguages , attendOutOfState , gender , hasLaptop , phone , refernceSource  ,  friendReferenceId , otherDescription , socialMedia , leader } = await req.json();
        
        const existingUser = await User.findOne({email : email});
        if(existingUser) return NextResponse.json({
            message : "User is already registered with given Email !!!",
            status : false
        } , {status : 201})

        if(friendReferenceId){
            await User.findOne({userID : friendReferenceId} , { $inc : {referCount : 1}});
        }
    

        console.log(resume)
        // const fileArrayBuffer = await resume.arrayBuffer();
        // const fileBuffer = Buffer.from(fileArrayBuffer);
        // const response =  uploadFile(fileBuffer);



        // const newUser = new User({
        //     userID : nanoid.toString(),
        //     name : name,
        //     email : email,
        //     address : address,
        //     instaAccountLink : instagram || null,
        //     linkedinAccountLink : linkedin,
        //     githubAccountLink : github,
        //     githubAccountUsername : githubUsername,
        //     collegeName : college,
        //     graduationYear : graduationYear,
        //     collegeYear : currentYear,
        //     attendStatus : attendOutOfState,
        //     gender : gender,
        //     laptopHave : hasLaptop,
        //     mainRefrence : refernceSource,
        //     codingLanguages : codingLanguages,
        //     freindRef : friendReferenceId || null,
        //     other : otherDescription || null,
        //     refrenceSocialMediaPlatform : socialMedia || null,
        //     leader : leader || null,
        //     referCount : 0,
        //     resumeLink : null
        // });

        // await newUser.save();


        // console.log(name , email , address , instagram , linkedin , github ,githubUsername , college , graduationYear , currentYear , resume, codingLanguages , attendOutOfState , gender , hasLaptop , phone , refernceSource  ,  friendReferenceId , otherDescription , socialMedia , leader )
        return NextResponse.json({
            message : "User is registered succefully !!!",
            status : true
        } , {status : 200})
    } catch (error) {
        return NextResponse.json({
            message : "Error while registering user profile !!!",
            status : false
        } , {status : 500});
    }
}