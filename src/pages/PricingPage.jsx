import PricingCard from "../components/PricingCard";

const data = [
  {
    plan: "Basic",
    capacity: "100GB",
    price: "1.99",
    feature1: "100 GB of storage",
    feature2: "Option to add members",
    feature3: "Extra member benefits",
  },
  {
    plan: "Standard",
    capacity: "200GB",
    price: "3.99",
    feature1: "200 GB of storage",
    feature2: "Option to add members",
    feature3: "Extra member benefits",
    featured: true,
  },

  {
    plan: "Premium",
    capacity: "2TB",
    price: "8.99",
    feature1: "2 TB of storage",
    feature2: "Option to add members",
    feature3: "Extra member benefits",
  },
];

const featuredClassName = "bg-violet-500 scale-105";

function PricingPage() {
  const renderedCards = data.map((card) => {
    return (
      <PricingCard
        className={card.featured ? featuredClassName : null}
        key={card.plan}
        plan={card.plan}
        capacity={card.capacity}
        price={card.price}
        feature1={card.feature1}
        feature2={card.feature2}
        feature3={card.feature3}
      />
    );
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-10 md:space-y-0 md:flex-row md:space-x-10 mt-36">
        {renderedCards}
      </div>
    </div>
  );
}

export default PricingPage;
