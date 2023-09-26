async function Validate(){
    console.log("validating.....");
    const userId=localStorage.getItem("userid");
    const token=localStorage.getItem("token");
    if((!userId)||(!token))
    {
        alert("Please SignIn/SignUp to continue..");
        window.location="/";
        
    }    
}
export default Validate