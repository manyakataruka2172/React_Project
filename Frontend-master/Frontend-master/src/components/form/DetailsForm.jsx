import React ,{useState, useEffect} from 'react';
import './form.css';
import SkillForm from '../form/addSkill/addSkillForm';
import ExperienceForm from '../form/addExp/addExpForm';
import ProjectForm from '../form/addProj/addProjForm';
import Validate from '../../Validate';
import ClearIcon from '@material-ui/icons/Clear';

function DetailsForm(temp_no){
useEffect(()=>{
     Validate();
    // console.log(temp_no)
     },[])


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [mob,setMob]=useState("");
const [linkedIn,setLinkedIn]=useState("");
const [profileImage,setProfileImage]=useState("");
const [github,setGithub]=useState("");
const [about,setAbout]=useState("");
const [experiences, setExp] = useState([]);
const [projects, setProj] = useState([]);
const [skills, setSkill] = useState([]);
const [title,setTitle]=useState("");
const [resumeLink,setResumeLink]=useState("");

const user_id=localStorage.getItem("userid");
const token=localStorage.getItem("token");

async function handleSubmit(){
  // e.preventDefault();
    const myProjects=[];
    projects.map((item,index)=>{
      const obj={
        title:item.title,
        description:item.description,
        image_url:`https://drive.google.com/uc?export=view&id=${item.img.split("/")[5]}`
      }
      myProjects.push(obj)
     // item.img=`https://drive.google.com/uc?export=view&id=${item.img.split("/")[5]}`
    })
    

   const portfolio={
       user_id:user_id,
       name:name,
       email:email,
       mobile:mob,
       about:about,
       profileImage_url:profileImage,
       social_links:{
           linkedIn:linkedIn,
           github:github
       },
       skills:skills,
       experience:experiences,
       projects:myProjects,
       template_no:temp_no.temp_no,
       title:title,
       resumeLink:resumeLink
      }
  // console.log(portfolio);
   const response=await fetch("https://resumamabackend.herokuapp.com/portfolios/create_new",{
    method:"POST",
    headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
    },
body:JSON.stringify(
    portfolio
    )
})
   console.log(response)
   if(response.status==200){
     window.location="/dashboard/dashboard"
   }
   else{
     alert("Portfolio not created")
   }   
}

return(
   <div class="form-div-external">
   <div class="formdiv-internal">
     <div class="form-main-div">
     <div class="notedetails">
           
           <h2 class="bline">Important Points!</h2>
           <ul>
             <li>Fields marked with a red aestrick are required.</li>
             <li>Type capital and small letters correctly.</li>
             <li>Provide <span style={{color:"red"}}>viewable drive link</span> for images.</li>
             <li>Dimensions for Profile Picture: <span style={{color:"red"}}>210px x 210px.</span></li>
             <li>Dimensions for Project Image: <span style={{color:"red"}}>500px x 500px.</span></li>
           </ul>
           </div>

      <div class="basicdetails">
           
      <h2 class="bline">Basic Details</h2>
        <div class="basicdetailsdiv">
        <div class="inputholder"> <div class="starHolder"><p>*</p></div><input class="basicinput" required placeholder="Name....." onChange={(e)=>setName(e.target.value)}></input></div>
        <div class="inputholder"> <div class="starHolder"><p>*</p></div><input class="basicinput" required placeholder="Email....." onChange={(e)=>setEmail(e.target.value)}></input></div>
        <div class="inputholder"> <div class="starHolder"><p>*</p></div><input class="basicinput" required placeholder="Contact....." onChange={(e)=>setMob(e.target.value)}></input></div>
        <div class="inputholder"> <div class="starHolder"><p>*</p></div><input class="basicinput" required placeholder={"LinkedIn....."} onChange={(e)=>setLinkedIn(e.target.value)}></input></div>
        <div class="inputholder"> <div class="starHolder"><p>*</p></div><input class="basicinput" required placeholder={"Resume Link....."} onChange={(e)=>setResumeLink(e.target.value)}></input></div>
        <div class="inputholder"> 
        <div class="starHolder"><p>*</p></div>
        <input class="basicinput" required placeholder="Drive link for Profile Picture....." onChange={(e)=>setProfileImage(
          `https://drive.google.com/uc?export=view&id=${e.target.value.split("/")[5]}`)}></input>
        </div>
        <div class="inputholder"> <div class="starHolder"></div> <input placeholder="Github....." onChange={(e)=>setGithub(e.target.value)}></input></div>
        
      </div>       

      </div>     
        

      <div class="aboutdetails">
           
           <h2 class="bline">About Yourself</h2>
           <div class="inputholder txtar"> 
           <div class="starHolder"><p>*</p></div>
           <textarea placeholder="About....." onChange={(e)=>setAbout(e.target.value)} rows="5" ></textarea>
           </div>
           </div>


       

        <SkillForm skills={skills} setSkill={setSkill}/>
        <ProjectForm projects={projects} setProj={setProj}/>
        <ExperienceForm experiences={experiences} setExp={setExp}/>
        
        <div class="aboutdetails">
           
           <h2 class="bline">Title for Portfolio</h2>
           <div class="inputholder txtar"> 
           <div class="starHolder"><p>*</p></div>
            <textarea placeholder="Title....." onChange={(e)=>setTitle(e.target.value)} rows="2" ></textarea>
           </div>
           </div>
        
     </div>
        
          
    </div>
    <button class="form-submit-button" onClick={handleSubmit}> Submit</button>
    {/* <div class="formfooter">
    Copyright © Resumama
    </div> */}
   </div> 
    
)

}
export default DetailsForm