import React from "react"
import "./NoDueForm.css"

export const NoDueForm = () =>{

    return(
        <div className="pdf">
                <h1>No Due Form</h1>
                <embed src="Assets/NoDueForm.pdf" type="application/pdf" width="100%" height="800px"/>
            </div>
    );
};