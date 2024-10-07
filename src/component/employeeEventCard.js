

const EmployeeEventCard=({ticketData,cardHeading,card_color})=>{
    return(
        <>
            <div className="current_and_upcoming_events">
                <div className="current_and_upcoming_events_heading">
                    <h6>{cardHeading}</h6>
                </div>
                <div className="current_and_upcoming_events_content flex flex-dir-column scrollbar">
                    {
                        ticketData.map((item) => {
                            return (
                                <>
                                    <div className={`current_and_upcoming_events_content_card flex flex-dir-column g-10 ${card_color}`}>
                                        <div>
                                            <h5>{item.eventName}</h5>
                                        </div>
                                        <div className="flex g-10">
                                            <div className="flex g-5">
                                                <img src="/assets/ticket_icon.svg" />
                                                <h6>{item.ticketNo}</h6>
                                            </div>
                                            <h6 className={item.priority == "High" ? "high_prior" : "low_prior"}>{item.priority}</h6>
                                        </div>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default EmployeeEventCard