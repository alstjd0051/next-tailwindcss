import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../src/commons/hooks/useAuth";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //HOC
    <RecoilRoot>
      {/* Higher Order Component */}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
