import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';

import './globals.css';

const JetBrainsMono = JetBrains_Mono({ weight: '800', subsets: ['latin'] });

export default function NotFound() {
    return (
        <div className={`min-h-screen flex justify-center items-center p-5 text-[#0D1117] dark:text-[#F8F8F8] bg-[#F8F8F8] dark:bg-[#0D1117] ${JetBrainsMono.className} antialiased`}>
            <div className="card select-none font-bold flex flex-col items-center gap-6 py-12 px-10 text-center max-w-xs w-full">
                <strong className="text-[6rem] leading-none myTextGradient">404</strong>
                <h1 className="text-base">Page not found!</h1>
                <Link href="/en-US" className="socialButton flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="currentColor" d="M19 11H7.83l4.88-4.88a.996.996 0 1 0-1.41-1.41l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" />
                    </svg>
                    Go back home
                </Link>
            </div>
        </div>
    );
}
