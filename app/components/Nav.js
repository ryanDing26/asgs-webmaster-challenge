import { navItems } from "../utils/content";

// Component for the navigation bar
export default function Nav() {
    return (
        <nav className="md:flex md:justify-between text-center text-2xl font-roboto font-semibold fade-in">
            <div className="hidden md:block m-8">
                <a href="#">Lorem Ipsum</a>
            </div>
            <div className="flex justify-around p-8 md:p-0">
                {navItems.map((item, index) => (<a key={index} href={`#${item.toLowerCase()}`} className="md:m-8 hover:cursor-pointer fancy-underline-black">{item}</a>))}
            </div>
        </nav>
); 
}