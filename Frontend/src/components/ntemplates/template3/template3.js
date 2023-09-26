import React, { useState,useEffect } from "react";
import "./template3.css";
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import $ from "jquery";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ClipLoader from "react-spinners/ClipLoader";

function Template3(){
      
 

    function phoneview(){                             //for navbar
    // console.log("sdsjfhjf");
    $('.Temp3navItem').toggleClass("show");
    }
    //states
    const[load,setLoad]=useState(true)
    const [data,setData]=useState();
     //to be fetched from url..
    useEffect(()=>{
        //window.location.reload();
        const id=document.URL.split("/")[5];
        //console.log(url)
       
        async function fetchData(){
        const response=await fetch("https://resumamabackend.herokuapp.com/portfolios/portfolio.me",{
            method:"GET",
            headers:{
            "Content-Type":"application/json",
            "portfolio_id":id
         }
        })
        
        const realdata=await response.json();
       // console.log(realdata[0])
        setData(realdata[0])
        if(data!==null){
        setTimeout(()=>{
        setLoad(false)
        },1000)
    }

     }
     fetchData();
    
       
    },[])
// console.log(data.projects);
    return (
        
      
        <div className="temp3outer">
            {load?<ClipLoader size={70} />:
            <div className="temp3Inner">
                <div className="temp3head canvasBox">                 
                <nav className="temp3nav" >
                    <ul >
            <li class="Temp3Logo">{data.name.split(" ")[0]}</li>
                        <li className="Temp3navItem"> <a href="#t3head">About</a></li>
                        <li className="Temp3navItem"> <a href="#t3skill">Skills</a></li>
                        <li className="Temp3navItem"> <a href="#t3project">Projects</a></li>
                        <li className="Temp3navItem"> <a href="#t3experience">Experience</a></li>
                        <li className="Temp3navItem"> <a href="#t3contact">Contact</a></li>
                        <li className="menu3Icon" onClick={phoneview}><a href="#"><MenuIcon/></a></li>
                    </ul>
                </nav>
                <div class="temp3main" id="t3head">
                  <div class="t3contentdiv">
    <h1>{data.name}</h1>
                        <div className="t3aboutcontent">{data.about}</div>
                        <div className="t3hireme"><a target="_blank" href={data.resumeLink}>Hire Me!</a></div>
                    </div>
                    <div class="t3photodiv">   
                    <div class="t3squareframe"> 
                    <div class="t3bluesquare"></div>
                    <div class="t3rwhitesquare"></div>
                    <div class="t3lwhitesquare"></div>
                    <div class="t3greensquare"></div>
                    <div class="t3imgholder">
                     <img src={data.profileImage_url}/>
                    </div>
                  </div>
                </div>
                </div>
                </div>

                <div className="temp3skill" id="t3skill"> 
                <div className="t3skilldiv">
                <div className="t3skilltag">Skills</div> 
                <div className="t3Grid-div">
                <div className="t3Grid">
                    {data.skills.map((item,index)=>
                    <div className="t3Grid-item">
                        <h1>{item}</h1>
                    </div>
                    )}
                    
                    </div>
                    </div>
                 </div>
                                
                </div>

                <div className="temp3proj" id="t3project"> 
        
                <div className="t3projdiv">
                <div className="t3projtag">Projects</div> 
                      

                <div className="t3proj-Grid-div">
                <div className="t3proj-Grid">
                    {data.projects.map((item,index)=>
                    
                                    <div className="t3proj-card">
                      
                        <div className="t3proj-card-img-container">
                          <img src={item.image_url}></img>
                        </div>


                        <div className="t3proj-card-content">
                        
                        <h1>{item.title}</h1>
                        <p className="t3proj-excerpt">{item.description}</p>
                        </div>
                        
                    </div>
                    )}
                   
                    
                    </div>
                </div>
                
               
                 </div>

                </div>

                <div className="temp3experience" id="t3experience">            
                    <div className="t3expdiv">
                    <div className="t3exptag">Experience</div>

                    <div className="t3expcontainer">

   
                    {
                   data.experience.map((item,index)=>{                     
                         return(
                        <div className={`t3timeline-block t3timeline-block-${index%2==0?`right`:`left`}`}>
                            <div className="t3marker"></div>
                            <div className="t3timeline-content">
                         <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>)
                    
                   })}
                        </div>
                        </div>
                
                </div>
                
                <div className="temp3foot" id="t3contact"> 
                  <div className="t3contactIcons">
                  <Popup trigger={<PhoneIcon className="t3footIcon"></PhoneIcon>} position="left center">
                <div>{data.mobile}</div>
  </Popup>    
                 
                  <a href={data.social_links.linkedIn}><LinkedInIcon className="t3footIcon"/></a>
                  {data.social_links.github? <a href={data.social_links.github}><GitHubIcon className="footIcon"/></a>:<></>}
                  <a href={`mailto:${data.email}`}><MailOutlineIcon className="t3footIcon"></MailOutlineIcon></a>
                  </div>
                  <div className="t3copyright"> ©Copyright {data.name}.com</div>
                </div>
            </div>}
                </div>
    )

}

export default Template3;