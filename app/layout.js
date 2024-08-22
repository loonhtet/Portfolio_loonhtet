import "./globals.css";
// import { Inter } from "next/font/google";
import Script from "next/script";

import Provider from "./Provider";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import { ViewTransitions } from "next-view-transitions";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loon Htet",
  description:
    "I'm always eager to collaborate on exciting new projects. If my work resonates with your vision, feel free to reach out. Let's turn your ideas into reality together.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin&family=PT+Sans+Caption&family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S9G82WC1FB"
        />

        <Script id="google-analytics">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S9G82WC1FB');
          `}
        </Script>

        <body
          className={`dark bg-[#070a11] relative bg-gradient-to-r from-slate-950 via-blue-800/[.20] via-30 to-slate-950`}
        >
          <Provider>
            <Navbar />
            <div>{children}</div>
          </Provider>
        </body>
      </html>
    </ViewTransitions>
  );
}
