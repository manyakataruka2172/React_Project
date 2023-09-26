import React ,{useState,useEffect} from "react";
import Validate from '../../Validate'
function ChangePassword(){
    useEffect(()=>{
        Validate();
        },[])

    //states

    const [oldpass,setOldPass]=useState("");
    const [newpass,setNewPass]=useState("");
    
        const user_id=localStorage.getItem("userid");
    
    async function handlesubmit(e){
        e.preventDefault();
        const response = await fetch("https://resumamabackend.herokuapp.com/auth/changePassword",{
            method:"POST",
             headers:{
             "Content-Type":"application/json"
                },
              body:JSON.stringify({
               "userId":user_id,
               "oldPassword":oldpass,
               "newPassword":newpass  
          })
        });
        const data=await response.json();
       // console.log(data)
       if(response.status!==200){
           alert("unsuccessful")
       }
       else{
           alert("password change successful,please login with your new password");
        window.location="/"
        localStorage.clear();
       }

    } 
return (
    <div class="changepss">
        <form>
            <input placeholder="Old Password" onChange={(e)=>setOldPass(e.target.value)}></input>
            <br />
            <input placeholder="New Password" onChange={(e)=>setNewPass(e.target.value)}></input>
            <br />
            <button onClick={(e)=>handlesubmit(e)}>Submit</button>
        </form>
    </div>
);
}
 export default ChangePassword;