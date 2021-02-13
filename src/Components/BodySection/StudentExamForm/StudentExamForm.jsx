import React from "react"
import "./StudentExamForm.css"
import { Button } from "react-bootstrap";

export const StudentExamForm = () =>{

    return(
        <div className="main">
            <div className="addons">
                <Button className="button" variant="secondary" size="lg">
      Exam Application Form For 1 Year B.Tech
    </Button>

    <Button className="button" variant="secondary" size="lg">
      Exam Application Form For 2Yr 1Sem 
    </Button>

    <Button className="button" variant="secondary" size="lg">
      Exam Application Form For 2Yr 2Sem 
    </Button>
    
    <Button className="button" variant="secondary" size="lg">
      Exam Application Form For 3Yr 1Sem 
    </Button>
    
    <Button className="button" variant="secondary" size="lg">
      Exam Application Form For 3Yr 2Sem 
    </Button>
    
    <Button className="button" variant="secondary" size="lg">
      Exam Application Form For 4Yr 1Sem 
    </Button>

    <Button className="button" variant="secondary" size="lg">
      Exam Application Form For 4Yr 2Sem 
    </Button>

    <Button className="button" variant="secondary" size="lg">
     New Exam Application Form For 2Yr 2Sem 
    </Button>

    <Button className="button" variant="secondary" size="lg">
      New Exam Application Form For 3Yr 2Sem 
    </Button>
    
    <Button className="button" variant="secondary" size="lg">
      New Exam Application Form For 4Yr 2Sem 
    </Button>

    <Button className="button" variant="secondary" size="lg">
      New Exam Application Form For Adv Supply 4yr 2sem
    </Button>
    
    <Button className="button" variant="secondary" size="lg">
      JNTUH REG FORM
    </Button>
            </div>
            <div className="pdf">
                <h1>Student Exam (Fee) Form</h1>
                <embed src="Assets/exam.pdf" type="application/pdf" width="100%" height="800px"/>
            </div>
        </div>
    );
};