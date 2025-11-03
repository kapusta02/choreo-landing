import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import Header from "../Header/Header.tsx";
import AppFooter from "../Footer/Footer.tsx";

const AppLayout = () => {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header/>
            <Layout.Content style={{
                padding: "24px",
                background: "#DEE6F3",
                marginTop: "80px",
            }}>
                <div style={{maxWidth: '1400px', margin: '0 auto'}}>
                    <Outlet/>
                </div>
            </Layout.Content>
            <AppFooter/>
        </Layout>
    )
};

export default AppLayout;