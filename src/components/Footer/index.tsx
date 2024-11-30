import { chakra } from "@/app/layout";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="mx-auto flex w-full border-t">
			<div className="lg:w-full px-6 lg:px-72 pt-24 pb-4 flex flex-col lg:flex-row lg:justify-between gap-4">
				<div className="flex flex-col gap-4 items-start">
					<div className={`${chakra} text-2xl font-bold select-none`}>
						revio
					</div>
				</div>

				<div className="flex flex-col lg:justify-between gap-4">
					<div className="flex flex-col lg:flex-row lg:justify-start gap-20">
						<div className="flex flex-col gap-4 pt-5">
							<span className="text-base font-semibold text-pretty">
								Site Map
							</span>
							<div className="flex flex-col gap-2">
								<Link href={"/whitepaper"}>
									<span className="text-muted-foreground hover:text-primary transition-all duration-300">
										Whitepaper
									</span>
								</Link>
								<Link href={"/about"}>
									<span className="text-muted-foreground hover:text-primary transition-all duration-300">
										About
									</span>
								</Link>
							</div>
						</div>
					</div>

					<div className="block pt-8">
						<span className="text-muted-foreground">
							Copyright © 2024 Revio. All Rights Reserved.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
