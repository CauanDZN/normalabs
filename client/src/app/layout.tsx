import './globals.css'
import localFont from 'next/font/local';

const myFont = localFont({ src: './Inter.ttf' });

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}