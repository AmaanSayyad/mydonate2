import React from "react";

import Header from "../components/partials/Header";
import HeroHome from "../components/partials/HeroHome";
import FeaturesHome from "../components/partials/Features";
import FeaturesBlocks from "../components/partials/FeaturesBlocks";
import Testimonials from "../components/partials/Testimonials";
import Newsletter from "../components/partials/Newsletter";
import Footer from "../components/partials/Footer";
import Layout from "../components/partials/Layout";
import Home from "../components/partials/Home";
function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] dark:bg-gray-900 overflow-hidden font-Montserrat">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <Layout>
          <Home />
        </Layout>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Index;
