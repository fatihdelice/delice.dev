import Head from "next/head";
import Home from "../components/Home";
import Layouts from "../components/Layouts";
import About from "../components/About";
import Tabs from "../components/Tabs";

export const getStaticProps = async () => {
  const url = "https://api.github.com/users/";
  const [userRes, repoRes] = await Promise.all([
    fetch(url + "fatihdelice"),
    fetch(url + "fatihdelice" + "/repos"),
  ]);
  const [user, repos] = await Promise.all([userRes.json(), repoRes.json()]);
  if (userRes.status !== 200 || repoRes.status !== 200) {
    console.log("error");
  }
  return { props: { user, repos } };
};

const Index = ({repos}) => {
  return (
    <Layouts>
      <Head>
        <title>Fatih Delice — Computer Engineer, developer</title>
      </Head>
      <Home />
      <Tabs repos={repos}/>
    </Layouts>
  );
};

export default Index;