import React, { useState } from "react";

function toggleForm(e) {
    e.preventDefault();
  const container = document.querySelector('.container');
  container.classList.toggle('active');
}

function closelogin(){
    const element = document.getElementById("myNav");
    element.style.width = "0%";
  }



function Login() {

     //register states
     const [username,setUsername]=useState();
     const [email,setEmail]=useState();
     const [password,setPassword]=useState();

     //login states
     const [loginEmail,setLoginEmail]=useState();
     const [loginPass,setLoginPass]=useState();





  async function register (e){

    e.preventDefault();
    //console.log(username+" "+email+" "+password)
      const response = await fetch(`https://resumamabackend.herokuapp.com/auth/register/`,{
              method:"POST",
          headers:{
              "Content-Type":"application/json"
             },
          body:JSON.stringify({
              "email":email,
              "username":username,
              "password":password
          })
          });
          console.log(response)
  if(response.status==200){  
  const data = await response.json();
  console.log(data);
    alert("Register successful, please SignIn to continue")
  }
  else {
    //console.log("error");
    alert("Register unsuccessful");
    
  }
        
  }
  
  
  async function loginuser(e){
    e.preventDefault();
   // console.log(loginEmail+" "+loginPass)
    const response = await fetch(`https://resumamabackend.herokuapp.com/auth/login/`,{
              method:"POST",
          headers:{
              "Content-Type":"application/json"
             },
          body:JSON.stringify({
              "email":loginEmail,
              "password":loginPass
          })
          });
  if(response.status==200){  
  const Data = await response.json();
  //console.log(Data);
  const realData = Data.data;
  window.localStorage.setItem ("token",realData.token);
  window.localStorage.setItem ("userid",realData.id);
  //console.log(window.localStorage.getItem("token"));
  window.location="/dashboard/dashboard"

  }
  else {
      console.log("error");
      alert("Login unsuccessful, please try again")
  }        
  }
  

  return (
    <div class="overlay" id="myNav">
    <a class="closebtn" onClick={closelogin}>&times;</a>
    <section>
      <div className="container">
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="/img/welcome.png"
              alt=""
            />
          </div>
          <div className="formBx">
            <form>
              <h2>Log In</h2>
              <input type="email" name="email" placeholder="email" onChange={(e)=>setLoginEmail(e.target.value)}/>
              <input type="password" name="password" placeholder="Password" onChange={(e)=>setLoginPass(e.target.value)}/>
              <button class="entrybutton" onClick={(e)=>{loginuser(e)}}>Login</button>
              <button class="forgotbutton"><a href="/forgotPassword">Forgot Password?</a></button>
              <p class="signup">
                Don't have an account ?
                <a onClick={toggleForm}>
                  Sign Up.
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form>
              <h2>Create an account</h2>
              <input type="text" name="usernameuser" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
              <input type="email" name="emailuser" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)}/>
              <input type="password" name="passworduser" placeholder="Create Password" onChange={(e)=>setPassword(e.target.value)}/>
              <button class="entrybutton" onClick={(e)=>{register(e)}}>Sign Up</button>
              <p class="signup">
                Already have an account ?
                <a onClick={toggleForm}>
                  Sign in.
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="/img/Come.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Login;
