import React from "react";

function Info(props) {
  return (
    <div id="dashboard-personal" className="dashboard-container">
      <p>Welcome back,</p>
      <br />
      <h1>
        {[props.user.first_name, props.user.middle_name, props.user.last_name]
          .filter(Boolean)
          .join(" ")}
      </h1>
    </div>
  );
}

export default Info;
