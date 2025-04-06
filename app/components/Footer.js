import { footerItems } from "../utils/content";

// Component for the footer section
export default function Footer() {
    return (
        // This is also where the Contact and Work sections link to
        <footer className="lg:flex lg:justify-between p-8 lg:p-0 text-center lg:text-2xl font-roboto font-semibold fade-in" id="contact"> 
            <div className="lg:p-8 mb-8 lg:mb-0">
                Made with ♡ by <a href="https://asgraphicstudio.ucsd.edu/" className="fancy-underline-white" target="_blank">A.S. Graphic Studio</a>
            </div>
            <div className="flex justify-around md:p-0" id="work">
                {footerItems.map(({social, link}, index) => (
                    <a key={index} href={link} className="lg:m-8 fancy-underline-white" target="_blank">{social}</a>
                ))}
            </div>
        </footer>
);
}