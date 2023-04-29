import { createEmotionCache, Global, MantineProvider } from '@mantine/core';
import { AppShell, Footer, Header } from '@pasa/components';
import { createThemeoverride, globalStyles, RouterTransition } from '@pasa/customComponents';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export const cache = createEmotionCache({ key: 'pasa', prepend: true });
function PasaApp({ Component, pageProps }: AppProps) {
  const themeOverride = createThemeoverride();
  return (
    <>
      <Head>
        <title>Welcome To Pasa Slots</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/images/modal/headerlogo.png" type="image/x-icon" />
        <meta charSet="UTF-8" />
      </Head>
      <main>
        <MantineProvider emotionCache={cache} withGlobalStyles withNormalizeCSS theme={themeOverride}>
          <Global styles={globalStyles} />
          <RouterTransition />
          <AppShell header={<Header />} footer={<Footer />}>
            <Component {...pageProps} />
          </AppShell>
        </MantineProvider>
      </main>
    </>
  );
}

export default PasaApp;
