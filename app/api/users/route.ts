export const runtime = 'nodejs';


import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/model/userRegister.model";


export async function GET(req : NextRequest) {
    try {
        await dbConnect();

        const users = await User.find();

        return NextResponse.json({
            users
        } , {status : 200})
    } catch (error : any) {
        console.log(error?.message)
        return NextResponse.json({message : "Failed to fetch users !!"} , {status : 500});
    }    
}