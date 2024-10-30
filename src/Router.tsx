import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Image from './pages/Image';
import User from './pages/User';
import ImageDetails from './pages/ImageDetails';
import UserDetails from './pages/UserDetails';
import Chat from './pages/Chat/Chat';
import ChatDetails from './pages/Chat/ChatDetails';
import LogIn from './pages/LogIn';
import Category from './pages/Cateogry';
import PrivateRoute from './components/auth/PrivateRoute';

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
                element: <PrivateRoute element={<Image />} />,
            },
            {
                path: 'image/:id',
                element: <PrivateRoute element={<ImageDetails />} />,
            },
            {
                path: 'user',
                element: <PrivateRoute element={<User />} />,
            },
            {
                path: 'user/:id',
                element: <PrivateRoute element={<UserDetails />} />,
            },
            {
                path: 'category',
                element: <PrivateRoute element={<Category />} />,
            },
            {
                path: 'chat',
                element: <PrivateRoute element={<Chat />} />,
            },
            {
                path: 'chat/:id',
                element: <PrivateRoute element={<ChatDetails />} />,
            },
        ],
    },
]);

export default router;
