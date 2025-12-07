import Intro from "./components/Intro/Intro";
import  Question from "./components/Question/Question";
import About from "../../components/About/About";
import Certifications from "../../components/Certifications/Certifications";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Intro />
      <Question />


      <About />
      <Certifications />
      <Testimonials />

    </div>
  );
}

export default Home;
