import Footer from "../components/Footer"
import HomeSlider from '../components/HomeSlider';
import HomeAdvancedSearch from '../components/HomeAdvancedSearch';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <>
    <HomeSlider />
    <HomeAdvancedSearch />
    <div className="content">
        <div className="container">
          <div className="row">
            <MainContent />
            <Sidebar />
          </div>
        </div>
      </div>
    <Footer />
  </>
  )
}

export default HomePage
