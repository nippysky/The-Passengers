import ScrollUp from "@/components/ScrollUp";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={montserrat.className}>
        <NextNProgress
          color="#D40000"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          showOnShallow={true}
          options={{ easing: "ease", speed: 500 }}
        />
        <Component {...pageProps} />

        <ScrollUp />
      </main>

      <footer>
        <img
          src="/brand/FooterBackground.png"
          alt="Footer Line"
          className="bg-cover w-full h-[20px]"
        />
      </footer>
    </>
  );
}
