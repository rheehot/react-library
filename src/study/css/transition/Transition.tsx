import * as React from "react";

interface AppProp {

}

interface AppState {

}

export default class Transition extends React.Component<AppProp, AppState> {

		toggleCollapse() {
				document.querySelector(".collapse-content").classList.toggle("open");
		}

		render() {
				return (
						<div className="component-wrap">
								<div>
										<h2>Collapsible Box</h2>
										<div className="collapse-btn" onClick={this.toggleCollapse}>펼치기/접기</div>
										<div className="collapse-content">
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
												내용<br/>
										</div>
								</div>
						</div>
				)
		}
}