import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './components/resuable/navbar';
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
import FooterSectioner from './components/resuable/footer';

function App() {
  return (
    <div>
      <HashRouter>
        <NavBar />
        <HeaderPage />
        <AboutUs />
        <Achievments />
        <Mission />
        <VissionSection />
        <Services />
        <ARSection />
        <IQMathSection />
        <ContactSection />
        <FooterSectioner />
      
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/programs' element={<ProgamsPage />} />
        <Route path='/heros' element={<HerosPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/donate' element={<Donate />} />

        <Route path='/magis2023' element={<MagisPage2023 />} ></Route>
        <Route path='/animator' element={<AnimatorPage />} ></Route>
        <Route path='/commissionMeet' element={<YouthMinistry />} ></Route>
        <Route path='/magis2022' element={<YouthCommision />} ></Route>
        <Route path='/youthDay' element={<WorldYouth />} ></Route>

        <Route path='/sainuma' element={<SainumaPage />} ></Route>
        <Route path='/avinash' element={<AvinashPage />} ></Route>
        <Route path='/kumari' element={<KumariPage />} ></Route> */}

      {/* </Routes> */}
    </HashRouter>
    </div>
  );
}

export default App;
