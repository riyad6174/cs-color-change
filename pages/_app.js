import { CookiesProvider } from 'react-cookie';

import '@/styles/globals.css';
import '@fontsource/rubik';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-phone-number-input/style.css';

import '../public/assets/css/boxicon.min.css';
import '../public/assets/css/flaticon.min.css';

// main style file
import '../styles/main.scss';

// import { GoogleAnalytics } from '@/components/googleAnalytics';
import FacebookPixel from '@/components/FacebookPixel';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { GoogleTagManager } from '@/components/GoogleTagManager';
import { useRouter } from 'next/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useEffect } from 'react';
import Script from 'next/script';


// Meta Pixel Code
const pageview = () => {
  window.fbq('track', 'PageView');
};
// https://developers.facebook.com/docs/facebook-pixel/advanced/
const event = (name, options = {}) => {
  window.fbq('track', name, options);
};
// Meta Pixel Code end

export default function App({ Component, pageProps }) {
  const router = useRouter();

  //tag-manager
  // useEffect(() => {
  //   const tagManagerArgs = {
  //     gtmId: 'GTM-5CSG8K2',
  //   };
  //   TagManager.initialize(tagManagerArgs);
  // }, []);

  return (
    <CookiesProvider>
      {/* <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script strategy='lazyOnload' id='ga-analytics'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
      </Script> */}

      {/* // Meta Pixel Code */}

      <GoogleAnalytics />
      <FacebookPixel />
      {/* <GoogleTagManager /> */}

      {/* <GoogleAnalytics /> */}

      <Component {...pageProps} />
    </CookiesProvider>
  );
}
