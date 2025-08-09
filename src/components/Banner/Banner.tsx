import './Banner.css';

export const Banner = () => {
    return (
        <section className="banner-section my-4">
            <div className="container">
                <div className="banner-wrapper">
                    <img
                        src="/images/banner.png"
                        alt="banner"
                        className="img-fluid"
                    />
                </div>
            </div>
        </section>
    );
};