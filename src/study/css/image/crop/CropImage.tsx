import * as React from "react";

interface AppProp {

}

interface AppState {

}

export default class CropImage extends React.Component<AppProp, AppState> {

    render() {
        return (
            <div className="component-wrap">
                <img id="whh" src="http://photo.hankooki.com/arch/photo/P/2019/03/23/20190323182143_P_00_C_1_604.jpg"/>
                <img id="wwh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdSuk7_Ubeqd22aLf8c1bmfcKh3e3oKUEFy1VjFGw-R6igpKTNA&s"/>
                <img id="www" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBejbp5gExauLZx0oOBBHgRZhdCSETIyuzM6ZbKEQ8gP1pxtjllg&s"/>
            </div>
        )
    }
}
