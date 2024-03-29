import Head from "next/head";
import Home from "../components/Home";
import { SITE_TITLE } from "../util/strings";

export const getStaticProps = async () => {
  const url = process.env.API_URL;
  const username = process.env.GITHUB_USERNAME;
  const [userRes, repoRes] = await Promise.all([
    fetch(url + username),
    fetch(url + username + "/repos"),
  ]);
  const [user, repos] = await Promise.all([userRes.json(), repoRes.json()]);
  if (userRes.status !== 200 || repoRes.status !== 200) {
    console.log("error");
  }
  return { props: { user, repos } };
};

const Index = ({ user }) => {

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <Home user={user} />
    </>
  );
};

export default Index;