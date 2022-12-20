import Link from "./Link";

function NavigationBar() {
  const pages = [
    { label: "Subscribe", path: "/subscribe" },
    { label: "Pricing", path: "/pricing" },
  ];

  const renderedPages = pages.map((page) => (
    <Link className="hover:bg-red-300" path={page.path}>
      {page.label}
    </Link>
  ));

  return (
    <div className="h-10 flex items-center justify-around bg-red-600 text-white">
      {renderedPages}
    </div>
  );
}

export default NavigationBar;
