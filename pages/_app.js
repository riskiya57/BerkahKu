//import '../styles/globals.css'
import Head from 'next/head'
import '../styles/fontawesome-free-5.15.3-web/css/all.min.css'
import '../public/css/style.css'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
  <meta charSet="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

  <title>Berkah Web</title>
  <meta content="" name="description"/>
  <meta content="" name="keywords"/>

  <link href="public/img/favicon.png" rel="icon"/>
  <link href="public/img/apple-touch-icon.png" rel="apple-touch-icon"/>

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>

  <link href="public/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="public/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
  <link href="public/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
  <link href="public/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
  <link href="public/vendor/remixicon/remixicon.css" rel="stylesheet"/>
  <link href="public/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>

  <link href="public/css/style.css" rel="stylesheet"/>

  </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
