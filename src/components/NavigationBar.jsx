import Link from "./Link";

function NavigationBar() {
  const pages = [
    { label: "Subscribe", path: "/subscribe" },
    { label: "Pricing", path: "/pricing" },
    { label: "Product", path: "/product" },
    { label: "Gallery", path: "/gallery" },
  ];

  const renderedPages = pages.map((page) => (
    <Link key={page.label} className="hover:bg-blue-500  p-3" path={page.path}>
      {page.label}
    </Link>
  ));

  return (
    <div className="flex items-center justify-around bg-sky-500 text-white fixed w-full shadow-lg z-50">
      {renderedPages}
    </div>
  );
}

export default NavigationBar;
