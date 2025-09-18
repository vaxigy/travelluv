import React, { useState } from 'react';

function ImageFilter() {
  const images = [
    {
      id: 1,
      src: '/images/gallery-01.jpg',
      category: 'City'
    },
    {
      id: 2,
      src: '/images/gallery-02.jpg',
      category: 'City'
    },
    {
      id: 3,
      src: '/images/gallery-03.jpg',
      category: 'Nature'
    },
    {
      id: 4,
      src: '/images/gallery-04.jpg',
      category: 'City'
    },
    {
      id: 5,
      src: '/images/gallery-05.jpg',
      category: 'City'
    },
    {
      id: 6,
      src: '/images/gallery-06.jpg',
      category: 'Nature'
    },
    {
      id: 7,
      src: '/images/gallery-07.jpg',
      category: 'Nature'
    },
    {
      id: 8,
      src: '/images/gallery-08.jpg',
      category: 'Nature'
    }
  ];
  const categories = ['All', ...new Set(images.map((image) => image.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const filteredImages = activeCategory === 'All' ? images : images.filter((image) => image.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  const handleImageOpen = (index) => {
    setCurrentImageIndex(index);
  };
  const handleImageClose = (event) => {
    if (
      event.target.id === 'image-popup' ||
      event.target.id === 'image-popup-close'
    ) {
      setCurrentImageIndex(null);
    }
  };
  const showPreviousImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? filteredImages.length - 1 : prev - 1);
  };
  const showNextImage = () => {
    setCurrentImageIndex((prev) => prev === filteredImages.length - 1 ? 0 : prev + 1);
  };

  return (
    <section className='image-filter'>
      <div className="container">
        <div className="image-filter-wrap">
          <div className="image-filter-tabs">
            {categories.map((category) => (
              <button
                onClick={() => handleCategoryChange(category)}
                className={category === activeCategory ? 'active' : ''}
              >{category}</button>
            ))}
          </div>
          <div className="image-filter-images">
            {filteredImages.map((image, index) => (
              <img
                src={image.src}
                alt={image.category}
                onClick={() => handleImageOpen(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {currentImageIndex !== null && (
        <div id='image-popup' className="image-popup" onClick={handleImageClose}>
          <div className="image-popup-content">
            <button
              id='image-popup-close'
              className='image-popup-close'
              onClick={handleImageClose}
              style={{ backgroundImage: 'url(/images/icon-close.png)' }}
            ></button>
            <img
              className='image-popup-main'
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].category}
            />
            <button
              className='image-popup-previous'
              onClick={showPreviousImage}
              style={{ backgroundImage: 'url(/images/arrow-left.png)' }}
            ></button>
            <button
              className='image-popup-next'
              onClick={showNextImage}
              style={{ backgroundImage: 'url(/images/arrow-right.png)' }}
            ></button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ImageFilter;
