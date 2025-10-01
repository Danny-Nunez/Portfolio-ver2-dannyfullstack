import '../../public/css/plugins.css';
import '../../public/css/dark.css';
import '../../public/css/style.css';
import './globals.css';

export const metadata = {
  title: 'Danny Nunez | Portfolio',
  description: 'Danny Nunez - Full Stack Developer Portfolio',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="Portfolio" content="Danny Portfolio" />
        <meta name="Danny Nunez" content="My life work" />
        
        {/* External Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;1,200&display=swap" rel="stylesheet" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B70P7VXLJB"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B70P7VXLJB');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
