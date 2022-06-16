import React from "react";
import { AppProps } from "next/app";
import AuthProvider from "../utils/AuthProvider";
import "../styles/index.css";
import ErrorBoundary from '../error/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
     <ErrorBoundary>
        <Component {...pageProps} />
     </ErrorBoundary>

    // </AuthProvider>
  );
}

export default MyApp;
