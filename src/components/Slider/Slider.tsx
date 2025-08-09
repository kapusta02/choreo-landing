import { Carousel } from 'react-bootstrap';
import './Slider.css'

export const Slider = () => {
    const images = [
        { src: '../../public/images/slider/gJB_RwrJVvk.jpg', alt: 'First slide'},
        { src: '../../public/images/slider/zscZ49iWaHM.jpg', alt: 'Second slide'},
        { src: '../../public/images/slider/V7eSjygv67U.jpg', alt: 'Third slide'},
        { src: '../../public/images/slider/rxFrVqTDwAQ.jpg', alt: 'Fourth slide'},
        { src: '../../public/images/slider/pvuHdgHrVzk.jpg', alt: 'Fifth slide'},
        { src: '../../public/images/slider/mbWmY-TF1_o.jpg', alt: 'Sixth slide'},
        { src: '../../public/images/slider/DegbPw_CAvE.jpg', alt: 'Seventh slide'},
        { src: '../../public/images/slider/cjsg5gwI25E.jpg', alt: 'Eighth slide'},
        { src: '../../public/images/slider/897uiqewbDg.jpg', alt: 'Ninth slide'},
        { src: '../../public/images/slider/9Oj0L8h9PUQ.jpg', alt: 'Tenth slide'},
        { src: '../../public/images/slider/MOdTcy9VXL8.jpg', alt: 'Eleventh slide'},
        { src: '../../public/images/slider/ShYgUuuvm2U.jpg', alt: 'Twelfth slide'},
        { src: '../../public/images/slider/gldIM3o2g9w.jpg', alt: 'Thirteenth slide'}
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