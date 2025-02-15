import type { Metadata } from "next";
import "@/app/globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { JetBrains_Mono } from 'next/font/google';

import { SupportedLanguages } from "@/app/i18n/i18n.utils";

import SnowComponent from "./components/snow";

const JetBrainsMono = JetBrains_Mono({
  weight: '800',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "ManghiDev",
  authors: [{
    name: "ManghiDev",
  }],
  description: "With manghidev you can make your ideas come true, with the professionalism that will help you create your mobile or web project, from the initial idea to its launch.",
  keywords: ['ManghiDev', 'manghidev', 'manghi', 'dev', 'development', 'web', 'mobile', 'app', 'android', 'ios', 'design', 'programming', 'professional', 'team', 'ideas', 'reality', 'project', 'idea', 'launch', 'startup', 'start-up'],
};

export const generateStaticParams = async () => SupportedLanguages.map(({ code }) => ({ lang: code }));

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return <>
    <html lang={params.lang}>
      <head>
        <meta name="google-adsense-account" content="ca-pub-4108962150005369" />
      </head>
      <body className={`text-back dark:text-light bg-light dark:bg-dark ${JetBrainsMono.className} antialiased`} >
        <SpeedInsights />

        <SnowComponent months={[1, 11, 12]} particleNumberByMonthPosition={[50, 100, 450]} idChristmasHat="personalDescription" />

        {children}
      </body>
    </html>
  </>;
}
