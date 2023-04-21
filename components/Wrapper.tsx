import React from "react";

const Wrapper = ({children,className}:any) => {
  return (
    <div className={`w-full max-[1280px] px-5 md:px-20 mx-auto ${className || ""}`}>{children}      
    </div>
  )
}

export default Wrapper
