import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Experience(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    // <div className="note">
    //   <h1 class="formh1">{props.title}</h1>
    //   <p>{props.desc}</p>
    //   <button onClick={handleClick}><DeleteIcon className="deleteIcon" /></button>
    // </div>

<div className="exp-grid-item">
      <div className="exp-grid-card-content">
                        
      
      <div class="expdesc">
      <h3>{props.title}</h3>
      <p className="exp-excerpt">{props.desc}</p>
      <br /> <br />
      <DeleteOutlineIcon className="expdeleteicon" onClick={handleClick} />
      </div>
      
      {/* <div class="expdel"> <DeleteOutlineIcon className="expdeleteicon" onClick={handleClick} /></div> */}
      
      </div>
    </div>

  );
}

export default Experience;

{/* <div className="exp-grid-item">
      <div className="exp-grid-card-content">
                        
      <h3>{props.title}</h3>
      <p className="proj-excerpt">{props.desc}</p>
      <DeleteOutlineIcon className="projdeleteicon" onClick={handleClick} />
      </div>
    </div> */}