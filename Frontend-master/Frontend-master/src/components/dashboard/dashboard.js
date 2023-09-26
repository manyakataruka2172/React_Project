import React ,{useEffect,useState}from "react";
import "./dashboard.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';
import EditIcon from '@material-ui/icons/Edit';
import Validate from '../../Validate'
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import ClipLoader from "react-spinners/ClipLoader";

function Dashboard(){

//logic---> fetch all the portfolios of the loggedIn user
   const[data,setData]=useState();
   const[loading,setLoading]=useState(true);

useEffect(()=>{
    Validate();
    const user_id=localStorage.getItem("userid");
    const token=localStorage.getItem("token")
    async function fetchData(){
      const response=await fetch("https://resumamabackend.herokuapp.com/portfolios/myportfolios",{
          method:"GET",
          headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`,
          "user_id":user_id
       }
      })
     // console.log(response)
      const realdata=await response.json();
     // console.log(realdata)
      setData(realdata)
      if(data!==null){
      setTimeout(()=>{
      setLoading(false)
      },1000)}
     // await setData(realdata)
     
  }
fetchData();


},[])
// console.log(data);
  return (
  <div class="dash-main">
    <div class="dash-nav-out">
    <div class="dash-nav-in">
        
    <div class="LOGO">
        {/* <img class="dash-logo-img" src="/img/b-r.png"></img> */}
        <p class="dash-logo-img"> Resumama</p>
       <div className="chnglogo"> R</div> 
    </div>

      <div class="dash-name-div">      
        <div class="dash-name">DASHBOARD</div>
      </div>
      
      <div class="accnt-div">
        <button class="accnt-btn">
          {/* <i class="material-icons"><AccountCircleIcon className="accnt"/></i> */}
          <AccountCircleIcon className="material-icons accnt"/>
          <span class="accnt-setting">Account Settings</span>
          <ul class="dropdown">
            <li class="active"><a href="/changePassword">Change Password</a></li>
            <li class="active" onClick={()=>localStorage.clear()}><a href="/">Logout</a></li>
            
          </ul>
        </button>
      </div>
    </div>
      
    </div>
    

    <div class="dash-center-out">
    <div class="dash-center-in">
     <div class="temp-cards">

     <div class="dash-container">
  <main class="grid">
    
  {loading? <ClipLoader loading={loading} size={70} />:  
  
    data.map((item,index)=>
    <article>
    <div class="tempPic"> <img src={item.template_no==1?"/img/blue-black-template.png":"/img/pink-brown-template.png"} alt="Sample photo" /> </div>
      <div class="texTitle">{item.title}</div>
        <div class="bottom-bar">
         <div class="view bottom-bar-icon"><button class="viewa"  onClick={(e)=>window.open(`https://resumama.netlify.app/${item.template_no===1?"classicMix":"galadrielLight"}/my_portfolio/${item._id}`,'_blank')}><VisibilityIcon /></button></div>
         <div class="share bottom-bar-icon"><button onClick={(e)=>alert("Link to your portfolio: "+`https://resumama.netlify.app/${item.template_no===1?"classicMix":"galadrielLight"}/my_portfolio/${item._id}`)}><ShareIcon/></button></div>
        </div>      
    </article>)}


    <article class="createCard"> 
    {/* <div class="tempPic"> <img src="https://picsum.photos/600/400?image=1083" alt="Sample photo" /> </div> */}
    <div class="texTitle"><p>Create<br /> Portfolio</p></div>
    <div class="dtext">
        
        <div class="bottom-bar">
        <div class="add bottom-bar-icon"><button onClick={()=>window.location="/createPortfolio/create"}><AddToPhotosIcon /></button></div>
        </div>
    </div>
    </article>

  </main>
</div>

     </div>
       <div class="quotes"><p>
      Share your portfolio website and<br /> ace that interview. <br /><span>Resumama</span><br /> believes in you. <br />Good luck!
       </p></div>
     </div>
       
    </div>
    {/* <div class="dash-foot">Copyright</div> */}

    <div className="dashfoot"> 
                  <div className="dashcontactIcons">
                  <a style={{color:"white"}} href={`mailto:resumama.official@gmail.com`}><MailOutlineIcon className="landfootIcon"></MailOutlineIcon></a>
                  </div>
                  <div className="dashcopyright"> Copyright © Resumama.com</div>
                </div>
  </div>
  );
}



export default Dashboard;





// testing

