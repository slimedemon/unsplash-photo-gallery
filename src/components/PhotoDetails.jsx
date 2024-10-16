import React from 'react';

const PhotoDetails = ({ photo }) => {
  return (
    <div className="photo-detail">
      <img src={photo.urls.regular} alt={photo.alt_description} />
      <div className="title">{photo.alt_description || 'Untitled'}</div>
      <div className="author">By {photo.user.name}</div>
      <div className="description">{photo.description || 'No description available.'}</div>
    </div>
  );
};

export default PhotoDetails;