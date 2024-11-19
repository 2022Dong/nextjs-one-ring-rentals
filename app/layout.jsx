import "../assets/styles/globals.css";


// import "../assets/styles/bootstrap-datepicker.css";
// import "../assets/styles/bootstrap.css";
// import "../assets/styles/bootstrap.min.css";
// import "../assets/styles/font-awesome.css";
// import "../assets/styles/font.css";
// import "../assets/styles/owl.transitions.css";
// import "../assets/styles/style.css";
// import "../assets/styles/style.less";


import Header from "../components/Header";

export const metadata = {
    title: "One Ring Rentals",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property -- A modern web application built with Next.js and Bootstrap",
  };

const MainLayout = ({ children }) => {
    return ( 
        <html lang="en">
        <body className="container">
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