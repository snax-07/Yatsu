export const runtime = 'nodejs';


import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/model/userRegister.model";
import {nanoid} from "nanoid";
import {update} from '@/lib/sheetUpdater'


export async function POST(req : NextRequest){
    await dbConnect();

    try {
        const {name , email , address , instagram , linkedin , github ,githubUsername , college , graduationYear , currentYear , resume, codingLanguages , attendOutOfState , gender , hasLaptop , phone , referenceSource  ,  friendReferenceId , otherDescription , socialMedia , leader } = await req.json();
         

        const existingUser = await User.findOne({email : email});
        if(existingUser) return NextResponse.json({
            message : "User is already registered with given Email !!!",
            status : false
        } , {status : 201})

        if(friendReferenceId){
            await User.findOne({userID : friendReferenceId} , { $inc : {referCount : 1}});
        }

        await update([name , email , address , instagram , linkedin , github , githubUsername , college , graduationYear , currentYear , attendOutOfState , gender , hasLaptop , phone , referenceSource]);
        const newUser = new User({
            userID : nanoid(),
            name : name,
            email : email,
            address : address,
            instaAccountLink : instagram || null,
            linkedinAccountLink : linkedin,
            githubAccountLink : github,
            githubAccountUsername : githubUsername,
            collegeName : college,
            graduationYear : graduationYear,
            collegeYear : currentYear,
            attendStatus : attendOutOfState,
            gender : gender,
            laptopHave : hasLaptop,
            mainRefrence : referenceSource,
            codingLanguage : codingLanguages,
            freindRef : friendReferenceId || null,
            other : otherDescription || null,
            refrenceSocialMediaPlatform : socialMedia || null,
            leader : leader || null,
            referCount : 0,
            phoneNumber : phone
        });

        await newUser.save();


        // console.log(name , email , address , instagram , linkedin , github ,githubUsername , college , graduationYear , currentYear , resume, codingLanguages , attendOutOfState , gender , hasLaptop , phone , refernceSource  ,  friendReferenceId , otherDescription , socialMedia , leader )
        return NextResponse.json({
            message : "User is registered succefully !!!",
            status : true
        } , {status : 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message : "Error while registering user profile !!!",
            status : false
        } , {status : 500});
    }
}
