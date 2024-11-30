import Link from "next/link";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import { Cover } from "../ui/cover";
import ShimmerButton from "../ui/shimmer-button";

export default function About() {
	return (
		<div className="relative flex w-full overflow-hidden border-y bg-background md:shadow-xl">
			<BackgroundBeamsWithCollision className="flex flex-col gap-10 items-center justify-center">
				<div className="flex flex-col gap-1">
					<span className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-primary via-green-400 to-green-700">
						Regain access to your accounts <Cover>SUPER FAST</Cover>
					</span>
					<span className="text-muted-foreground text-center max-w-7xl mx-auto relative z-20">
						Most accounts are recovered within 1-3 days. Don't let a ban ruin your online presence.
					</span>
				</div>

				<Link href="/questionnaire">Account Recovery</Link>
					<ShimmerButton className="w-70 h-14 text-lg">
						Contact Our Recovery Specialists{" "}
					</ShimmerButton>
				</Link>
			</BackgroundBeamsWithCollision>
		</div>
	);
}
