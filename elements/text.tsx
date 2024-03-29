import Element from "./element";
import type { ElementProps } from "@/models";

const Text = ({
	as: tag = "p",
	className = "",
	children,
}: ElementProps & { as?: String }) => {
	return (
		<Element
			tag={tag}
			className={`text-black ${className}`}
			children={children}
		/>
	);
};

export default Text;
// Basic app text structure.
