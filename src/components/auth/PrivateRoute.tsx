import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './ProvideAuth';

interface PrivateRouteProps {
    element: ReactElement;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const auth = useAuth();
    if (!auth.isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{element}</>;
};

export default PrivateRoute;
