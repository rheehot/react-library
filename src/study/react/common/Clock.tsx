import * as React from "react";
import * as moment from "moment";
import "./Clock.scss";


export default function Clock() {

    const [dateFormat, setDateFormat] = React.useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    React.useEffect(() => {

        const intervalId = setInterval(() => {
            setDateFormat(moment().format('MMMM Do YYYY, h:mm:ss a'))
        }, 1000);

        return () => {

            clearInterval(intervalId);
        };

    }, []);

    return (
        <div className="clock-wrap">
            <span>{dateFormat}</span>
        </div>
    )
};
