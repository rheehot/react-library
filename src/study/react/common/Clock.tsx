import * as React from "react";

interface AppProp {

}

interface AppState {
	month: number,
	date: number,
	hour: number,
	minute: number,
	second: number
}

export default class Clock extends React.Component<AppProp, AppState> {

	currentDate: Date = new Date();

    constructor(props: any) {
        super(props);

        this.state = {
			month: this.currentDate.getUTCMonth() + 1,
			date: this.currentDate.getUTCDate(),
			hour: this.currentDate.getUTCHours(),
			minute: this.currentDate.getUTCMinutes(),
			second: this.currentDate.getUTCSeconds()
        };

        this.startClock = this.startClock.bind(this);
        this.startClock();
    }

    startClock() {
        setInterval(() => {
			this.currentDate = new Date();

			this.setState({
				month: this.currentDate.getUTCMonth() + 1,
				date: this.currentDate.getUTCDate(),
				hour: this.currentDate.getUTCHours(),
				minute: this.currentDate.getUTCMinutes(),
				second: this.currentDate.getUTCSeconds()
			});
        }, 1000);
    }

    render() {
        return (
            <div className="clock-wrap">
                <span>{this.state.month}월</span>
                <span>{this.state.date}일</span>
                <span>{this.state.hour}시</span>
                <span>{this.state.minute}분</span>
                <span>{this.state.second}초</span>
            </div>
        )
    }
}
