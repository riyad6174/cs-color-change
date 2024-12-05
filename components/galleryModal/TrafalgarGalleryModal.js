import React from 'react';
import Gallery from 'react-photo-gallery';
import GalleryModal from '../Layout/Modal/GalleryModal';
import ImageGallery from 'react-image-gallery';

function TrafalgarGalleryModal({
  trafalgarImages,
  setGalleryIndex,
  setGalleryModal,
  galleryModal,
  galleryIndex,
}) {

  return (
    <div>
      <Gallery
        // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
        photos={trafalgarImages?.map(function (item) {
          delete item?.category;
          item.src = item?.original;
          return item;
        })}
        margin={4}
        onClick={(event, { index }) => {
          setGalleryModal(true);
          setGalleryIndex(index);
        }}
      />
      {trafalgarImages && (
      <GalleryModal
        show={galleryModal}
        onHide={() => setGalleryModal(!galleryModal)}
      >
        <ImageGallery
          // items={filteredImageArray
          items={trafalgarImages.map(function (item) {
            delete item?.category;
            return item;
          })}
          showFullscreenButton={false}
          showThumbnails={false}
          showPlayButton={false}
          startIndex={galleryIndex}
        />
      </GalleryModal>

      )}
    </div>
  );
}

export default TrafalgarGalleryModal;
