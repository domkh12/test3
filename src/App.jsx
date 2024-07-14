import "./App.css";
import "./pages/template/photographyTemplate";
import NavBarComponent from "./components/homepage/NavBarComponent";
import HeroSection from "./components/homepage/HeroSection";
import TemplatesSection from "./components/homepage/TemplatesSection";
import FeatureSection from "./components/homepage/FeatureSection";
import OurTeamSection from "./components/homepage/OurTeamSection";
import FooterSection from "./components/homepage/FooterSection";
import ContactSection from "./components/homepage/ContactSection";
import ScrollToTop from "react-scroll-to-top";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic SEO */}
        <title>Showcase - Free Portfolio Builder</title>
        <meta
          name="description"
          content="Create stunning portfolios for free with Showcase. Our easy-to-use platform helps you showcase your work and build your online presence."
        />
        <meta
          name="keywords"
          content="portfolio builder, free portfolio, online portfolio, portfolio website, create portfolio, showcase portfolio"
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Showcase - Free Portfolio Builder" />
        <meta
          property="og:description"
          content="Create stunning portfolios for free with Showcase. Our easy-to-use platform helps you showcase your work and build your online presence."
        />
        <meta
          property="og:image"
          content="public/homepageImg/thumbnail-share.png"
        />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ScrollToTop
        smooth
        color="#4C3DE3"
        className="flex justify-center items-center rounded-md"
      />
      <NavBarComponent />
      <HeroSection />
      <TemplatesSection />
      <FeatureSection />
      <OurTeamSection />
      <ContactSection />
      <FooterSection />
    </HelmetProvider>
  );
}

export default App;
