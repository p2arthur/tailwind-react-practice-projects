import { GoCheck } from "react-icons/go";
import Link from "./Link";

function PricingCard({
  plan,
  capacity,
  price,
  feature1,
  feature2,
  feature3,
  className,
}) {
  return (
    <div
      className={`bg-slate-700 rounded-xl text-white ${className} hover:scale-110 transition-all hover:shadow-xl hover:z-10`}
    >
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
        <div className="text-center uppercase">{plan}</div>
        <h2 className="mt-10 font-serif text-5xl text-center">{capacity}</h2>
        <h3 className="mt-2 text-center">${price}/Month</h3>
        <div className="flex justify-center">
          <a
            href="#somewhere"
            className={`inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg hover:bg-violet-800 transition-all hover:border-violet-800 hover:shadow-xl ${className}`}
          >
            Purchase
          </a>
        </div>
      </div>
      <div className="p-8 mx-3 mb-3 rounded-b-xl border-t border-slate-700 bg-slate-800 ">
        <ul className="flex flex-col space-y-2 items-center justify-center">
          <li className="flex justify-center items-center">
            <GoCheck />
            <span className="text-sm ml-1">{feature1}</span>
          </li>
          <li className="flex justify-center">
            <GoCheck />
            <span className="text-sm ml-1">{feature2}</span>
          </li>
          <li className="flex justify-center">
            <GoCheck />
            <span className="text-sm ml-1">{feature3}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PricingCard;
