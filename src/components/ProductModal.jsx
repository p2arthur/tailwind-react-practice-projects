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
        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
          <div>
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
              <button className="w-full border-b-4 text-white border-b-blue-700 bg-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 bg-blue-500 rounded-lg">{cta}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductModal;
