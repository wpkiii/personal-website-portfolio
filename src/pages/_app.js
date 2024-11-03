// src/pages/_app.js
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider"; // Make sure you import the ThemeProvider

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
