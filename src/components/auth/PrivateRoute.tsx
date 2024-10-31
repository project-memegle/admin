// PrivateRoute.tsx
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface PrivateRouteProps {
    element: ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    // const isAuthenticated = useAuth();
    //todo : 주석 풀기
    const isAuthenticated = useAuth().user;
    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
