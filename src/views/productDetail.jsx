import { useState } from "react";
import mainImages from "../utils/imageExporter";
import { thumbnailImages } from "../utils/imageExporter";
const ProductDetail = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="w-full">
      <section className="max-w-[1200px] mx-auto px-2 flex items-center justify-center mt-8">
        <div className="flex flex-col flex-wrap items-center justify-center gap-6 px-3 basis-1/2">
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
        <div className="flex items-center justify-start basis-1/2 font-kumbhSans">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
