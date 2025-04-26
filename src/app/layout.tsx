import { ReactNode } from 'react';
import "./globals.css";
import Link from 'next/link';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <div className="page">
                    <div className="header">Header</div>
                    <div className="menu">
                        Menu
                        <ol>
                        <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/items_ssf_ssg">Items SSF-SSG</Link>
                            </li>                            
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/profile">profile</Link>
                            </li>
                            <li>
                                <Link href="/login">Login</Link>
                            </li>
                        </ol>
                    </div>
                    <div className="main">
                        {children}
                    </div>
                    <div className="right">Right</div>
                    <div className="footer">Footer</div>
                </div>
            </body>
        </html>
    );
}
