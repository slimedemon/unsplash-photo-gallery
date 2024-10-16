import React from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingSpinner from './LoadingSpinner';

const PhotoGrid = ({ photos, loadMore, hasMore }) => {
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={loadMore}
      hasMore={hasMore}
     
    >
      <div className="photo-grid">
        {photos.map(photo => (
          <Link to={`/photos/${photo.id}`} key={photo.id}>
            <div className="photo-item">
              <img src={photo.urls.thumb} alt={photo.alt_description} />
              <p>Author: {photo.user.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PhotoGrid;