import * as React from "react";
import VirtualBox from "../../study/react/common/VirtualBox";

export default class ReactMain extends React.Component {

    render() {
        return (
          <div>
            React Main화면입니다.
              <VirtualBox width="100px" height="200px"/>
          </div>
        );
    }
};
