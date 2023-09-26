import React, { useState,useEffect } from "react";
import "./template2.css";
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
import $ from "jquery";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ClipLoader from "react-spinners/ClipLoader";

function Template1(){
      
    

    function phoneview(){                             //for navbar
    // console.log("sdsjfhjf");
    $('.Temp1navItem').toggleClass("show");
    }
    //states
    const[load,setLoad]=useState(true)
    const [data,setData]=useState();
     //to be fetched from url..
    useEffect(()=>{
       // console.log(document.URL);
        const id=document.URL.split("/")[5];
        //console.log(id)
       
        async function fetchData(){
        const response=await fetch("https://resumamabackend.herokuapp.com/portfolios/portfolio.me",{
            method:"GET",
            headers:{
            "Content-Type":"application/json",
            "portfolio_id":id
         }
        })
        
        const realdata=await response.json();
    //    console.log(realdata[0])
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
        
      
        <div className="temp1outer">
            {load?<ClipLoader size={70} />:
            <div className="temp1Inner">
                <div className="temp1head canvasBox">                 
                <nav className="temp1nav" >
                    <ul >
            <li class="Temp1Logo">{data.name.split(" ")[0]}</li>
                        <li className="Temp1navItem"> <a href="#t1head">About</a></li>
                        <li className="Temp1navItem"> <a href="#t1skill">Skills</a></li>
                        <li className="Temp1navItem"> <a href="#t1project">Projects</a></li>
                        <li className="Temp1navItem"> <a href="#t1experience">Experience</a></li>
                        <li className="Temp1navItem"> <a href="#t1contact">Contact</a></li>
                        <li className="menuIcon" onClick={phoneview}><a href="#"><MenuIcon/></a></li>
                    </ul>
                </nav>
                <div class="temp1main" id="t1head">
                    <div class="contentdiv">
    <h1>{data.name}</h1>
                        <div className="aboutcontent">{data.about}</div>
                        <div className="hireme"><a target="_blank" href={data.resumeLink}>Hire Me!</a></div>
                    </div>
                    <div class="photodiv">   
                    <div class="squareframe"> 
                    <div class="bluesquare"></div>
                    <div class="rwhitesquare"></div>
                    <div class="lwhitesquare"></div>
                    <div class="greensquare"></div>
                    <div class="imgholder">
                    <img src={data.profileImage_url} />
                    </div>
                  </div>
                </div>
                </div>
                </div>

                <div className="temp1skill" id="t1skill"> 
                <div className="skilldiv">
                <div className="skilltag">Skills</div> 
                <div className="Grid-div">
                <div className="Grid">
                    {data.skills.map((item,index)=>
                    <div className="Grid-item">
                        <h1>{item}</h1>
                    </div>
                    )}
                    
                    </div>
                    </div>
                 </div>
                                
                </div>

                <div className="temp1proj" id="t1project"> 
        
                <div className="projdiv">
                <div className="projtag">Projects</div> 
                      

                <div className="proj-Grid-div">
                <div className="proj-Grid">
                    {data.projects.map((item,index)=>
                                    <div className="proj-card">
                        {/* <div style={{backgroundImage: `url("https://drive.google.com/uc?export=view&id=1SKXpCCo4OANHOlBcXNJyyPuLcNRQGIWq")`}} className="proj-card-img-container">
                        
                        </div> */}
                           
                        <div className="t3proj-card-img-container">
                          <img src={item.image_url}></img>
                        </div>


                        <div className="proj-card-content">
                        {/* <div> */}
                         <h1>{item.title}</h1>
                        <p className="proj-excerpt">{item.description}</p>
                        {/* </div> */}
                        </div>
                    </div>
                    )}
                   
                    
                    </div>
                </div>
                
               
                 </div>

                </div>

                <div className="temp1experience" id="t1experience">            
                    <div className="expdiv">
                    <div className="exptag">Experience</div>

                    <div className="expcontainer">

   
                    {
                   data.experience.map((item,index)=>{                     
                         return(
                        <div className={`timeline-block timeline-block-${index%2==0?`right`:`left`}`}>
                            <div className="marker"></div>
                            <div className="timeline-content">
                         <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>)
                    
                   })}
                        </div>
                        </div>
                
                </div>

                <div className="temp1foot" id="t1contact"> 
                  <div className="contactIcons">
                  <Popup trigger={<PhoneIcon className="footIcon"></PhoneIcon>} position="left center">
                <div>{data.mobile}</div>
  </Popup>    
                 
                  <a href={data.social_links.linkedIn}><LinkedInIcon className="footIcon"/></a>
                 {data.social_links.github? <a href={data.social_links.github}><GitHubIcon className="footIcon"/></a>:<></>}
                  <a href={`mailto:${data.email}`}><MailOutlineIcon className="footIcon"></MailOutlineIcon></a>
                  </div>
                  <div className="copyright"> ©Copyright {data.name}.com</div>
                </div>
            </div>}
                </div>
    )

}

export default Template1;