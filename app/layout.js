import "./globals.css";

export const metadata = {
  title: "ASGS Webmaster Challenge",
  description: "Challenge application for the ASGS Webmaster position",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}