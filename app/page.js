import { Nav, Hero, Footer, About } from "./components"

export default function Home() {
  return (
    // Two outer divs needed to create the white page border
    <div className="max-h-screen max-w-screen" id="home">
      {/* Div used to set white bg, black text, and aligned padding */}
      <div className="bg-white text-black lg:p-8">
        <Nav></Nav>
        <main className="lg:p-8">
          <Hero></Hero>
          <About></About>
        </main>
      </div>
      {/* Same as prev. div but with inverted colors */}
      <div className="bg-black text-white lg:p-8">
        <Footer></Footer>
      </div>
    </div>
  );
}
