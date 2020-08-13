import React from "react";

export const Item = (props) => {
  return (
    <div className="item">
      <div>
        <span>
          {props.startYear} {props.endYear}
        </span>
      </div>
      <div>
        <div>{props.title}</div>
        <div>
          <span>{props.institute} - </span>
          <span> {props.location}</span>
        </div>
        <div>
          <span>{props.nameGitProject} </span>
          <span>{props.gitLink}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
