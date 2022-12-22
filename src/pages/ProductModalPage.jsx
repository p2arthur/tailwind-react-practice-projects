import ProductModal from "../components/ProductModal";

function ProductModalPage() {
  const cardData = {
    image: "src/assets/headphone.png",
    feature: "Free Shipping",
    title: "Razer Kraken Kitty Edt Gaming Headset Quartz",
    oldPrice: "$799",
    newPrice: "$599",
    disclaimer: "This offer is valid until April 3rd or as stock lasts!",
    cta: "Add to cart",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <ProductModal data={cardData} />
    </div>
  );
}
export default ProductModalPage;
