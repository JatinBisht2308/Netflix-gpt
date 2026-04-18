
import { createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Borwse from './components/Borwse';
import Gpt from './components/Gpt';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
     {
        path: "/browse",
        element: <Borwse/>
    },
    {
        path: "/gpt",
        element: <Gpt/>
    }
]);