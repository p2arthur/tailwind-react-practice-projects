function ProductModal() {
  return (
    <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
      <div>
        <img
          src="src/assets/headphone.png"
          alt=""
          className="mx-auto hover:scale-105 duration-200 w-60"
        />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
          <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
            Free Shipping
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductModal;
