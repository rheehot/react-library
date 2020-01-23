import * as React from "react";
import {dayConvertEng, dayConvertKor} from "../../typescript/date/dayConvert";

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

        const month = this.state.currentDate.getUTCMonth() + 1;
        const date = this.state.currentDate.getUTCDate();
        const hour = this.state.currentDate.getUTCHours();
        const minute = this.state.currentDate.getUTCMinutes();
        const second = this.state.currentDate.getUTCSeconds();
        const dayEng = dayConvertEng();

        return (
            <div className="clock-wrap">
                <span>{month}월</span>
                <span>{date}일</span>
                <span>{dayEng}</span>
                <span>{hour}시</span>
                <span>{minute}분</span>
                <span>{second}초</span>
            </div>
        )
    }
}
