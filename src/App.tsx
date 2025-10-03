import './App.css'
import Header from "./components/Header/Header.tsx";
import Hero3D from "./components/Hero3D/Hero3D.tsx";
import TrustMarquee from "./components/TrustMarquee/TrustMarquee.tsx";
import StoryTeaser from "./components/StoryTeaser/StoryTeaser.tsx";
import ProductMockScroll from "./components/ProductMockScroll/ProductMockScroll.tsx";

function App() {

    return (
        <>
            <Header/>
            <Hero3D/>
            <TrustMarquee />
            <StoryTeaser />
            <ProductMockScroll />
            <div id="product" style={{ height: '100vh', padding: '24px' }}>Product section</div>
            <div id="features" style={{ height: '100vh', padding: '24px' }}>Features section</div>
            <div id="metrics" style={{ height: '100vh', padding: '24px' }}>Metrics section</div>
            <div id="token" style={{ height: '100vh', padding: '24px' }}>Token section</div>
            <div id="security" style={{ height: '100vh', padding: '24px' }}>Security section</div>
            <div id="networks" style={{ height: '100vh', padding: '24px' }}>Networks section</div>
            <div id="testimonials" style={{ height: '100vh', padding: '24px' }}>Testimonials section</div>
            <div id="faq" style={{ height: '100vh', padding: '24px' }}>FAQ section</div>
            <div id="contact" style={{ height: '100vh', padding: '24px' }}>Contact section</div>
        </>
    )
}

export default App
