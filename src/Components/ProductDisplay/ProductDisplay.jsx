import React, { useContext,useState } from "react";
import classes from "./ProductDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Info from "../Hero/Info";
const ProductDisplay = (props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const openLightbox = (index) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };
  const nextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % product.relatedImage.length);
  };

  const prevImage = () => {
    setSelectedImage((prevIndex) => (prevIndex - 1 + product.relatedImage.length) % product.relatedImage.length);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(product.relatedImage[selectedImage]);
  };
 const handleClick1 = () => {
  // Counter state is incremented
  setCounter(counter + 1);
};
const addItem=(id)=>{
for (let i = 0; i < counter; i++) {
// Call function2 four times within the loop
addToCart(id);
}

}
// Function is called everytime decrement button is clicked
const handleClick2 = () => {
  // Counter state is decremented
  setCounter(counter - 1);
};
  const {product} = props;
  const [selectedImage, setSelectedImage] = useState(product.image);
  const {addToCart} = useContext(ShopContext);
  const handleImageClick = (image,index) => {
    setSelectedImage(image);
    openLightbox(index);

  };  
  return (
    <>   
    <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.image}>
            {<img src={selectedImage} alt="img1" 
            />}
          </div>
          <div className={classes.thumbnell}>
          {product.relatedImage.map((product, index) => (
         <img
            key={index}
            src={product}
            alt={`Product ${index + 1}`}
            onClick={() => handleImageClick(product,index)
            
            }

            className="cursor-pointer w-full h-40 object-cover"
          />))}
          </div>
        </div>
        <div className={classes.details}>
         <Info name = {product.name}/>
          <div className={classes["btn-container"]}>
            <div className={classes.divButton}>
              <button onClick={()=>{handleClick2()}}>-</button>
              <span>{counter}</span>
              <button onClick={()=>{handleClick1()}}>+</button>
            </div>
            <div className={classes.cartButton}>
              <button onClick={()=>{addItem(product.id)}} >Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-screen-lg w-full">
          <button
              className="absolute top-20 left-4 text-white text-xl cursor-pointer"
              style={{color: "red", top:300, left: 120, fontSize:30}}
              onClick={prevImage}
            >
              &#9664;
            </button>
            <button
              className="absolute top-20 right-4 text-white text-xl cursor-pointer next"
              style={{color: "red", top:300, right: 120, fontSize:30}}
              onClick={nextImage}
            >
              &#9654;
            </button>
            <button
              className="absolute top-4 right-12 text-white text-xl cursor-pointer"
              onClick={closeLightbox}
            >
              &times;
            </button>


            
            <img
              src={product.relatedImage[selectedImage]}
              alt={`Product Image ${selectedImage + 1}`}
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDisplay;
