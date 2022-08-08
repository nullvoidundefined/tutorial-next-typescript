import "../src/style/global.css";
import { useEffect } from "react";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    fetch("/api/ping")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);
  return <Component {...pageProps} />;
};

export default App;
