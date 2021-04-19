import React from "react";

const PageHeader = (props)=>{
    return (
        <div className="row py-5">
                <div className="col-12 text-center">
                    <h3>{props.title}</h3>
                </div>
            </div>
    )
}

export default PageHeader;