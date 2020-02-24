import * as React from "react";
import "./RenderProp.scss"
import Mouse from "./Mouse";
import {AppleCursor} from "./AppleCursor";
import {ReactCursor} from "./ReactCursor";

interface AppProp {

}

interface AppState {

}

export default class RenderProp extends React.Component<AppProp, AppState> {

  render() {
    return (
        <div className="RenderProp-container">
          <Mouse render={AppleCursor()} />
          <Mouse render={ReactCursor()} />
        </div>
    )
  }
}