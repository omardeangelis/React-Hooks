import React from "react";

const Photos = () => {
  const [photos, setPhotos] = React.useState(null);
  React.useEffect(() => {
    (() => {
      fetch("https://jsonplaceholder.typicode.com/photos/1")
        .then((response) => response.json())
        .then((json) => setPhotos(json));
    })();
  }, []);
  return (
    <div className='container mt-4'>
      {photos && (
        <img alt='suspense' width={120} height={120} src={photos.url} />
      )}
    </div>
  );
};

export default Photos;
