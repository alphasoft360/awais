import ContactUs from './components/ContactUs/page.jsx';
import MyHero from './components/myHero/index.jsx';
// import PortfolioGrid from './components/PortfolioGrid/page.jsx';
// import PortfolioHero from './components/PortfolioHero/page.jsx';
import WorkPortfoilio from './components/WorkPortfoilio/page.jsx';
import Biography from './components/BioGraphy/page.jsx';
import './index.css'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <MyHero />
      <Biography />
      {/* <PortfolioGrid /> */}
      <WorkPortfoilio />
      <ContactUs />
    </div>
  )
}

export default App