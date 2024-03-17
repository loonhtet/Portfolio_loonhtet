import "./globals.css";
// import { Inter } from "next/font/google";

import Provider from "./Provider";
import Navbar from "@/components/Navbar";

import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LoonHtet_Portfolio",
  description:
    "I'm always eager to collaborate on exciting new projects. If my work resonates with your vision, feel free to reach out. Let's turn your ideas into reality together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&family=PT+Sans+Caption&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body
        className={`dark:bg-[#070a11] relative bg-gradient-to-b from-blue-400/[.20] via-transparent dark:bg-gradient-to-r dark:from-slate-950 dark:via-blue-800/[.20] dark:via-30% dark:to-slate-950`}
      >
        <Provider>
          <Navbar />
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
