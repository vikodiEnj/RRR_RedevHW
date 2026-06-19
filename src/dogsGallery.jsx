const DogGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((url) => (
        <img className="gallery__img" src={url} alt="dog" />
      ))}
    </div>
  );
};

export default DogGallery;
