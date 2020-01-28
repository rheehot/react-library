import * as React from "react";

interface AppProp {

}

interface AppState {

}

export default class PageNotFound extends React.Component<AppProp, AppState> {

		render() {
				return (
						<div className="component-wrap">
								요청하신 페이지를 찾을 수 없습니다.
						</div>
				)
		}
}