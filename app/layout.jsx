export const metadata = {
    title: "One Ring Rentals",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property",
  };

const MainLayout = ({ children }) => {
    return ( 
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html> );
}
 
export default MainLayout;