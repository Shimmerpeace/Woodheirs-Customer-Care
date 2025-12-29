import "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/index.ts";
import Navbar from "../components/Navbar/Navbar.tsx";
import Home from "../pages/Home/Home.tsx";
import { About } from "../pages/About/About.tsx";
import AboutPage from "../pages/AboutPage/AboutPage.tsx";
import Footer from "../components/Footer/Footer.tsx";
import { type FooterProps } from "./App.types.ts";

const footerProps: FooterProps = {
  logoText: "WoodHeirs",
  footerText: "We offer the best!",
  socialLinks: [
    {
      id: "wa",
      href: "https://www.whatsapp.com/yourprofile",
      label: "Whatsapp",
    },
    {
      id: "fb",
      href: "https://www.facebook.com/YourProfile/",
      label: "Facebook",
    },
    { id: "yt", href: "https://youtube.com/yourprofile", label: "YouTube" },
    { id: "tw", href: "https://twitter.com/yourprofile", label: "Twitter" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
  ],
};

function App() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                companyName={"WoodHeirs"}
                tagline={"Care that feels human."}
                mission={"To deliver exceptional customer care."}
                story={"Our origin..."}
              />
            }
          />
          <Route path="/aboutPage" element={<AboutPage />} />
        </Routes>
        <Footer {...footerProps} />
      </Layout>
    </div>
  );
}

export default App;
