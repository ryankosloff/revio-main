import { BentoFeatures } from "./Bento";

export default function Features() {
	return (
		<div
			className="border-t w-full flex flex-col items-center justify-center lg:py-24 gap-10"
			id="services"
		>
			<span className="text-6xl font-bold">Our services</span>
			<div className="p-4 lg:p-0">
				<BentoFeatures />
			</div>
		</div>
	);
}
