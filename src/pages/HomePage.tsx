import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import Championships from "../components/sections/Championships";
import LiveLocation from "../components/sections/LiveLocation";
import CallToAction from "../components/sections/CallToAction";

export default function HomePage() {
  return (
    <div className="bg-black">
      <Header />
      <main className="mt-22">
        <Hero />
        <LiveLocation />
        <Championships />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
