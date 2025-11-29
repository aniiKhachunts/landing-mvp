import './App.css'
import Header from "./components/Header/Header"
import TrustMarquee from "./components/TrustMarquee/TrustMarquee"
import StoryTeaser from "./components/StoryTeaser/StoryTeaser"
import ProductMockScroll from "./components/ProductMockScroll/ProductMockScroll"
import FeaturesGrid from "./components/FeaturesGrid/FeaturesGrid"
import MetricsPanel from "./components/MetricsPanel/MetricsPanel"
import Tokenomics from "./components/Tokenomics/Tokenomics"
import SecurityAudits from "./components/SecurityAudits/SecurityAudits"
import NetworksMap from "./components/NetworksMap/NetworksMap"
import Testimonials from "./components/Testimonials/Testimonials"
import FAQ from "./components/FAQ/FAQ"
import FinalCTA from "./components/FinalCTA/FinalCTA"
import Footer from "./components/Footer/Footer"
import HeroPhone from "./components/HeroPhone/HeroPhone"

function App() {
    return (
        <>
            <Header />
            <div className="site">
                <HeroPhone />
                <TrustMarquee />
                <StoryTeaser />
                <ProductMockScroll />
                <FeaturesGrid />
                <MetricsPanel />
                <Tokenomics />
                <SecurityAudits />
                <NetworksMap />
                <Testimonials />
                <FAQ />
                <FinalCTA />
                <Footer />
            </div>
        </>
    )
}

export default App
