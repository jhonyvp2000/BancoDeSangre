import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import Footer from './Footer';
import './PublicLayout.css';

const PublicLayout = () => {
    return (
        <div className="public-layout">
            <PublicNavbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
