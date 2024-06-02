import Breadcrumbs from "../breadcumbs/Breadcumbs";

const crumbs = [
  { href: "/", label: "Home" },
  { href: "/compare", label: "Compare" },
];

const Compare = () => {
  return (
    <>
      <div className="bg-[#f7f8fb]">
        <div className="max-w-screen-xl mx-auto">
          <div className="container mx-auto">
            <div className="px-7 py-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Compare</h1>
                <Breadcrumbs crumbs={crumbs} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto"></div>
      </section>
    </>
  );
};

export default Compare;
