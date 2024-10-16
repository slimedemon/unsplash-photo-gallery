import React, { useState, useEffect } from 'react';
import { getPhotos } from '../services/unsplashService';
import PhotoGrid from '../components/PhotoGrid';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadPhotos = async () => {
    try {
      const response = await getPhotos(page);
      if (response.data.length > 0) {
        setPhotos(prevPhotos => [...prevPhotos, ...response.data]);
        setPage(prevPage => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, []);

  return (
    <div>
      <h1>Unsplash Photos</h1>
      <PhotoGrid photos={photos} loadMore={loadPhotos} hasMore={hasMore} />
      <div className="load-more">
        {hasMore && (
          <button onClick={loadPhotos}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default HomePage;