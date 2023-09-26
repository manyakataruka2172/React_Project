const mongoose=require('mongoose');
const portfolioSchema=new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String
    },
    profileImage_url:{
        type:String
    },
    social_links:{
        linkedIn:String,
        github:String,
    },
    about:{
        type:String,
        required:true
    },
    skills:[],
    projects:[{
        title:String,
        description:String,
        image_url:String
    }],
    experience:[{
        title:String,
        description:String
    }]
    ,
    template_no:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    resumeLink:{
        type:String,
        required:true
    }
    



})


module.exports=mongoose.model("Portfolio",portfolioSchema);