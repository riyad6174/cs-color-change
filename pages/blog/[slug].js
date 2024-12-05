import Head from 'next/head';
import { useState } from 'react';

import Layout from '@/components/Layout';

import parse from 'html-react-parser';

import Section1 from '@/components/Blog2Inner/Section1';
import Slider from '@/components/Blog2Inner/Slider';
import BookingModal from '@/components/Layout/Modal/BookingModal';
import { BlogMain } from '@/utils/content';

export default function Page({ blog }) {
  const [bookingModal, setBookingModal] = useState(false);

  // const { query } = useRouter();

  // const [blog, setBlog] = useState();
  // // let { serialNumber, title } = useParams();

  // useEffect(() => {

  //   if (query && query.slug) {
  //     setBlog(
  //       BlogMain.find((element) => element.slug === query.slug.toString()),
  //          // BlogMain[query.slug]

  //     );
  //     console.log(query)
  //   }
  // });

  return (
    <>
      <Head>
        <title>
          {blog && blog.metaTitle
            ? blog.metaTitle
            : 'Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'}
        </title>

        <meta
          name='description'
          content={
            blog && blog.metaDesc
              ? blog.metaDesc
              : "Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
          }
        />

        <meta
          name='keywords'
          content="indian restaurant, London, veganuary,  valentinesday, anik99antooba, Valentine's at Colonel Saab, Valentines at Colonel Saab."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content={
            blog && blog.metaTitle
              ? blog.metaTitle
              : 'Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
          }
        />
        <meta
          name='twitter:description'
          content={
            blog && blog.metaDesc
              ? blog.metaDesc
              : "Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
          }
        />
        <meta name='twitter:image' content={blog.image} />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content={
            blog && blog.metaTitle
              ? blog.metaTitle
              : 'Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
          }
        />
        <meta
          name='twitter:description'
          content={
            blog && blog.metaDesc
              ? blog.metaDesc
              : "Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
          }
        />
        <meta name='twitter:image' content={blog.image} />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={
            blog && blog.metaTitle
              ? blog.metaTitle
              : 'Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
          }
        />
        <meta
          property='og:description'
          content={
            blog && blog.metaDesc
              ? blog.metaDesc
              : "Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
          }
        />

        <meta
          property='og:url'
          content={`https://colonelsaab.co.uk/blog/${blog.slug}`}
        />
        <meta
          property='og:image'
          content={`https://colonelsaab.co.uk${blog.image}`}
        />

        <meta
          name='facebook-domain-verification'
          content='7s3po0udvppgl9yiuutxmn6so4e17w'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        <Layout>
          {blog && (
            <Slider image={blog.image} alt={blog.imageAlt && blog.imageAlt} />
          )}

          {blog && <Section1 blog={blog} />}

          {blog && (
            <>
              <div className='container px-5 py-2 '>
                <div className='row text-center'>{parse(blog.content)}</div>
                <div className='col-12 text-center'>
                  <button
                    type='button'
                    className='btn mt-3 text-light border border-warning rounded-0 custom-cursor mb-4'
                    style={{
                      backgroundColor: '#277977',
                    }}
                    onMouseOver={(e) => {
                      e.target.classList.add('bg-transparent', 'text-success');
                    }}
                    onMouseOut={(e) => {
                      e.target.classList.remove(
                        'bg-transparent',
                        'text-success'
                      );
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

          {/* <Section2 /> */}

          {bookingModal && (
            <BookingModal
              show={bookingModal}
              onHide={() => setBookingModal(!bookingModal)}
            />
          )}
        </Layout>
      </main>
    </>
  );
}

// useEffect(() => {

//   if (query && query.slug) {
//     setBlog(
//       BlogMain.find((element) => element.slug === query.slug.toString()),
//          // BlogMain[query.slug]

//     );
//     console.log(query)
//   }
// });

export async function getStaticPaths() {
  const blogs_main = BlogMain.filter(
    (value) => Object.keys(value).length !== 0
  );
  const paths = blogs_main.map((item) => {
    return { params: { slug: item.slug } };
  });

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // { slug: 'pancake-day-2023' }
  const blog = BlogMain.find(
    (element) => element.slug === params.slug.toString()
  );
  return { props: { blog } };
}
