import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./routes.ts";
import PrivateRoute from "../components/PrivateRoute.tsx";
import Home from "../views/Home";
import AppLayout from "../components/Layout/Layout.tsx";
import Apply from "../views/Apply";
import NotFound from "../components/NotFound/NotFound.tsx";
import DanceCompetition from "../views/DanceCompetition";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.NOT_FOUND} element={<NotFound/>}/>
                <Route path={ROUTES.HOME} element={<AppLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={ROUTES.DANCE_COMPETITION} element={<DanceCompetition/>}/>
                    <Route path={ROUTES.APPLY} element={<PrivateRoute><Apply/></PrivateRoute>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes