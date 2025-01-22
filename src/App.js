import './App.css';
import { BrowserRouter } from "react-router-dom";
import { NavBar } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPage from './pages/header';
import AboutUs from './pages/about_us';
import Achievments from './pages/achievments';
import Mission from './pages/mission';
import VissionSection from './pages/vission';
import Services from './pages/services';
import ARSection from './pages/ar';
import IQMathSection from './pages/math';
import ContactSection from './pages/contact';
import FooterSectioner from './components/footer';
import SchoolSection from './pages/school';

function App() {
  return (
    <div>
        <NavBar />
        <HeaderPage />
        <AboutUs />
        <Achievments />
        <Mission />
        <VissionSection />
        <Services />
        <ARSection />
        <IQMathSection />
        <SchoolSection />
        <ContactSection />
        <FooterSectioner />
    </div>
  );
}

export default App;
