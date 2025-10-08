import './App.css'
import Header from "./components/Header/Header.tsx";
import Hero3D from "./components/Hero3D/Hero3D.tsx";
import TrustMarquee from "./components/TrustMarquee/TrustMarquee.tsx";
import StoryTeaser from "./components/StoryTeaser/StoryTeaser.tsx";
import ProductMockScroll from "./components/ProductMockScroll/ProductMockScroll.tsx";
import FeaturesGrid from "./components/FeaturesGrid/FeaturesGrid.tsx";
import MetricsPanel from "./components/MetricsPanel/MetricsPanel.tsx";
import Tokenomics from "./components/Tokenomics/Tokenomics.tsx";
import SecurityAudits from "./components/SecurityAudits/SecurityAudits.tsx";
import NetworksMap from "./components/NetworksMap/NetworksMap.tsx";
import Testimonials from "./components/Testimonials/Testimonials.tsx";
import FAQ from "./components/FAQ/FAQ.tsx";
import FinalCTA from "./components/FinalCTA/FinalCTA.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    return (
        <>
            <Header/>
            <Hero3D/>
            <TrustMarquee/>
            <StoryTeaser/>
            <ProductMockScroll/>
            <FeaturesGrid/>
            <MetricsPanel/>
            <Tokenomics/>
            <SecurityAudits/>
            <NetworksMap/>
            <Testimonials/>
            <FAQ/>
            <FinalCTA/>
            <Footer/>
        </>
    )
}

export default App
