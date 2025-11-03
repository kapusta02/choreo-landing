import {Navigate, useLocation} from "react-router-dom";
import {ReactNode} from "react";

const PrivateRoute = ({}: { children: ReactNode }) => {
    const location = useLocation();
    const url = new URLSearchParams();
    url.set('redirect', location.pathname + location.search);


    return <Navigate to={{pathname: '/login', search: url.toString()}}/>;
}

export default PrivateRoute;