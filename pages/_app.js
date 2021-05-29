import '../styles/aos.css'
import '../styles/bootstrap-datepicker.css'
import '../styles/bootstrap.min.css'
import '../styles/fancybox.min.css'
import '../styles/jquery-ui.css'
import '../styles/magnific-popup.css'
import '../styles/owl.carousel.min.css'
import '../styles/owl.theme.default.min.css'
import '../styles/style.css'
import '../styles/globals.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
