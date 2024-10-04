"use client";
import React, { useState } from "react";
import MainHeader from "../header/MainHeader";
import GetInTouch from "../GetInTouch";
import ContactForm from "../ContactForm";
import Cards from "../Cards";
import Footer from "../Footer";
import Header from "../header/Header";

const HomeComponent = () => {
  const [viewMode, setViewMode] = useState("desktop");
  const [headerVisible, setHeaderVisible] = useState(true); // State for header visibility

  return (
    <>
      {/* Pass viewMode and setViewMode to Header */}
      {headerVisible ? (
        <Header
          viewMode={viewMode}
          setViewMode={setViewMode}
          headerVisible={headerVisible}
          setHeaderVisible={setHeaderVisible}
        />
      ) : null}

      {/* Conditionally render the components based on viewMode */}
      {viewMode === "mobile" ? (
        <div className="bg-dark">
          <div className="max-w-[468px] mx-auto bg-custom-gradient bg-primary">
            {/* Mobile View Components */}

            {/* <MainHeader /> */}
            <GetInTouch />
            <ContactForm />
            <Cards />
            <Footer />
          </div>
        </div>
      ) : (
        <div className="max-w-[1024px] mx-auto bg-custom-gradient">
          {/* Desktop View Components */}
          <MainHeader />
          <GetInTouch />
          <ContactForm />
          <Cards />
          <Footer />
        </div>
      )}
    </>
  );
};

export default HomeComponent;
