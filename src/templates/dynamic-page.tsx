import React from "react";

export default ({pageContext}) => {
    console.log(pageContext);
    
  return (
    <div>
      <div>Hello Dynamic Page from {pageContext.name}</div>
      <div> he is {pageContext.age} years old. </div>
      <div>This page is create dynamically at Build Time</div>
    </div>
  )
}