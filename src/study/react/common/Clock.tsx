import * as React from "react";
import * as moment from "moment";

interface AppProp {

}

interface AppState {
    dateFormat: string
}

export default class Clock extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);

        this.state = {
            dateFormat: moment().format('MMMM Do YYYY, h:mm:ss a')
        };

        this.startClock = this.startClock.bind(this);
        this.startClock();
    }

    startClock() {
        setInterval(() => {
            this.setState({
                dateFormat: moment().format('MMMM Do YYYY, h:mm:ss a')
            })
        }, 1000);
    }

    render() {
        return (
            <div className="clock-wrap">
                <span>{this.state.dateFormat}</span>
            </div>
        )
    }
}
