import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        className="h-10 max-w-lg rounded-lg"
        src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
        alt=""
      />
    </div>
  );
}

export default Logo;
