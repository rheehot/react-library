import * as React from "react";
import MyButton from "../../common/form/MyButton";

interface AppProp {

}

interface AppState {
  currentCount: number;
}

export default class Counter extends React.Component<AppProp, AppState> {

  constructor(props: AppProp) {
    super(props);

    this.state = {
      currentCount: 0
    }
  }

  increase = () => {

    this.setState(prevState => {
      return {currentCount: prevState.currentCount + 1};
    });

  };

  decrease = () => {
    this.setState(prevState => {
      return {currentCount: prevState.currentCount - 1};
    })
  };

  bugIncrease = () => {

    this.setState({
      currentCount: this.state.currentCount + 1
    })
  };

  bugDecrease = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
  };

  testClick = () => {

    for(let i = 0 ; i < 10 ; i++) {
      this.bugIncrease();
    }

    for(let i = 0 ; i < 10 ; i++) {
      this.bugIncrease();
    }

    for(let i = 0 ; i < 10 ; i++) {
      this.bugDecrease();
    }

    for(let i = 0 ; i < 10 ; i++) {
      this.bugIncrease();
    }
  };

  render() {
    return (
        <div className="component-wrap">
          <h1>카운터</h1>
          <h2>{this.state.currentCount}</h2>
          <MyButton onClickHandler={this.increase}>+</MyButton>
          <MyButton onClickHandler={this.decrease}>-</MyButton>
          <MyButton onClickHandler={this.bugIncrease}>버그+</MyButton>
          <MyButton onClickHandler={this.bugDecrease}>버그-</MyButton>
          <MyButton onClickHandler={this.testClick}>버그+20</MyButton>
        </div>
    )
  }
}