import './App.css'
import {Main} from "./container/Main/Main.tsx";
import {ErrorPage} from "./components/ErrorPage/ErrorPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "antd";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}