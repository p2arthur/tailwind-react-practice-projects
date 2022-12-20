import PricingCard from "../components/PricingCard";
function PricingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-10 md:space-y-0 md:flex-row md:space-x-10">
        <PricingCard
          plan="Basic"
          capacity="100GB"
          price="1.99"
          feature1="100 GB of storage"
          feature2="Option to add members"
          feature3="Extra member benefits"
        />
        <PricingCard
          className="bg-violet-700 scale-105 shadow-xl"
          plan="Standard"
          capacity="200GB"
          price="3.99"
          feature1="200 GB of storage"
          feature2="Option to add members"
          feature3="Extra member benefits"
        />
        <PricingCard
          plan="Premium"
          capacity="2TB"
          price="8.99"
          feature1="2 TB of storage"
          feature2="Option to add members"
          feature3="Extra member benefits"
        />
      </div>
    </div>
  );
}

export default PricingPage;
