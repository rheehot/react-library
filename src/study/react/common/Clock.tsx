import * as React from "react";
import * as moment from "moment";
import "./Clock.scss";


export const Clock = () => {

    const [dateFormat, setDateFormat] = React.useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    const startClock = () => {
        setInterval(() => {
            setDateFormat(moment().format('MMMM Do YYYY, h:mm:ss a'))
        }, 1000);
    };

    return (
        <div className="clock-wrap">
            <span>{dateFormat}</span>
        </div>
    )
};
