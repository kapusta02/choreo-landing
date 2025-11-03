import {Button, Card, Divider, Flex, Form, Input, InputNumber, Select, Typography} from "antd";
import {MaskedInput} from "antd-mask-input";
import {countries} from "../../constant/countries.ts";

const {Title} = Typography;
const {Option, OptGroup} = Select;

export interface ApplyFormValues {
    userId?: string;
    location: string;
    organizationName: string;
    participantName: string;
    nomination: string;
    ageCategory: string;
    danceName: string;
    performanceDuration: string;
    participantsCount: number;
    teacherFullName: string;
    leaderFullName: string;
    contactPerson: string;
    phoneNumber: string;
    totalParticipants: number;
    danceStart: string;
}


const Apply = () => {
    const [form] = Form.useForm<ApplyFormValues>();

    return (<Card style={{
        width: '90%',
        maxWidth: 800,
        margin: '0 auto',
    }}>
        <Flex align="center" justify="center" vertical>
            <Title level={2} style={{margin: 0}}>Подача заявки на участие</Title>
        </Flex>

        <Divider/>

        <Form
            layout="vertical"
            form={form}
            name="login-control"
        >
            <Form.Item
                name="location"
                label="Страна/Город"
                rules={[{required: true, message: 'Выберите страну и город'}]}
            >
                <Select
                    showSearch
                    optionFilterProp="children"
                >
                    {countries.map((country) => (
                        <OptGroup key={country.name} label={country.name}>
                            {country.cities.map((city) => (
                                <Option key={`${country.name}|${city}`} value={`${country.name}|${city}`}>
                                    {city}
                                </Option>
                            ))}
                        </OptGroup>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                name="organizationName"
                label="Наименование Студии/Школы/Учебного заведения"
                rules={[{
                    required: true,
                    message: 'Введите наименование Студии/Школы/Учебного заведения'
                }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="participantName"
                label="Фамилия Имя солиста/Дуэт/Трио или название Группы"
                rules={[{
                    required: true,
                    message: 'Укажите Фамилия Имя солиста/Дуэт/Трио или название Группы'
                }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="nomination"
                label="Номинация"
                rules={[{
                    required: true,
                    message: 'Выберите номинацию'
                }]}
            >
                <Select>
                    {[
                        'Классика (Хореография, Балет)',
                        'Современная хореография (Modern, Jazz Modern, Contemporary dance, Jazz)',
                        'Народные танцы',
                        'Восточные танцы',
                        'Бальные танцы',
                        'Эстрадные танец (Детские танцы, танцевальное шоу, танцевальный микс)',
                        'Спортивные танцы (элементы акробатики, гимнастики, черлидинг и т.д.)',
                        'Современные танцы', 'Театральное искусство',
                        'Музыкальное искусство - Вокал',
                        'Инструментальное искусство'
                    ].map((nomintaion) => (
                        <Option value={nomintaion}>{nomintaion}</Option>))}
                </Select>
            </Form.Item>
            <Form.Item
                name="ageCategory"
                label="Возрастная категория"
                rules={[{required: true, message: 'Выберите возрастную категорию'}]}
            >
                <Select>
                    {[
                        '3-6 года - Дошкольный возраст',
                        '7-12 лет - Школьный возраст',
                        '13-17 лет - Молодежь',
                        '18+ - Взрослые',
                        'Смешанная возрастная категория – MIX',
                    ].map((age) => (<Option value={age}>{age}</Option>))}
                </Select>
            </Form.Item>
            <Form.Item
                name="danceName"
                label="Наименование танца"
                rules={[{required: true, message: 'Введите наименование танца'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Длительность номера, согласно регламенту"
                name="performanceDuration"
                rules={[
                    {required: true, message: 'Укажите длительность номера'},
                    {
                        pattern: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
                        message: 'Формат: MM:CC (например, 1:30)',
                    },
                ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Количество участников группы"
                name="participantsCount"
                rules={[
                    {required: true, message: 'Укажите количество участников'},
                    {type: 'number', min: 1, message: 'Минимум 1 участник'},
                ]}
            >
                <InputNumber min={1} style={{width: '100%'}}/>
            </Form.Item>
            <Form.Item
                name="teacherFullName"
                label="ФИО преподавателя"
                rules={[{
                    required: true,
                    message: 'Введите ФИО преподавателя'
                }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="leaderFullName"
                label="ФИО руководителя Студии/Школы/Учебного заведения"
                rules={[{
                    required: true,
                    message: 'Введите ФИО руководителя Студии/Школы/Учебного заведения'
                }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="contactPerson"
                label="Контактное лицо"
                rules={[{
                    required: true,
                    message: 'Укажите контактное лицо'
                }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                name="phoneNumber"
                label="Контактный номер"
                rules={[
                    {required: true, message: 'Введите номер телефона'},
                    {
                        validator: (_, value) => {
                            if (!value) {
                                return Promise.resolve();
                            }
                            const digits = value.replace(/\D/g, '');
                            if (digits.length !== 11) {
                                return Promise.reject(new Error('Введите полный номер телефона'));
                            }
                            return Promise.resolve();
                        },
                    },
                ]}
                getValueFromEvent={(event) => event.target.value}
            >
                <MaskedInput mask="+7 (000) 000-0000"/>
            </Form.Item>
            <Form.Item
                label="Общее количество участников с одной Студии/Школы/Учебного заведения, для получения дипломов, подарков"
                name="totalParticipants"
                rules={[
                    {
                        required: true,
                        message: 'Укажите общее количество участников'
                    },
                    {type: 'number', min: 1, message: 'Минимум 1 участник'},
                ]}
            >
                <InputNumber min={1} style={{width: '100%'}}/>
            </Form.Item>
            <Form.Item
                name="danceStart"
                label="Указать начало танца, для запуска танца"
                rules={[{required: true, message: 'Укажите начало танца'}]}
            >
                <Select>
                    {['С точки - когда участник(и) строятся на сцене перед началом танца', 'С выхода - когда участник(и) выходят из-за кулис'].map((age) => (
                        <Option value={age}>{age}</Option>))}
                </Select>
            </Form.Item>
            <Form.Item noStyle>
                <div style={{ marginTop: 8, color: '#665', fontSize: 14 }}>
                    Для участия в соревновании необходимо правильно заполнить заявку в установленном
                    образце и отправить Вашу музыкальную композицию в формате MP3 с указанием номера заявки (см. в профиле) на
                    наш e-mail —
                    <a
                        href="mailto:choreographerkz@mail.ru"
                        style={{color: "#665"}}
                    >
                        <b>choreographerkz@mail.ru</b>
                    </a>
                </div>
            </Form.Item>
            <Form.Item label={null}>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    style={{width: '100%', marginTop: 20}}
                >
                    Подать заявку
                </Button>
            </Form.Item>
        </Form>
    </Card>)
};

export default Apply;