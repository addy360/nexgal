import Document, { Head, Main, NextScript } from 'next/document'
import Nav from '../components/Nav'
export default class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    return await Document.getInitialProps(ctx)
  }

  render () {
    return (
      <html >
        <Head>
          <title>Site Title</title>
          
        </Head>

        <body>

            <div className="site-wrap">
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <Nav/>
            <main className="main-content">
            <Main />
            </main>
            </div>
          
          <NextScript />
          
        <script src="/static/jquery-3.3.1.min.js"></script>
        <script src="/static/jquery-migrate-3.0.1.min.js"></script>
        <script src="/static/jquery-ui.js"></script>
        <script src="/static/popper.min.js"></script>
        <script src="/static/bootstrap.min.js"></script>
        <script src="/static/owl.carousel.min.js"></script>
        <script src="/static/jquery.stellar.min.js"></script>
        <script src="/static/jquery.countdown.min.js"></script>
        <script src="/static/jquery.magnific-popup.min.js"></script>
        <script src="/static/bootstrap-datepicker.min.js"></script>
        <script src="/static/aos.js"></script>
        <script src="/static/jquery.fancybox.min.js"></script>
        <script src="/static/main.js"></script>
        </body>
      </html>
    )
  }
}