import * as React from "react";
import "./Layout.scss";
import {Link} from "react-router-dom";
import HeaderInfo from "./header/HeaderInfo";

interface AppProp {
    headerUls: Array<Array<HeaderInfo>>
}

export default class MyHeader extends React.Component<AppProp> {

    headerUls() {

        return (
            this.props.headerUls.map((headerUl, ulIndex) => {
                return (
                    <ul key={`ul-${ulIndex}`} className="dropdown-ul">
                        {headerUl.map((headerItem, liIndex) => {
                            return (
                                <li key={`li-${liIndex}`} className="dropdown-li"><Link to={headerItem.to}>{headerItem.text}</Link></li>
                            )
                        })}
                    </ul>
                )
            })
        );
    };

    render() {
        return (
            <header>
                <nav className="dropdown-nav">
                    {this.headerUls()}
                </nav>
            </header>
        );
    }
}
