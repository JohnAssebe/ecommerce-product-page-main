/*eslint-disable*/
import { useProductStore } from "../store/productStore";
import DeleteIcon from "../assets/images/icon-delete.svg";
import { thumbnailImages } from "../utils/imageExporter";

const CartNotification = ({ toggle }) => {
  const products = useProductStore((state) => state.products);
  const totalPrice = useProductStore((state) => state.totalPrice);
  const store = useProductStore();
  return (
    <div className="relative z-50 px-4 py-3 rounded-lg shadow-2xl font-kumbhSans min-w-[300px] bg-white">
      <h4 className="py-4 text-2xl font-bold border-b">Cart</h4>
      {products == 0 ? (
        <div className="flex items-center justify-center py-12 font-bold text-slate-600">
          Your Cart is empty !
        </div>
      ) : (
        <section>
          <div className="flex items-center justify-center w-full gap-4 py-5">
            <div className="w-24 h-16 rounded-md bg-orange">
              <img
                src={thumbnailImages[0]}
                alt="product"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="text-slate-400">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125 X {products}{" "}
                <span className="font-bold text-black">${totalPrice}</span>
              </p>
            </div>
            <img
              src={DeleteIcon}
              alt="remove product"
              onClick={() => {
                store.removeProducts();
                store.updateTotalPrice();
              }}
            />
          </div>
          <button
            className="w-full py-3 font-bold text-center text-white bg-orange rounded-xl"
            onClick={() => toggle()}
          >
            Checkout
          </button>
        </section>
      )}
    </div>
  );
};

export default CartNotification;
