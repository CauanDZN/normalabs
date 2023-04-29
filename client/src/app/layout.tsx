import './globals.css'
import localFont from 'next/font/local';

const myFont = localFont({ src: './Inter.ttf' });

export const metadata = {
  title: 'NormaLabs',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}