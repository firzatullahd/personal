// import App from 'next/app'
import '../styles/app.scss';
import Layout from '../components/Layout';
import MovieState from '../util/MovieState.json';
import React, { useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [movies, setMovies] = useState(MovieState);
    return (
        <Layout>
            <Component movies={movies} {...pageProps} />
        </Layout>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp