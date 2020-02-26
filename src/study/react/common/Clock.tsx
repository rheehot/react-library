import * as React from "react";
import * as moment from "moment";
import "./Clock.scss";


export const Clock = () => {

    const [dateFormat, setDateFormat] = React.useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    React.useEffect(() => {

        console.log("effect call");

        const intervalId = setInterval(() => {
            setDateFormat(moment().format('MMMM Do YYYY, h:mm:ss a'))
        }, 1000);

        return () => {

            console.log("effect end");

            clearInterval(intervalId);
        };

    }, []);

    return (
        <div className="clock-wrap">
            <span>{dateFormat}</span>
        </div>
    )
};
