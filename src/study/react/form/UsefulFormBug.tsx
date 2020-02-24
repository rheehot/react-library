import * as React from "react";

interface AppProp {

}

interface AppState {

}

export default class UsefulFormBug extends React.Component<AppProp, AppState> {

  render() {
    return (
        <form onSubmit={() => window.alert('submitted')}>
          <input type="text" style={{border: "1px solid black"}}/>
          <button style={{border: "1px solid black"}}>제출</button>
        </form>
    )
  }
}