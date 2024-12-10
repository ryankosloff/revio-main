import { chakra } from "@/app/layout";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

export default function Header() {
	return (
		<div className="sticky top-0 z-50 flex justify-between lg:justify-center items-center px-4 py-2 border-b lg:gap-[400px] bg-background">
			<Link href={"/"}>
				<div
					className={`${chakra} text-3xl font-bold select-none cursor-pointer`}
				>
					revio
				</div>
			</Link>
			<div className="flex-row gap-10 items-center hidden lg:flex">
				<Link href={"/whitepaper"}>
					<span className="font-semibold hover:text-muted-foreground transition-all duration-300 cursor-pointer">
						Whitepaper
					</span>
				</Link>
				<Link href={"/about"}>
					<span className="font-semibold hover:text-muted-foreground transition-all duration-300 cursor-pointer">
						About
					</span>
				</Link>
				<Link href={"/pricing"}>
					<span className="font-semibold hover:text-muted-foreground transition-all duration-300 cursor-pointer">
						Pricing
					</span>
				</Link>
				<Link href={"https://calendly.com/d/cqmk-fm4-jch"} target="_blank">
					<Button className="w-24 h-8 rounded-3xl hover:bg-primary hover:brightness-125 transition-all duration-300">Contact Us</Button>
				</Link>
			</div>
			<div className="lg:hidden">
				<Sheet>
					<SheetTrigger asChild>
						<Button className="lg:hidden" variant={"outline"} size={"icon"}>
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>
								<Link href={"/"}>
									<div
										className={`${chakra} text-2xl font-bold select-none cursor-pointer`}
									>
										revio
									</div>
								</Link>
							</SheetTitle>
							<SheetDescription asChild>
								<div className="flex justify-center flex-col gap-3">
									<Link href={"/whitepaper"}>
										<Button
											variant={"outline"}
											className="w-full rounded-3xl flex items-center justify-start"
										>
											<span className="text-base font-semibold text-white transition-all duration-300 cursor-pointer">
												Whitepaper
											</span>
										</Button>
									</Link>
									<Link href={"/about"}>
										<Button
											variant={"outline"}
											className="w-full rounded-3xl flex items-center justify-start"
										>
											<span className="text-base font-semibold text-white transition-all duration-300 cursor-pointer">
												About
											</span>
										</Button>
									</Link>
									<Link href={"/pricing"}>
										<Button
											variant={"outline"}
											className="w-full rounded-3xl flex items-center justify-start"
										>
											<span className="text-base font-semibold text-white transition-all duration-300 cursor-pointer">
												Pricing
											</span>
										</Button>
									</Link>
									<Link href={"https://calendly.com/d/cqmk-fm4-jch"} target="_blank">
										<Button className="w-full rounded-3xl flex items-center justify-start">
											<span className="text-base font-semibold transition-all duration-300 cursor-pointer">
												Contact Us
											</span>
										</Button>
									</Link>
								</div>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
