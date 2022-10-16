import type { NextPage } from 'next';
import Head from 'next/head';
import {Button} from '@src/common/view/components/index'


const Home: NextPage = () => (
    <div>
      <Head>
        <title>Fernando Sanchez | Software Engineer</title>
      </Head>
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
      <footer >
        <p>footer here</p>
      </footer>
    </div>
  );

export default Home;
