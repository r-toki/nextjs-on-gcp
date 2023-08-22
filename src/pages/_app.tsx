import { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("NODE_ENV", process.env.NODE_ENV);
    console.log("NEXT_PUBLIC_APP_ENV", process.env.NEXT_PUBLIC_APP_ENV);
  }, []);
  return <Component {...pageProps} />;
}
