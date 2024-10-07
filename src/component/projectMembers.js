import { project_members } from "../variables";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const ProjectMembers=()=>{
    const navigate = useNavigate();
    const visit_profile = ()=>{
        navigate("/projectMembers/employeeDetails")
    }
    return(
        <>
            <div>
                <div className="flex g-20 flex-al-center project_mem_search">
                    <h1>Project Members</h1>
                    <div className="project_mem_search ">
                        <img src="/assets/search_icon.svg" alt="Icon"/>
                        <input type="text" placeholder="search 08 employees" className="project_mem_search_input"/>
                    </div>
                </div>
                <div className="employee_cards_wrapper flex scrollbar">
                {project_members.map((item, index) => {
                const currentStyleCounter = (0 + index) % 4;
                console.log(currentStyleCounter)
                return (
                    <div key={item.id} className={currentStyleCounter < 2 ? "employeeCard primary_card_bg_color" : "employeeCard secondary_card_bg_color"}>
                        <div className="employeeCardContent flex flex-al-center">
                            <div>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="employeeDetails">
                                <h4 className={currentStyleCounter < 2 ? "primary_card_text_color" : "secondary_card_text_color"}>{item.name}</h4>
                                <p>{item.designation}</p>
                            </div>
                            <div className="employee_view_profile_btn">
                                <button className="primary_button" onClick={visit_profile}>Visit Profile</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
            </div>
        </>
    )
}
export default ProjectMembers