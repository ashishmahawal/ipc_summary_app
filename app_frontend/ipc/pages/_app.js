import React from "react";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Component {...pageProps} />
    </StateContext> 
  );
}