import Head from 'next/head';
import '../../public/css/plugins.css'; // Assuming CSS is in the public directory
import '../../public/css/dark.css';
import '../../public/css/style.css';
import './globals.css';

export default function Layout({ children }) {
    return (
        <html lang="en">
           <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="Portfolio" content="Danny Portfolio" />
    <meta name="Danny Nunez" content="My life work" />
    <title>Danny Nunez | Portfolio</title>
    <link rel="icon" href="/images/favicon.ico" />
    
    {/* External Fonts */}
    <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
    {/* Other font imports */}
    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;1,200&display=swap" rel="stylesheet" />

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-B70P7VXLJB"></script>
    <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B70P7VXLJB');
        `}
    </script>
</Head>

            <body>
                {children}
            </body>
        </html>
    );
}
