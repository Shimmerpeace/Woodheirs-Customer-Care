import Intro from "./components/Intro/Intro";
import Question from "./components/Question/Question";
import ProblemsSolutions from "./components/ProblemsSolutions/ProblemsSolutions";
import CoursesSection from "./components/CoursesSection/CoursesSection";
import CoursesIntro from "./components/CoursesIntro/CoursesIntro";

//import Certifications from "./components/Certifications/Certifications";
//import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Intro />
      <Question />
      <ProblemsSolutions />
      <CoursesIntro />
      <CoursesSection />
    </div>
  );
}

export default Home;
