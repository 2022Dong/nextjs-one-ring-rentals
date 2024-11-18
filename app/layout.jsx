import "../assets/styles/globals.css";

export const metadata = {
    title: "One Ring Rentals",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property -- A modern web application built with Next.js and Bootstrap",
  };

const MainLayout = ({ children }) => {
    return ( 
        <html lang="en">
        <body className="container">
          <nav className="nav">{/* Navigation components */}Navigation</nav>
          {children}
        </body>
      </html>
     );
}
 
export default MainLayout;