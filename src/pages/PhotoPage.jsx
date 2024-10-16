import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPhotoById } from '../services/unsplashService';
import PhotoDetails from '../components/PhotoDetails';

const PhotoPage = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await getPhotoById(id);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/" className="back-button">Back to Home</Link>
      {photo ? (
        <PhotoDetails photo={photo} />
      ) : (
        <div>Photo not found</div>
      )}
    </div>
  );
};

export default PhotoPage;