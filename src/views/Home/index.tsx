import {A11y, Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useState} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';
import {contests} from "./contests.ts";
import {Button, Card, Divider, Modal, Tooltip} from "antd";
import banner from "../../../public/banner.jpeg";
import {ROUTES} from "../../routes/routes.ts";
import CardContest from "./components/CardContest.tsx";

export const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
}

const Home = () => {
    const width = useWindowWidth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    let bannerHeight = "500px";
    if (width <= 1200) bannerHeight = "400px";
    if (width <= 768) bannerHeight = "400px";
    if (width <= 500) bannerHeight = "300px";

    return (
        <div
            style={{
                minHeight: "90dvh",
                display: "flex",
                backgroundColor: "#f5f5f5",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: '50px',
                position: "relative",
                borderRadius: "16px",
            }}
        >
            {/* Верхний баннер */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                style={{ width: "100%", height: bannerHeight, padding: '20px', borderRadius: '16px' }}
            >
                <SwiperSlide>
                    <img src={banner} alt="blur" className="banner-blur" />
                    <img
                        src={banner}
                        alt="main"
                        className="banner-main"
                        onClick={() => window.location.href = ROUTES.APPLY}
                    />
                </SwiperSlide>
            </Swiper>

            {/* Блок "Предстоящие события" */}
            <Divider
                plain
                orientation="left"
                style={{
                    fontSize: "clamp(18px, 4vw,26px)",
                    fontWeight: "bold",
                    color: "#333",
                    borderColor: "#333",
                    margin: "20px 0"
                }}
            >
                Предстоящие события
            </Divider>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                style={{ width: "100%", padding: "20px" }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
            >
                <SwiperSlide>
                    <Card
                        hoverable
                        cover={
                            <div style={{ overflow: "hidden", borderRadius: "12px" }}>
                                <img
                                    src={banner}
                                    alt="toomuch-banner"
                                    style={{
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.3s ease",
                                    }}
                                    className="card-img"
                                />
                            </div>
                        }
                        style={{
                            borderRadius: 12,
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        <Card.Meta
                            title={
                                <Tooltip title="TOOMUCH Dance Competition ОАЭ">
                                    <span className="title-contest">TOOMUCH Dance Competition</span>
                                </Tooltip>
                            }
                            description={
                                <>
                                    <Button
                                        type="primary"
                                        onClick={showModal}
                                        style={{ marginTop: "10px" }}
                                    >
                                        Оставить заявку
                                    </Button>

                                    <Modal
                                        title="Оставить заявку"
                                        open={isModalOpen}
                                        onOk={handleOk}
                                        onCancel={handleCancel}
                                        footer={[
                                            <Button key="cancel" onClick={handleCancel}>
                                                Закрыть
                                            </Button>,
                                        ]}
                                    >
                                        <div style={{ textAlign: "center", lineHeight: "1.8" }}>
                                            Для отправки заявки, пожалуйста, свяжитесь с нашим менеджером по{" "}
                                            <a
                                                href="https://wa.me/77478114235?text=Здравствуйте!%20Пишу%20с%20сайта%20choreographers.kz,%20хочу%20оставить%20заявку%20на%20конкурс%20в%20ОАЭ%20и%20узнать%20подробности"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                WhatsApp
                                            </a>.
                                        </div>
                                    </Modal>
                                </>
                            }
                        />
                    </Card>
                </SwiperSlide>
            </Swiper>

            {/* Блок "Прошедшие события" */}
            <Divider
                plain
                orientation="left"
                style={{
                    fontSize: "clamp(18px, 4vw,26px)",
                    fontWeight: "bold",
                    color: "#333",
                    borderColor: "#333",
                    margin: "20px 0"
                }}
            >
                Прошедшие события
            </Divider>

            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop
                speed={800}
                style={{ width: "100%", padding: "20px" }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {contests.map((contest, index) => (
                    <SwiperSlide key={index}>
                        <CardContest
                            name={contest.name}
                            city={contest.city}
                            link={contest.link}
                            img={contest.img}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Home;