import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { FrownOutlined } from "@ant-design/icons";
import "./NotFound.css";

const { Title, Paragraph } = Typography;

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <FrownOutlined className="not-found-icon" />
                <Title level={1} className="not-found-title">
                    404
                </Title>
                <Title level={3} className="not-found-subtitle">
                    Страница не найдена
                </Title>
                <Paragraph className="not-found-text">
                    Похоже, вы забрели не туда... Возможно, страница была удалена или вы ошиблись адресом.
                </Paragraph>
                <Link to="/">
                    <Button type="primary" size="large">
                        Вернуться на главную
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;