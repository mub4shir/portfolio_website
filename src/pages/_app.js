import Theme from '../styles/theme';
const prefix = '/portfolio_website';
export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel="shortcut icon" href={prefix + '/favicon.ico'} />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
