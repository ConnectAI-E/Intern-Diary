import '../styles/globals.css';

import {Header} from '../components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <head>
            <title>ConnectAI Intern Diary</title>
            <link rel="icon" type="image/x-icon" href="/images/favicon.png"/>
        </head>
        <body>
        <Header/>
        <div className="px-6">{ children }</div>
        </body>
        </html>
    );
}
