import { Footer, Navbar } from 'components/organisms';
import Head from 'next/head';

function AppLayout({ children, mobileWithoutFooter }) {
  return (
    <>
      <Head>
        <title>Echo Dream</title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer className={mobileWithoutFooter && 'hidden sm:block'} />
    </>
  );
}

export default AppLayout;
