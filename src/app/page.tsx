import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
	return (
		<div>
			<Header />
			<Hero />
			<Features />
			<About />
			<Footer />
		</div>
	);
}
