import React from "react";

export const Skills = (props) => {
  return (
    <div className="procent">
      <div class="itm">{props.name}</div>
      <div className="slider-parent">
        <div
          className="slider"
          style={{
            width: props.procent,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
