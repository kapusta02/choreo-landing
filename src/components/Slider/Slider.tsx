import { Carousel } from 'react-bootstrap';
import './Slider.css'

export const Slider = () => {
    const images = [
        { src: '/images/slider/gJB_RwrJVvk.jpg', alt: 'First slide'},
        { src: '/images/slider/zscZ49iWaHM.jpg', alt: 'Second slide'},
        { src: '/images/slider/V7eSjygv67U.jpg', alt: 'Third slide'},
        { src: '/images/slider/rxFrVqTDwAQ.jpg', alt: 'Fourth slide'},
        { src: '/images/slider/pvuHdgHrVzk.jpg', alt: 'Fifth slide'},
        { src: '/images/slider/mbWmY-TF1_o.jpg', alt: 'Sixth slide'},
        { src: '/images/slider/DegbPw_CAvE.jpg', alt: 'Seventh slide'},
        { src: '/images/slider/cjsg5gwI25E.jpg', alt: 'Eighth slide'},
        { src: '/images/slider/897uiqewbDg.jpg', alt: 'Ninth slide'},
        { src: '/images/slider/9Oj0L8h9PUQ.jpg', alt: 'Tenth slide'},
        { src: '/images/slider/MOdTcy9VXL8.jpg', alt: 'Eleventh slide'},
        { src: '/images/slider/ShYgUuuvm2U.jpg', alt: 'Twelfth slide'},
        { src: '/images/slider/gldIM3o2g9w.jpg', alt: 'Thirteenth slide'}
    ];

    return (
        <>
            <p className="text-center slider-block-header">Прошлые конкурсы</p>
            <Carousel>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block mx-auto slider-block"
                            src={image.src}
                            alt={image.alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};