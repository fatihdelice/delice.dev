import Head from "next/head";
// import Projects from "../components/Projects";
import Home from "../components/Home";
import Layouts from "../components/Layouts";
import About from "../components/About";

const Index = () => {
  return (
    <Layouts>
      <Head>
        <title>Fatih Delice — Computer Engineer, developer</title>
      </Head>
      <Home />
      <About />
      {/* <Projects /> */}
    </Layouts>
  );
};

export default Index;