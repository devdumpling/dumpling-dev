import Container from "../components/container";
import Intro from "../components/intro";
import IntroDemo from "../components/intro-demo";
import Layout from "../components/layout";
import About from "../components/about";
import Head from "next/head";
import { useState } from "react";
import { getAllAuthorsForHome } from '../lib/graphcms'

export default function Index({ authors, preview }) {
  const [introDone, setIntroDone] = useState(false);
  const devon = authors.authors[0];

  return (
    <>
      <Layout preview={preview} introDone={introDone}>
        <Head>
          <title>Devon Wells | Software Engineer | Soon-to-be-Dad</title>
        </Head>
      
        <div className="bg-accent-3">
          <Container>
            {introDone ? <Intro /> : <IntroDemo setIntroDone={setIntroDone} />}
          </Container>
        </div>

        <div className="bg-accent-1 p-16">
          <Container>
            <About author={devon}/>
          </Container>
        </div>

        <div className="bg-accent-1">
          <Container>
            {/* <About /> */}
          </Container>
        </div>

        <div className="bg-accent-1">
          <Container>
            {/* <About /> */}
          </Container>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const authors = (await getAllAuthorsForHome(preview)) || []  
  return {
    props: { authors, preview },
  }
}