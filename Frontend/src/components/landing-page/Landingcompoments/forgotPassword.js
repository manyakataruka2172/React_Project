import React,{useState,useEffect} from "react";

function ForgotPassword(){
       
      const [email,setEmail]=useState("");
      const [newpass,setNewpass]=useState("");

      async function handlesubmit(e){
          e.preventDefault();
          const response= await fetch("https://resumamabackend.herokuapp.com/auth/forgotPassword",{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                  "email":email,
                  "newPassword":newpass
              })
          });
        const data=await response.json();
        console.log(data)
        if(response.status!==200){
            alert("unsuccessful, please try again")
        }
        else{
            alert("successful, please login to continue..");
            window.location="/"
        }

      }

return (
    <div class="forgotpss">
        <form>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
            <br />
            <input placeholder="New Password" onChange={(e)=>setNewpass(e.target.value)}></input>
            <br />
            <button onClick={(e)=>handlesubmit(e)}>Submit</button>
        </form>
    </div>
);
}
 export default ForgotPassword;