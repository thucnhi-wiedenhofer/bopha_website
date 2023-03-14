import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Container({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bopha vous propose des créations florales sur mesure pour toutes les occasions et évènements. Passionnée par l'art floral, bopha donne des cours et anime des ateliers également."
        />
        <meta
          property="og:title"
          content="Bopha, Décoratrice Florale - Création florale sur mesure"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bopha-website.vercel.app/" />
        <meta property="og:image" content="https://bopha-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbopha.ee255b61.jpg&w=1920&q=75" />
        <meta
          property="og:description"
          content="Bopha vous propose des créations florales sur mesure pour toutes les occasions et évènements. Passionnée par l'art floral, bopha donne des cours et anime des ateliers également."
        />
        <title>Bopha, Décoratrice Florale - Création florale sur mesure</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </>
  );
}
