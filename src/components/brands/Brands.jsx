import { React, useEffect, useState } from "react";
import LogNavbar from "../logged/LogNavbar";

import Footer from "../partials/Footer";

import brandsService from "../../services/BrandService";

import "../../react-paginate.css";
import Filter from "./Filters";

export default function Brands(props) {
  const [brands, setBrands] = useState([]);
  const [perPage] = useState(15);
  const [page] = useState(1);
  const [brandName] = useState(null);
  const [brandNames, setBrandNames] = useState();
  const [transformedBrandNames, setTransformedBrandNames] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [cuisinesStr, setCuisinesStr] = useState([]);

  useEffect(() => {
    brandsService
      .getBrands()
      .then((res) => {
        setBrands(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setBrandNames(brands?.map((brand) => brand.name));
    setCuisines(brands?.map((brand) => brand.cuisines));
  }, [brands]);

  useEffect(() => {
    setTransformedBrandNames(
      brandNames?.map((name) => ({
        value: name,
        label: name,
      }))
    );
    setCuisinesStr(
      [
        ...new Set(
          cuisines
            .join(",")
            .split(",")
            .map((word) => word.trim())
        ),
      ].join(", ")
    );
  }, [brandNames, cuisines]);

  // console.log(brands);
  // console.log(transformedBrandNames);
  // console.log(cuisinesStr);

  return (
    <>
      <div className="bg-gray-200">
        <LogNavbar />

        <div className="md:px-20 px-10 py-2">
          <Filter
            cuisinesStr={cuisinesStr}
            transformedBrandNames={transformedBrandNames}
            brandName={brandName}
            brands={brands}
            page={page}
            perPage={perPage}
          />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
