import {Card, Tooltip} from "antd";

interface ICardContest {
    img: string;
    name: string;
    link: string;
    city: string;
}
const CardContest = ({img, name, link, city}: ICardContest) => {
    return (
        <Card
            hoverable
            cover={
                <div style={{
                    overflow: "hidden",
                    borderRadius: "12px",
                }}>
                    <img
                        src={img}
                        alt={name}
                        style={{
                            height: "300px",
                            width: "100%",
                            objectFit: "cover",
                            transition: "transform 0.3s ease"
                        }}
                        className="card-img"
                    />
                </div>
            }
            style={{
                borderRadius: 12,
                overflow: "hidden",
                cursor: "pointer"
            }}
            onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
        >
            <Tooltip title={name}>
                <Card.Meta
                    title={
                        <span className="title-contest">{name}</span>
                    }
                    description={city}
                />
            </Tooltip>
        </Card>
    )
};

export default CardContest;