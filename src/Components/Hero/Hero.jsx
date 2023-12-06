import React, { useContext, useState } from "react";
import classes from "./Hero.module.css";
import heroProducts from "../Assets/heroProducts";
import Info from "./Info";
import { ShopContext } from "../../Context/ShopContext";

function Hero() {
  const { addToCart } = useContext(ShopContext);
  const [counter, setCounter] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const addItem = () => {
    for (let i = 0; i < counter; i++) {
      addToCart(37);
    }
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(0);
  };

  const nextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % heroProducts.length);
  };

  const prevImage = () => {
    setSelectedImage((prevIndex) => (prevIndex - 1 + heroProducts.length) % heroProducts.length);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.image} onClick={() => openLightbox(selectedImage)}>
            <img src={heroProducts[selectedImage].image} alt="img1" />
          </div>
          <div className={classes.thumbnell}>
            {heroProducts.map((product, index) => (
              <img
                key={index}
                src={product.image}
                alt={`Product ${index + 1}`}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
        <div className={"flex flex-col self-center w-2/5 gap-3"}>
          <Info name="Fall Limited Edition Sneakers" />
          <div className={classes["btn-container"]}>
            <div className={classes.divButton}>
              <button onClick={handleClick2}>-</button>
              <span>{counter}</span>
              <button onClick={handleClick1}>+</button>
            </div>
            <div className={classes.cartButton}>
              <button onClick={addItem}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className={`${classes.lightbox} fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75`}>
          <div className="max-w-screen-lg w-full relative">
            <button
              className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl cursor-pointer"
              style={{color:"red", fontSize:30, left:-50, top:430}}
              onClick={prevImage}
            >
              &#9664;
            </button>
            <button
              className="absolute top-4 right-1/2 transform translate-x-1/2 text-white text-xl cursor-pointer"
              style={{color:"red", fontSize:30, right:-50, top:400}}
              onClick={nextImage}
            >
              &#9654;
            </button>
            <button
              className="absolute top-4 right-12 text-white text-xl cursor-pointer"
              style={{fontSize:40, right:-50, top:100}}
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={heroProducts[selectedImage].image}
              alt={`Product Image ${selectedImage + 1}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
