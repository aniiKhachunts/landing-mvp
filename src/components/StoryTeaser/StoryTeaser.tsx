import './story.css';

export function StoryTeaser() {
    return (
        <section className="story" aria-label="Product teaser">
            <video
                className="story__bg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster=""
                aria-hidden="true"
            >
                <source src="/video/teaser.mp4" type="video/mp4" />
            </video>

            <div className="story__overlay" aria-hidden="true" />
            <div className="story__copy">
                <h2>Price you expect, speed you need</h2>
                <p>Route orders through unified liquidity and avoid MEV</p>
            </div>
        </section>
    );
}

export default StoryTeaser;
