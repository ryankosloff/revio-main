"use client";

import React from "react";
import Link from "next/link"; // Ensure Link is imported
import { Timeline } from "@/components/ui/timeline";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import ShimmerButton from "../ui/shimmer-button";

export default function TimelineAbout() {
	const data = [
		{
			title: (
				<span className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-primary via-green-400 to-green-700">
					Info Collection
				</span>
			),
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium leading-relaxed mb-8">
					<br /> The first step is understanding your situation. We will get on a call with you or text you to go over the issue and understand your situation. We gather details such as your username, the associated email or phone number, any error messages you’ve received, and the nature of the ban (Spam, TOS, etc.). This information helps us assess the situation and plan the next steps.
					</p>
				</div>
			),
		},
		{
			title: (
				<span className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-primary via-green-400 to-green-700">
					Direct Action
				</span>
			),
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium leading-relaxed mb-8">
						Once we have the necessary information, our team reaches out
						directly to representatives, leveraging insider connections and
						proven techniques to escalate your case. No matter the reason for
						the ban or restriction, we guarantee your account will be
						successfully recovered.
					</p>
				</div>
			),
		},
		{
			title: (
				<span className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-primary via-green-400 to-green-700">
					Recovery
				</span>
			),
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium leading-relaxed mb-4">
						<b>Account Recovery Successful</b>
						<br />
						If you encounter any issues or need further assistance, please don't
						hesitate to reach out to our support team.
					</p>
				</div>
			),
		},
	];

	return (
		<div className="relative flex w-full overflow-hidden border-y bg-background md:shadow-xl">
			{/* Add the falling purple background */}
			<div className="absolute inset-0">
				<BackgroundBeamsWithCollision />
			</div>
			{/* Content Layer */}
			<div className="relative z-10 flex flex-col items-center gap-10">
				{/* Timeline Content */}
				<div className="w-full">
					<Timeline data={data} />
				</div>
				{/* Button at the Bottom */}
				<div className="flex justify-center mt-10 mb-10">
					<Link href="https://calendly.com/d/cqmk-fm4-jch" target="_blank">
						<ShimmerButton className="w-70 h-14 text-lg border-2 border-green-500 hover:shadow-lg transition-shadow">
							Book a free consultation now
						</ShimmerButton>
					</Link>
				</div>
			</div>
		</div>
	);
}
