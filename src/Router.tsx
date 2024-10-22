import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Image from './pages/Image';
import User from './pages/User';
import ImageDetails from './pages/ImageDetails';
import UserDetails from './pages/UserDetails';
import Chat from './pages/Chat';
import ChatDetails from './pages/ChatDetails';
import LogIn from './pages/LogIn';
import Category from './pages/Cateogry';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LogIn />,
            },
            {
                path: 'image',
                element: <Image />,
            },
            {
                path: 'image/:id',
                element: <ImageDetails />,
            },
            {
                path: 'user',
                element: <User />,
            },
            {
                path: 'user/:id',
                element: <UserDetails />,
            },
            {
                path: 'category',
                element: <Category />,
            },
            {
                path: 'chat',
                element: <Chat />,
            },
            {
                path: 'chat/:id',
                element: <ChatDetails />,
            },
        ],
    },
]);

export default router;
