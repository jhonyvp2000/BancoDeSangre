import '../styles/index.css';
import '../components/layout/PublicNavbar.css';
import '../components/layout/Footer.css';
import '../components/ui/Button.css';
import '../components/ui/Card.css';
import '../components/ui/Badge.css';
import '../components/ui/BloodBarometer.css';
import '../pages/public/Home.css';
import '../pages/public/Requirements.css';
import '../pages/public/ProcessTimeline.css';

import PublicNavbar from '../components/layout/PublicNavbar';
import Footer from '../components/layout/Footer';

export const metadata = {
    title: 'Banco de Sangre | OGESS Tarapoto',
    description: 'Portal Web Referencial de Donación de Sangre',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <PublicNavbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
