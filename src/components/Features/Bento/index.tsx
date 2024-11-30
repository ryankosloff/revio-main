import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Handshake, UserX2 } from "lucide-react";

const features = [
	{
		Icon: InstagramLogoIcon,
		name: "Social Media Recoveries",
		description:
			"Our expert team specializes in recovering banned accounts through contacts and representatives to expedite cases, ensuring a safe and reliable restoration process.",
		href: "https://calendly.com/d/cqmk-fm4-jch",
		cta: "Discover How We Can Help",
		className: "col-span-2 lg:col-span-1",
		background: <div />,
	},
	{
		Icon: Handshake,
		name: "Appeal Assistance",
		description:
			"Expert assistance with account appeals and recovery processes, leveraging our proven strategies and deep understanding of platform policies to help restore your access.",
		href: "https://calendly.com/d/cqmk-fm4-jch",
		cta: "Discover How We Can Help",
		className: "col-span-2 lg:col-span-1",
		background: <div />,
	},
];

export function BentoFeatures() {
	return (
		<BentoGrid>
			{features.map((feature) => (
				<BentoCard key={feature.name} {...feature} />
			))}
		</BentoGrid>
	);
}
