import Head from 'next/head';


import Layout from '@/components/Layout';
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function Home() {

  const url =
  "https://colonelsaab.us12.list-manage.com/subscribe/post?u=a153744eb2a6accba5620bb2e&amp;id=456fd44b47&amp;f_id=00debbe0f0";

  return (
    <>
          <Head>
        <title>
        Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian
        </title>
        <meta
          name="description"
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        />
        <meta name="keywords" content="indian restaurant, London, veganuary,  valentinesday, anik99antooba, Valentine's at Colonel Saab, Valentines at Colonel Saab." />


        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content='Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
        />
        <meta
          name='twitter:description'
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/Elephant2.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
        />
        <meta
          property='og:description'
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/subscribe' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/Elephant2.jpg'
        />
        {/* <meta property="og:image:width" content="683" />
<meta property="og:image:height" content="1024" /> */}

        <meta
          name='facebook-domain-verification'
          content='7s3po0udvppgl9yiuutxmn6so4e17w'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main >

      <Layout>
      <>
        <div className="vh-50 container-fluid px-5 py-3">
          <div className="row">
            <div className="col-12 text-center d-flex flex-column align-items-center">
              <h2 className="mt-3 text-success">Subscribe</h2>
              <p className="text-success">
                Subscribe to Indian Restaurant Covent Garden Holborn Bloomsbury
              </p>
              <hr className="text-center w-50" />
            </div>
          </div>
        </div>
        <div className="col-12 text-center px-5 pb-2">
          <h3 className="text-success">
            Subscribe to Colonel Saab's Newsletter
          </h3>
          <p>
            Subscribe now to receive the latest news on our upcoming offers and
            special events.
          </p>
          <p>
            Don’t forget to include your birthday so we can send you an
            exclusive birthday surprise!
          </p>
          <span>
            By clicking ‘Subscribe’ you agree to receive communications from
            Colonel Saab and accept the data&nbsp;
            <a href="/privacy">Privacy Policy</a>
            .
            <br />
            We will always look after your data and won’t share it with anyone
            else.
          </span>
        </div>
        <div className="col-6 offset-3 my-3">
          {/* <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-success text-center">
              Subscribe
            </button>

            <p className="pt-1">
              You may unsubscribe at any time using the link in our newsletter.
            </p>
          </form> */}
          <div className="mailChimp">
            <MailchimpSubscribe className="test" url={url} />
          </div>
          <p className="pt-1">
            You may unsubscribe at any time using the link in our newsletter.
          </p>
        </div>
      </>
    </Layout>

      </main>
    </>
  )
}
