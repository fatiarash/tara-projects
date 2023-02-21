import React from "react";

const teampDataCategory = [
  { title: "Popular" },
  { title: "Metaverse" },
  { title: "Entertainment" },
  { title: "Energy" },
  { title: "Gaming" },
  { title: "Music" },
  { title: "See All 12+" },
];

function Category() {
  return (
    <>
      {teampDataCategory?.map((item, index) => {
        return (
          <div
            key={`category${index}`}
            className={`rounded-md py-2.5 px-3 ${
              index === 0 ? "bg-silv" : "bg-primary"
            }`}
          >
            <p
              className={`text-md ${index === 0 ? "textpopular" : "text-gray"}`}
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Category;
