import './Header.css';
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/routes.ts";
import Logo from '../../../public/logo.png';
import {Button, Modal} from "antd";
import {useState} from "react";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <header className="header">
            <div className="header-container" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 20px"
            }}>
                {/* Логотип */}
                <Link to={ROUTES.HOME} style={{display: 'flex', alignItems: 'center'}}>
                    <img
                        src={Logo}
                        alt="choreographers.kz"
                        style={{maxHeight: 70, marginRight: 8}}
                        className="logo"
                    />
                </Link>

                {/* Кнопка открытия модалки */}
                <Button
                    type="primary"
                    style={{fontWeight: 500}}
                    onClick={showModal}
                >
                    Оставить заявку
                </Button>

                {/* Модалка */}
                <Modal
                    title="Оставить заявку"
                    open={isModalOpen}
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
                            href="https://wa.me/77478114235?text=Здравствуйте!%20Пишу%20с%20сайта%20choreographers.kz,%20хочу%20оставить%20заявку%20и%20узнать%20подробности"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp
                        </a>.
                    </div>
                </Modal>
            </div>
        </header>
    );
};

export default Header;