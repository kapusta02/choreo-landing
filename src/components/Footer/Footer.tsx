import {Layout} from "antd";
import {InstagramOutlined, WhatsAppOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/routes.ts";
import Logo from "../../../public/logo-white.png";
import {useWindowWidth} from "../../views/Home";
import VkIcon from "../Icons/VkIcon.tsx";

export const {Footer} = Layout;

const AppFooter = () => {
    const width = useWindowWidth();

    return (
        <Footer
            style={{
                gap: "12px",
                background: "#001529",
                color: "#fff",
                padding: "16px 24px",
            }}
        >
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                justifyContent: width < 720 ? 'center' : "space-between",
                flexWrap: "wrap"
            }}>
                <div>
                    <Link to={ROUTES.HOME} style={{display: 'flex', alignItems: 'center'}}>
                        <img
                            src={Logo}
                            alt="choreographers.kz"
                            style={{maxHeight: width < 720 ? 40 : 60}}
                        />
                    </Link>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "16px",
                        color: "#fff",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <a
                        href="https://wa.me/77478114235 "
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "white"}}
                    >
                        <WhatsAppOutlined style={{fontSize: 24}}/>
                    </a>

                    <a
                        href="https://www.instagram.com/choreographers.kz"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "white"}}
                    >
                        <InstagramOutlined style={{fontSize: 24}}/>
                    </a>

                    <a
                        href="https://vk.com/choreographerskz"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "white"}}
                    >
                        <VkIcon style={{ fontSize: 24 }} />
                    </a>

                    <a
                        href="mailto:choreographerkz@mail.ru"
                        style={{color: "white", display: "flex", alignItems: "center", gap: "6px"}}
                    >
                        <span>choreographerkz@mail.ru</span>
                    </a>

                    <a href="tel:+77478114235" style={{color: "white"}}>+7 (747) 811-42-35 </a>
                </div>
            </div>
        </Footer>
    );
};

export default AppFooter;
