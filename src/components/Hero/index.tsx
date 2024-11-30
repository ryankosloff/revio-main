"use client";

import { motion } from "framer-motion";
import { RainbowButton } from "../ui/rainbow-button";
import { AvatarCirclesDemo } from "./components/Avatars";
import { ChevronDown, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="h-[58rem] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.4] bg-grid-small-black/[0.4] relative flex items-center justify-start flex-col">
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto pt-20 md:pt-40"
			>
				Use our Unban Strategy to regain access to your accounts
			</motion.h1>
			<motion.h1
				initial={{
					opacity: 0,
					y: 20,
				}}
				animate={{
					opacity: 1,
					y: [20, -5, 0],
				}}
				transition={{
					duration: 0.5,
					ease: [0.4, 0.0, 0.2, 1],
				}}
				className="flex flex-col items-center justify-center text-center text-neutral-700 dark:text-muted-foreground max-w-4xl mx-auto gap-10"
			>
				<span>
					We specialize in legally unbanning Instagram accounts, helping you reclaim your
					online presence.
				</span>
				{/* First Button */}
				<Link href="https://calendly.com/d/cqmk-fm4-jch" target="_blank">
					<RainbowButton className="rounded-3xl">
						Start Your Account Recovery Now
					</RainbowButton>
				</Link>
				{/* Second Button */}
				<Link href={"/about"}>
					<motion.div
						whileHover={{
							scale: 1.05,
						}}
						whileTap={{ scale: 0.95 }}
					>
						<RainbowButton className="rounded-3xl">
							Learn about our process
						</RainbowButton>
					</motion.div>
				</Link>
				<div className="bg-background border p-6 pb-2 rounded-3xl flex flex-row items-center justify-center gap-2">
					<div className="flex flex-col gap-1 items-center justify-center">
						<AvatarCirclesDemo />
						<div className="flex flex-row gap-1">
							<Star className="fill-yellow-300 stroke-white" />
							<Star className="fill-yellow-300 stroke-white" />
							<Star className="fill-yellow-300 stroke-white" />
							<Star className="fill-yellow-300 stroke-white" />
							<Star className="fill-yellow-300 stroke-white" />
						</div>
					</div>
					<Separator orientation="vertical" />
					<div className="flex flex-col justify-start items-start gap-2">
						<span className="text-sm text-muted-foreground font-semibold">
							Trusted by 99+ users
						</span>
						<span className="text-sm text-muted-foreground font-semibold">
							100% Success Rate
						</span>
					</div>
				</div>
				<Link
					href="#services"
					onClick={(e) => {
						e.preventDefault();
						document.getElementById("services")?.scrollIntoView({
							behavior: "smooth",
							block: "start",
						});
					}}
				>
					<div className="flex flex-row items-center justify-center pt-20">
						<div className="p-3 rounded-full bg-muted flex flex-row items-center justify-center animate-bounce cursor-pointer hover:bg-background transition-all border">
							<ChevronDown />
						</div>
					</div>
				</Link>
			</motion.h1>
		</div>
	);
}
