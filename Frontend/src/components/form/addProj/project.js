import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import $ from "jquery";

function Project(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

   return (
     <div className="proj-grid-item">
      <div className="proj-grid-card-img-container">
            <img src={ `https://drive.google.com/uc?export=view&id=${props.img.split("/")[5]}`}></img>
      </div>
      <div className="proj-grid-card-content">
                        
      <h3>{props.title}</h3>
      <p className="proj-excerpt">{props.desc}</p>
      <DeleteOutlineIcon className="projdeleteicon" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Project;

   