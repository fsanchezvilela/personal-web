import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '@src/common/view/components/atoms/index'
import { Footer, Header } from '@src/common/view/layout';


const Home: NextPage = () => (
    <div>
      <Head>
        <title>Fernando Sanchez | Software Engineer</title>
    </Head>
    <Header/>
      <main>
        <p>Hi Welcome</p>
      <Button buttonStyle='primary'>Test Button Primary Component</Button>
      <Button buttonStyle='secondary'>Test Button Secondary Component</Button>
      <Button href='#fav'>anchor tag test button</Button>
      <Button disabled>disabled</Button>
        <h1 className="text-3xl font-bold underline">
          Im Fernando Sanchez Software Engineer
        </h1>
      </main>
    <Footer/>
    </div>
  );

export default Home;
