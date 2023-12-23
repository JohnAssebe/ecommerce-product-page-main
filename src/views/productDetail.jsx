import { useState } from "react";
import mainImages from "../utils/imageExporter";
import { thumbnailImages } from "../utils/imageExporter";
const ProductDetail = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="w-full">
      <section className="max-w-[1200px] mx-auto px-2 flex items-center justify-center mt-8">
        <div className="flex flex-col flex-wrap items-center justify-center gap-6 px-3 basis-1/2">
          <div className="w-[26rem] h-96 rounded-2xl bg-orange">
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
        <div className="basis-1/2"></div>
      </section>
    </div>
  );
};

export default ProductDetail;
