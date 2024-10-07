import { current_and_upcoming } from "../variables"
import { completed } from "../variables"
import { Failed } from "../variables"
import { taskStatus } from "../variables"
import EmployeeEventCard from "./employeeEventCard"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#F9A602',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

const EmployeeDetails =()=>{
    const [value, setValue] = React.useState(5);
    return(
        <>
            <div>
                <div className="employeeDetails_wrapper">
                    <div className="employeeDetails flex flex-dir-column">
                        <div>
                            <div>

                            </div>
                            <div>
                                <h1>Employee Details</h1>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-al-center g-20 employee_info">
                                <div>
                                    <img src="/assets/employee_profile.svg"/>
                                </div>
                                <div className="flex flex-dir-column g-10">
                                    <p className="employee_profile_label">Member</p>
                                    <h3>Welcome, Alexa</h3>
                                    <p className="policy_content">Manage your info, privacy, and security to make Frontend work better for you. <a className="linkText">Learn more</a></p>
                                </div>
                            </div>
                            <div className="flex g-20 employee_info_data">                            
                                <div className="ratings_card">
                                    <div className="flex rating_heading">
                                        <h5>Ratings</h5>
                                        <img src="/assets/edit_icon.svg"/>
                                    </div>
                                    <div>
                                        <div className="flex g-10 flex-jc-center">
                                            <div>
                                                <img src="/assets/employee_avatar.svg"/>
                                            </div>
                                            <div>
                                                <h4>Batosh</h4>
                                                <h4 className="linkText">CEO</h4>
                                            </div>    
                                        </div>
                                        <div className="rating">
                                            <StyledRating name="read-only" value={value} readOnly size="large" />
                                        </div>
                                        
                                        <div className="rating_content">
                                            <p>Lorem ipsum dolor sit amet consectetur. Fringilla nunc etiam ornare massa. Volutpat commodo elementum ipsum lectus. Proin leo sit auctor semper.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="graph_card">
                                    <div className="graph_card_wrapper flex flex-al-center ">
                                        <div className="chart">
                                            <img src="/assets/graph.svg"/>
                                        </div>
                                        <div className="chart_content flex flex-dir-column g-10">
                                            <h5>All task by complete status</h5>
                                            <div className="task_status flex flex-dir-column g-10">
                                                {
                                                    taskStatus.map((item)=>{
                                                        return(
                                                            <div className="flex g-10">
                                                                <h6 className={item.taskType == "completed" ? "complete" : "progress"}>{item.percent_completed}</h6>
                                                                <h6>{item.taskName}</h6>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex g-20 employee_work_status">
                            <EmployeeEventCard ticketData={current_and_upcoming} cardHeading="Current & Upcoming" card_color="upcoming_card_color"/>
                            <EmployeeEventCard ticketData={completed} cardHeading="Completed" card_color="completed_card_color"/>
                            <EmployeeEventCard ticketData={Failed} cardHeading="Failed" card_color="failed_card_color"/>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default EmployeeDetails