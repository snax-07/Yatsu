import {model , models , Schema , Document }from 'mongoose'

enum refSocialMediaPlatform  {
    INSTAGRAM = "instagram",
    TWITTER = "twitter",
    LINKEDIN = 'linkedin',
    THREADS = "threads"
}

interface userReg {
    userID : string,
    name : string,
    email : string,
    address : string,
    instaAccountLink : string,
    linkedinAccountLink : string,
    githubAccountLink : string,
    githubAccountUsername : string,
    collegeName : string,
    graduationYear : number,
    collegeYear : string,
    codingLanguage : string[],
    attendStatus : string,
    gender : string,
    laptopHave : string,
    phoneNumber : number,
    mainRefrence : string,
    freindRef : string,
    other : string,
    refrenceSocialMediaPlatform : refSocialMediaPlatform,
    leader : string,
    referCount : number
}

const userRegister : Schema<userReg> = new Schema<userReg>({
    userID : { type : String , required : true},
    name : { type : String , required : true},
    email : { type : String , required : true},
    address : { type : String , required : true},
    instaAccountLink : { type : String , required : false},
    linkedinAccountLink : { type : String , required : true},
    githubAccountLink : { type : String , required : false , default : null},
    githubAccountUsername : { type : String , required : false , default : null},
    collegeName : {type : String , required : true},
    graduationYear : {type : Number , required : true},
    collegeYear : {type : String , required : true},
    codingLanguage : {type : [String] , required : true},
    attendStatus : {type : String , required : true},
    gender : {type : String , required : true},
    laptopHave : {type : String , required : true},
    phoneNumber : {type : Number , required : true},
    mainRefrence : {type : String , required : true},
    freindRef : {type : String , required : false , default : null},
    other : {type : String , required : false , default : null},
    refrenceSocialMediaPlatform : {type : String , required : false , default : null},
    referCount : {type : Number , required : true , default : 0},
    leader : {type : String , required : false}
} , {timestamps : true})


const User = models.User || model<userReg>("User" , userRegister);
export default User;