import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = () => {
	const SpinIcon = <LoadingOutlined style={{ fontSize: "40px" }} />;
	return (
		<div>
			<Spin indicator={SpinIcon} />
		</div>
	);
};

export default Spinner;
