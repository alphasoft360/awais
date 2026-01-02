import ContactUs from './components/ContactUs/page';
// import PortfolioGrid from './components/PortfolioGrid/page';
import PortfolioHero from './components/PortfolioHero/page.jsx';
import WorkPortfoilio from './components/WorkPortfoilio/page';
import Biography from './components/BioGraphy/page';
import './index.css'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <Biography />
      {/* <PortfolioGrid /> */}
      <WorkPortfoilio />
      <ContactUs />
    </div>
  )
}

export default App