import 'styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default App;
