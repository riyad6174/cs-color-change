import Head from 'next/head';
import { useEffect, useState } from "react";

import Layout from '@/components/Layout';

import parse from "html-react-parser";
import { useRouter } from 'next/router';


import Section1 from "@/components/Blog2Inner/Section1";
import Section2 from "@/components/Blog2Inner/Section2";
import Slider from "@/components/Blog2Inner/Slider";
import BookingModal from "@/components/Layout/Modal/BookingModal";

import { Blog3 } from "@/utils/content";

export default function Home() {

  const { query } = useRouter();

  const [blog, setBlog] = useState();
  const [bookingModal, setBookingModal] = useState(false);
  // let { serialNumber, title } = useParams();

  useEffect(() => {
   

      setBlog(
            // WhatsOn.find((element) => element.title === query.slug.toString()),
          Blog3[0]
      );
    
  });



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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width" />
        <meta name="generator" content="pgwd" />
        <meta name="twitter:card" content="summary" />
                <meta
          name="twitter:title"
          content="Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian"
        />

        <meta name="facebook-domain-verification" content="7s3po0udvppgl9yiuutxmn6so4e17w" />
        
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main >
      <Layout>
      {blog && <Slider image={blog.image} />}

      {blog && <Section1 blog={blog} />}

      {blog && (
        <>
          <div className="container-fluid px-5 py-2 ">
            <div className="row text-center">{parse(blog.content)}</div>
            <div className="col-12 text-center">
              <button
                type="button"
                className="btn mt-3 text-light border border-warning rounded-0 custom-cursor"
                style={{
                  backgroundColor: "#277977",
                }}
                onMouseOver={(e) => {
                  e.target.classList.add("bg-transparent", "text-success");
                }}
                onMouseOut={(e) => {
                  e.target.classList.remove("bg-transparent", "text-success");
                }}
                onClick={() => {
                  setBookingModal(true);
                }}
              >
                MAKE A BOOKING
              </button>
            </div>
          </div>
        </>
      )}

      <Section2 />

      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}
    </Layout>

      </main>
    </>
  )
}
