import './story.css'

export default function StoryTeaser() {
    return (
        <section className="story" aria-labelledby="story-title">
            <div className="story__card">
                <video
                    className="story__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/video/teaser.mp4"
                    poster="/ui/teaser.jpg"
                />
                <div className="story__overlay" />
                <div className="story__content">
                    <h2 id="story-title">Price you expect, speed you need</h2>
                    <p>Route orders through unified liquidity and avoid MEV</p>
                    <div className="story__chips">
                        <span>Best route</span>
                        <span>MEV shield</span>
                        <span>Non-custodial</span>
                    </div>
                    <a className="btn btn--primary story__cta" href="#demo">Open demo</a>
                </div>
            </div>
        </section>
    )
}
