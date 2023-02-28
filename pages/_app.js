import "@/styles/globals.css";
import { Righteous } from "next/font/google";
const font = Righteous({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
