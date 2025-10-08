import './final.css';

export function FinalCTA() {
    return (
        <section id="contact" className="final">
            <div className="final__card">
                <div className="final__content">
                    <span className="final__eyebrow">Ready to build?</span>
                    <h2 className="final__title">Build the future of trading today</h2>
                    <p className="final__sub">
                        Start a guided demo and see how unified routing upgrades your execution quality.
                    </p>
                    <div className="final__actions">
                        <a className="btn btn--primary" href="#demo">Open demo</a>
                        <a className="btn btn--ghost" href="#docs">View docs</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FinalCTA;
