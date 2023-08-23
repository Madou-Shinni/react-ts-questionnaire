// 路由表
import {createBrowserRouter} from "react-router-dom";
import Home from "../views/Home";

const routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <div>页面发生错误</div>
    }
];

const router = createBrowserRouter(routes);

export default router;