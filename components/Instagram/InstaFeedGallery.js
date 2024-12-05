import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../Hook/windowSize';

import FeedGallery from './FeedGallery';

// import "./InstaFeedGallery.css";

const InstaFeedGallery = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;

  const windowSize = useWindowSize();

  const [perPageLimit, setPerPageLimit] = useState(0);

  // useEffect(() => {
  //   // this is to avoid memory leaks
  //   const abortController = new AbortController();

  //   async function fetchInstagramPost() {
  //     try {
  //       axios
  //         .get(
  //           `https://graph.instagram.com/me/media?fields=id,media_type,like_count,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`,
  //         )
  //         .then((resp) => {
  //           setFeedsData(resp.data.data);
  //         });
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   }

  //   // manually call the fecth function
  //   fetchInstagramPost();

  //   return () => {
  //     // cancel pending fetch request on component unmount
  //     abortController.abort();
  //   };
  // }, [props.limit]);

  const fetchPosts = (per_page_limit) => {
    try {
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&limit=${per_page_limit}&access_token=${tokenProp.current}`
        )
        .then((resp) => {
          setFeedsData(resp.data.data);
        });
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setPerPageLimit(6);
      fetchPosts(6);
      console.log('window.innerWidth666', window.innerWidth);
    } else {
      setPerPageLimit(3);

      fetchPosts(3);
      console.log('window.innerWidth333', window.innerWidth);
    }
  }, []);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const handleResize = () => {
    //     setWindowSize({
    //       width: window.innerWidth,

    fetchPosts(perPageLimit);
  }, [perPageLimit]);

  return (
    <div className='container px-4'>
      {/* <div className="row no-gutters"> */}
      <div className='row feeds-gallery-container no-gutters mb-4 '>
        <div className='col-12 bg-white'>
          <div className='profile-info d-flex justify-content-center align-items-center mt-4 mb-3'>
            <div className='profile-pic me-1'>
              <a href='https://www.instagram.com/colonelsaab/'>
                <img
                  src='/instagram-profile.jpeg'
                  className='rounded-circle'
                  alt=''
                />
              </a>
            </div>
            <div className='profile-details text-center'>
              <p className='profile-name  m-0 p-0 '>
                <a href='https://www.instagram.com/colonelsaab/'>
                  {' '}
                  Colonel Saab
                </a>
              </p>
              <p className='profile-tag  m-0 p-0'>@colonelsaab</p>
            </div>
          </div>
        </div>
        {feeds.map((feed) => (
          <div className='col-4 col-md-4 p-0 m-0' key={feed.id}>
            <FeedGallery feed={feed} />
          </div>
        ))}

        <div className='row p-0 m-0 d-flex justify-content-center align-items-center'>
          <div className=' col-8 col-md-2 mt-3  '>
            <button
              type='button'
              class='btn btn-light body-text py-1 w-100 h-100'
              onClick={() => {
                setPerPageLimit(perPageLimit + 3);
              }}
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaFeedGallery;
