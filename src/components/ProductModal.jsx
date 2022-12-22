import { FaBalanceScale, FaGrinHearts } from "react-icons/fa";

function ProductModal({ data }) {
  const { image, feature, title, oldPrice, newPrice, disclaimer, cta } = data;
  return (
    <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
      <div>
        <img
          src={image}
          alt=""
          className="mx-auto hover:scale-105 duration-200 w-60"
        />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col mb-4 space-y-2 text-center md:text-left">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
              {feature}
            </div>
            <div className="max-w-sm text-2xl font-medium">{title}</div>
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through">{oldPrice}</p>
              <p className="text-5xl font-bold">{newPrice}</p>
              <p className="text-small font-light text-gray-400">
                {disclaimer}
              </p>
            </div>
            <div className="group">
              <button className="w-full duration-150 transition-all border-b-8 text-white border-b-blue-700 bg-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700 duration-150">
                  {cta}
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="bg-green-500 w-3 h-3 rounded-full group-hover:animate-ping duration-75"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button className="flex max-h-15 items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-md hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <FaBalanceScale className="w-8" />
                <span>Add to cart</span>
              </button>
              <button className="flex items-center  justify-center py-3 px-2 space-x-3 border-2 border-gray-300 rounded-lg shadow-md hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <FaGrinHearts className="w-8 h-5" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductModal;
