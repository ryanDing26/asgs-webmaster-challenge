import FadeInSection from "./FadeIn";

// Component for the hero section
export default function Hero() {
    return (
        // The reason the outer div isn't a FadeInSection component is we only want the text to fade in
        <div className="flex justify-center items-center max-w-[100%] min-h-screen  bg-[url(/hero.png)] bg-cover bg-center">
            <FadeInSection><h1 className="text-white text-5xl lg:text-9xl font-serif">Lorem Ipsum</h1></FadeInSection>
        </div>
    );
}