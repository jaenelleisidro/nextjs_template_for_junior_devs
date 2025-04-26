import { ReactNode } from 'react';
import "./globals.css";

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
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="about">About Us</a>
                            </li>
                            <li>
                                <a href="profile">profile</a>
                            </li>
                            <li>
                                <a href="login">Login</a>
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
