import * as React from "react";
import "./layout.scss";
import MyHeader from "./MyHeader";
import MySection from "./MySection";
import MyFooter from "./MyFooter";

// @ts-ignore
const Layout = () => {

		return (
				<>
						<MyHeader></MyHeader>
						<MySection></MySection>
						<MyFooter></MyFooter>
				</>
		);
};

export default Layout;