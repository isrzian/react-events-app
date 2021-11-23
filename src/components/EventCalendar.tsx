import React, {FC} from "react";
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EventCalendarProps {
    events: IEvent[]
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {

    function dateCellRender(value: Moment) {
        const formattedDate = formatDate(value.toDate())
        const currentDayEvents = props.events.filter(e => e.date === formattedDate)
        return (
            <div>
                {
                    currentDayEvents.map((e, index) => <div key={index}>{e.description}</div>)
                }
            </div>
        );
    }

    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    )
}