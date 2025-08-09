import './Banner.css';

export const Banner = () => {
    return (
        <section className="banner-section my-4">
            <div className="container">
                <div className="banner-wrapper">
                    <picture>
                        <source srcSet="/images/banner.webp" type="image/webp" />
                        <img
                            src="/images/banner.png"
                            alt="banner"
                            className="img-fluid"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
};