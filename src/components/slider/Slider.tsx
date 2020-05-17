import React from "react";
import SliderContainer, { InjectedProps } from "./MovieSlider";
import { Carousel } from "antd";

const Slider: React.FC<InjectedProps> = ({ children, classN }) => {
	return <Carousel className={classN}>{children}</Carousel>;
};

export const MovieSlider = SliderContainer(Slider);
export default Slider;
