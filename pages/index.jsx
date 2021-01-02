import Container from "../components/container";
import Intro from "../components/intro";
import IntroDemo from "../components/intro-demo";
import Layout from "../components/layout";
import Head from "next/head";
import { useState } from "react";

export default function Index({ preview }) {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <Layout preview={preview} introDone={introDone}>
        <Head>
          <title>Devon Wells | Software Engineer | Soon-to-be-Dad</title>
        </Head>
        <Container>
          {introDone ? <Intro /> : <IntroDemo setIntroDone={setIntroDone} />}
        </Container>
      </Layout>
    </>
  );
}
