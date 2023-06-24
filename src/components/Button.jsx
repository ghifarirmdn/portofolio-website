import React from "react";

function Button(props) {
  return (
    <>
      <button className="bg-primary text-white w-2/3 text-center rounded-md p-2 hover:bg-white hover:border hover:border-primary hover:text-[#5222D0] xl:w-1/3">
        {props.text}
      </button>
    </>
  );
}

export default Button;
