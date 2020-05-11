declare module "*scss" {
	const styles: { [className: string]: import("react").CSSProperties };
	export default styles;
}
