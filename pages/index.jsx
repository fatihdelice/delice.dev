import Head from "next/head";
// import Projects from "../components/Projects";
import Home from "../components/Home";
import Layouts from "../components/Layouts";
import About from "../components/About";
import Tabs from "../components/Tabs";

const Index = () => {
  return (
    <Layouts>
      <Head>
        <title>Fatih Delice — Computer Engineer, developer</title>
      </Head>
      <Home />
      <Tabs />
      {/* <Projects /> */}
    </Layouts>
  );
};

export default Index;