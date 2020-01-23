import * as React from "react";
import {dayConvert, monthContractionConvert} from "../../typescript/date/dateConvert";

interface AppProp {

}

interface AppState {
    currentDate: Date
}

export default class Clock extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentDate: new Date()
        };

        this.startClock = this.startClock.bind(this);
        this.startClock();
    }

    startClock() {
        setInterval(() => {

			this.setState({
                currentDate: new Date()
			});
        }, 1000);
    }

    render() {

        const month = monthContractionConvert(this.state.currentDate);
        const day = dayConvert(this.state.currentDate);
        const date = this.state.currentDate.getUTCDate();
        const hour = this.state.currentDate.getUTCHours();
        const minute = this.state.currentDate.getUTCMinutes();
        const second = this.state.currentDate.getUTCSeconds();


        return (
            <div className="clock-wrap">
                <span>{month}</span>
                <span>{date}일</span>
                <span>{day}</span>
                <span>{hour}시</span>
                <span>{minute}분</span>
                <span>{second}초</span>
            </div>
        )
    }
}
