import { useState } from "react";
import mainImages from "../utils/imageExporter";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import prevIcon from "../assets/images/icon-previous.svg";
import nextIcon from "../assets/images/icon-next.svg";

import { thumbnailImages } from "../utils/imageExporter";
const ProductDetail = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [slideCounter, setSlideCounter] = useState(0);
  const [countProduct, setCountProduct] = useState(1);
  const increaseCounter = () => setCountProduct((count) => (count += 1));
  const decreaseCounter = () =>
    countProduct > 0 && setCountProduct((count) => (count -= 1));

  const nextSlide = () => setSlideCounter((count) => (count + 1) % 4);
  const prevSlide = () =>
    setSlideCounter((count) => (count - 1 > 0 ? count - 1 : count + 3) % 4);

  return (
    <div className="w-full">
      <section className="max-w-[1200px] mx-auto px-2 flex flex-col md:flex-row items-center justify-center md:mt-16 gap-8 md:gap-0">
        <div className="flex-col flex-wrap items-center justify-center hidden gap-6 px-3 md:flex md:basis-1/2">
          <div className="w-[24.5rem] h-96 rounded-2xl bg-orange">
            <img
              src={mainImages[imageIndex]}
              alt="product"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {thumbnailImages?.map((image, _) => (
              <div
                key={_}
                className={`w-20 h-20 rounded-lg cursor-pointer bg-slate-400 ${
                  _ == imageIndex && "border border-orange"
                }`}
                onClick={() => setImageIndex(_)}
              >
                <img
                  src={image}
                  className={`object-cover w-full h-full rounded-md ${
                    _ == imageIndex && "mix-blend-lighten"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full rounded-lg md:hidden bg-orange">
          <img
            src={mainImages[slideCounter]}
            alt="product"
            className="object-cover w-full rounded-md h-80 sm:h-[400px]"
          />
          <div
            className={`absolute flex items-center justify-center -translate-y-1/2 bg-white rounded-full w-10 h-10 left-4 top-1/2 `}
            onClick={prevSlide}
          >
            <img src={prevIcon} />
          </div>
          <div
            className="absolute flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-white rounded-full right-4 top-1/2"
            onClick={nextSlide}
          >
            <img src={nextIcon} />
          </div>
        </div>
        <div className="flex items-center justify-start md:basis-1/2 font-kumbhSans">
          <div className="flex flex-col items-start justify-center max-w-[400px] gap-4">
            <h4 className="font-bold uppercase text-orange">sneaker company</h4>
            <h2 className="text-4xl font-bold capitalize">
              fall limited edition sneakers
            </h2>
            <p className="py-3 text-sm leading-5 text-darkgrayishblue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durabble rubber outer sole,they&apos;ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-start justify-center gap-8 font-bold">
              <div>
                <h3 className="text-2xl">$125.00</h3>
                <h5 className="text-lg line-through text-grayishblue">
                  $250.00
                </h5>
              </div>
              <div className="px-2 py-1 rounded-lg bg-paleOrange">
                <p className="text-sm text-orange">50% off</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 py-4 md:flex-row">
              <div className="flex items-center justify-between px-4 py-2 rounded-lg w-36 bg-paleOrange">
                <img
                  src={minusIcon}
                  onClick={decreaseCounter}
                  className="cursor-pointer"
                  alt="minus"
                />
                <p>{countProduct}</p>
                <img
                  src={plusIcon}
                  onClick={increaseCounter}
                  className="cursor-pointer"
                  alt="plus"
                />
              </div>
              <div className="flex items-center justify-center gap-3 px-6 py-3 text-sm font-bold text-white rounded-lg shadow-xl bg-orange">
                <img src={cartIcon} alt="cart" className="w-4 h-4 fill-white" />
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
