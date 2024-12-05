import Head from 'next/head';
import Script from 'next/script';

export const GoogleAnalytics = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics  */}
      {/* <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-LMF9Y5S4JL"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-LMF9Y5S4JL');
                `}
            </Script> */}

       <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-LMF9Y5S4JL" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LMF9Y5S4JL');
        `}
      </Script>
    </div>
    </>
  );
};


