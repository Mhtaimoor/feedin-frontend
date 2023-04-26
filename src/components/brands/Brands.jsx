import { React, useEffect, useState } from "react";
import LogNavbar from "../logged/LogNavbar";
import BrandCard from "../brands/BrandCard";
import Footer from "../partials/Footer";
import ReactPaginate from "react-paginate";
import brandsService from "../../services/BrandService";
import userService from "../../services/UserService";
import Select from "react-select";

import "../../react-paginate.css";
import Filter from "./Filters";

export default function Brands(props) {
  const [brands, setBrands] = useState([]);
  const [perPage, setPerPage] = useState(15);
  const [page, setPage] = useState(1);
  const [brandName, setBrandName] = useState(null);
  const [brandNames, setBrandNames] = useState();
  const [transformedBrandNames, setTransformedBrandNames] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [cuisinesStr, setCuisinesStr] = useState([]);

  // console.log(brandName);

  // console.log(cuisinesStr);

  useEffect(() => {
    brandsService
      .getBrands()
      .then((res) => {
        // console.log(res);
        setBrands(res);
        setBrandNames(res?.map((brand) => brand.name));
        setCuisines(res?.map((brand) => brand.cuisines));
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
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="bg-gray-200">
        <LogNavbar />

        <div className="md:px-20 px-10 py-2">
          <Filter
            transformedBrandNames={transformedBrandNames}
            cuisinesStr={cuisinesStr}
            brandNames={brandNames}
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
