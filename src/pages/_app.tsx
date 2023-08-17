import { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(process.env.NODE_ENV);
  }, []);
  return <Component {...pageProps} />;
}
