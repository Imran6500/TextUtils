import React from 'react'

function Alert(props) {
  const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div 
    style={{
      "backgroundColor" : props.alert.type === "error" ? "#f1aeb5" : "##a3cfb"
    }}
     className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
   <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
  </div>
  )
}

export default Alert