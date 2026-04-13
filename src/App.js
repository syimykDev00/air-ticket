import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import '../src/assets/styles/style.css';
import '../src/assets/styles/header.css';
import '../src/assets/styles/bagagesAllowance.css';
import '../src/assets/styles/dangerousGoods.css';
import '../src/assets/styles/voluntaryReport.css';
import '../src/assets/styles/infoChildren.css';
import '../src/assets/styles/InfoPlanning.css';
import '../src/assets/styles/infoSecurity.css';
import '../src/assets/styles/infoBookingPolicy.css';
import '../src/assets/styles/infoTransportationOfPets.css';
import '../src/assets/styles/about.css';
import '../src/assets/styles/contact.css';
import '../src/assets/styles/footer.css';
import Home from './components/home/Home';
import {Routes, Route} from 'react-router-dom';
import BookingAndManagement from './pages/BookingAndManagement/BookingAndManagement';
import UsefulInformation from './pages/UsefulInformation/UsefulInformation';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import InfoPages from './pages/InfoPages/InfoPages';
import InfoLayout from './pages/InfoPages/InfoLayout';
import BagagesAllowance from './pages/InfoPages/BagagesAllowance';
import DangerousGoods from './pages/InfoPages/DangerousGoods';
import VoluntaryReport from './pages/InfoPages/voluntaryReport';
import InfoChildren from './pages/InfoPages/InfoChildren';
import InfoPlanning from './pages/InfoPages/InfoPlanning';
import InfoSecurity from './pages/InfoPages/InfoSecurity';
import InfoBookingPolicy from './pages/InfoPages/InfoBookingPolicy';
import InfoTransportationOfPets from './pages/InfoPages/InfoTransportationOfPets';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/info/:slug'} element={<InfoPages/>}/>
      <Route path={'/booking-and-management'} element={<BookingAndManagement/>}/>
      <Route path={'/useful-information'} element={<UsefulInformation/>}/>
      <Route path={'/about'} element={<About/>}/>
      <Route path={'/contact'} element={<Contact/>}/>
       <Route path='/info' element={<InfoLayout/>}>
       <Route path="/info/normy-bagazha" element={<BagagesAllowance/>} />
       <Route path="/info/opasnye-gruzy" element={<DangerousGoods/>} />
       <Route path="/info/dobrovolnoe-donesenie" element={<VoluntaryReport/>} />
       <Route path="/info/puteshestvija-s-detmi" element={<InfoChildren/>} />
       <Route path="/info/strategii-planirovanija-puteshestvija" element={<InfoPlanning/>} />
       <Route path="/info/security" element={<InfoSecurity/>} />
       <Route path="/info/politika-bronirovaniya-aviabiletov" element={<InfoBookingPolicy/>} />
       <Route path="/info/perevozka-pitomcev" element={<InfoTransportationOfPets/>} />
       </Route>
    </Routes>
    <ScrollToTop/>
    <Footer/>
    </>
  )
}

export default App;