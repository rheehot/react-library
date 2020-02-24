import * as React from "react";
import "./Layout.scss";
import "./reset.css"
import {Link} from "react-router-dom";
import HeaderInfo from "./header/HeaderInfo";

interface AppProp {
    headerUls: Array<Array<HeaderInfo>>,
    headerChange: Function
}

export default class MyHeader extends React.Component<AppProp> {

    headerUls() {

        return (
            this.props.headerUls.map((headerUl, ulIndex) => {
                return (
                    <ul key={`ul-${ulIndex}`} className="dropdown-ul">
                        {headerUl.map((headerInfo, liIndex) => {

                            if(ulIndex === 0) {
                              return (
                                  <li key={`li-${liIndex}`} onClickCapture={() => this.props.headerChange(headerInfo)} className="dropdown-li"><Link to={headerInfo.to}>{headerInfo.text}</Link></li>
                              )
                            }

                            return (
                                <li key={`li-${liIndex}`} className="dropdown-li"><Link to={headerInfo.to}>{headerInfo.text}</Link></li>
                            )
                        })}
                    </ul>
                )
            })
        );
    };

    render() {

      console.log(this.props.headerUls);
      console.log("header render");

        return (
            <header>
                <nav className="dropdown-nav">
                    {this.headerUls()}
                </nav>
            </header>
        );
    }
}
