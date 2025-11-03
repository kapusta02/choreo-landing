import {ThemeConfig} from "antd";

export const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: '#04183c',
        borderRadius: 8,
        sizeStep: 4,
        sizeUnit: 4,
    },
    components: {
        Select: {
            optionSelectedBg: '#e6f4ff',
            optionSelectedColor: '#04183c',
        },
    },
};