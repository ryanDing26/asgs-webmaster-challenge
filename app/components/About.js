import Description from "./Description";
import Details from "./Details";
import FadeInSection from "./FadeIn";
import Parks from "./Parks";

// Component for everything between the hero and footer section (About)
export default function About() {
    return (
        // About consists of 3 different components, which we want to individually fade in
        <div className="p-8 lg:p-16" id="about">
            <FadeInSection className="lg:pb-16 text-center"><Description></Description></FadeInSection>
            <FadeInSection className="justify-center items-center lg:flex gap-8 lg:h-[60vh]"><Parks></Parks></FadeInSection>
            <FadeInSection><Details></Details></FadeInSection>
        </div>
    );
}