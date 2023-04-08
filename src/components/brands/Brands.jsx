import { React, useEffect, useState } from "react";
import LogNavbar from "../logged/LogNavbar";
import BrandCard from "../brands/BrandCard";
import Footer from "../partials/Footer";
import ReactPaginate from "react-paginate";
import brandsService from "../../services/BrandService";
import userService from "../../services/UserService";
import Select from "react-select";

import "../../react-paginate.css";

export default function Brands(props) {
  const [brands, setBrands] = useState();

  const [totals, setTotals] = useState();
  const [perPage, setPerPage] = useState(15);
  const [page, setPage] = useState(1);
  const [username, setUsername] = useState("");

  const [brandName, setBrandName] = useState("");
  // console.log(brandName);
  const brandNames = brands?.map((brand) => brand.name);
  const transformedBrandNames = brandNames?.map((name) => ({
    value: name,
    label: name,
  }));

  const [tempBrandName, setTempBrandName] = useState("");
  // console.log(tempBrandName);

  const [id, setId] = useState(null);

  const handleBrandName = (options) => {
    setTempBrandName(options);
  };

  

  const handlePageClick = (brands) => {
    setPage(brands.selected + 1);
  };

  useEffect(() => {
    brandsService
      .getBrands()
      .then((res) => {
        // console.log(res);
        setBrands(res);
        setTotals(res.length);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div className="bg-gray-200">
        <LogNavbar />
        <h1 className="text-black text-center text-3xl font-semibold pt-10">
          Search your Favorite Restaurant
        </h1>
        <div className="md:px-20 px-10 py-10">
          <div class="form-group">
            <Select
              value={brandName}
              isMulti={false}
              options={transformedBrandNames}
              closeMenuOnSelect={true}
              onChange={handleBrandName}
            />
          </div>
        </div>
        <div className="px-30 py-10">
          {brands
            ?.slice((page - 1) * perPage, page * perPage)
            .map((brand, index, { length }) => {
              return (
                <>
                  <BrandCard brand={brand} />
                </>
              );
            })}
        </div>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={Math.ceil(brands?.length / perPage)}
          pageRangeDisplayed={4}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="pagination text-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
        <div className="row text-center mx-auto py-4">
          <div className="col-12 ">
            <h5>
              Total: {brands?.length} Showing {(page - 1) * perPage + 1} to{" "}
              {page * perPage}
            </h5>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
