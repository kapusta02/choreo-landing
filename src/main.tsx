import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AppRoutes from "./routes";
import {ConfigProvider} from "antd";
import {theme} from "./theme";
import {App as AntdApp} from "antd";
import './main.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={theme}>
                <AntdApp>
                    <AppRoutes/>
                </AntdApp>
            </ConfigProvider>
        </QueryClientProvider>
)
