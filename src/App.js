import React from "react";
import { Helmet } from "react-helmet";
// Screens
import { RootRouters } from "./routers";
import EmailJs from "@emailjs/browser";

EmailJs.init("Tm97HrGnILd7EaXsf");

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <RootRouters />
    </>
  );
}
