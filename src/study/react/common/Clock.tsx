import * as React from "react";

interface AppProp {

}

interface AppState {
	date: Date
}

export default class Clock extends React.Component<AppProp, AppState> {

		constructor(props: any) {
				super(props);
				this.state = {
						date: new Date(),
				};

				this.startClock = this.startClock.bind(this);
				this.startClock();
		}

		startClock() {
				setInterval(() => {
						this.setState({
								date: new Date()
						});
				}, 1000);
		}

		render() {
				return (
						<div className="clock-wrap">
								<span>{this.state.date.getUTCMonth() + 1}월</span>
								<span>{this.state.date.getUTCDate()}일</span>
								<span>{this.state.date.getUTCHours()}시</span>
								<span>{this.state.date.getUTCMinutes()}분</span>
								<span>{this.state.date.getUTCSeconds()}초</span>
						</div>
				)
		}
}