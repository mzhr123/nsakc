import React from "react"
import { HeaderSection } from "../../HeaderSection/HeaderSection"
import "./StudentProfForm.css"
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { NoDueForm } from "../NoDueForm/NoDueForm";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import { StudentExamForm } from "../StudentExamForm/StudentExamForm";
import { StudentForm } from "../StudentForm/StudentForm";


export const StudentProfForm = () =>{

    return(
        <Router>
        <section>
        <div>
            <HeaderSection/>
        </div>
        <div className="list">
                <ListGroup>
                    <h3>Examination Cell</h3>
                    <ListGroup.Item className="element"> <a href="/StudentForm">Student Profile Reg. Form</a> </ListGroup.Item>
                    <ListGroup.Item className="element"><a href="/StudentExamForm">Student Exam (Fee) Form</a></ListGroup.Item>
                    <ListGroup.Item className="element"><a href="/NoDueForm">No Due Form</a></ListGroup.Item>
                </ListGroup>
                
            </div>
            
            <Switch>
               <Route path="/StudentForm">
                   <StudentForm/>
               </Route>
                    <Route path="/NoDueForm">
                        <NoDueForm/>
                    </Route>
            <Route path="/StudentExamForm">
                    <StudentExamForm/>
                    </Route>

                </Switch>
            </section>
            </Router>
    );
};