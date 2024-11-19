import "./globals.css";
import Header from "../components/Header";

export const metadata = {
    title: "One Ring Rentals",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property -- A modern web application built with Next.js and Bootstrap",
  };

const MainLayout = ({ children }) => {
    return ( 
        <html lang="en">
        <body>
            <main>
            <div id="wrapper">
                <Header />
                {children}
                </div>
            </main>
        </body>
      </html>
     );
}
 
export default MainLayout;