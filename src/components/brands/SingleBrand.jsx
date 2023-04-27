import React, { useEffect, useState } from "react";
import LogNavbar from "../logged/LogNavbar";
import { useNavigate, useParams } from "react-router-dom";
import restaurant from "../../assets/restaurant.png";
import brandService from "../../services/BrandService";

export default function SingleBrand() {
  let { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [brand, setBrand] = useState();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    brandService
      .getSingleBrand(id)
      .then((res) => {
        console.log(res);
        setBrand(res);
        setReviews(res.reviews);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="Navbar">
        <LogNavbar />
      </div>
      <div className="p-10 px-16 ">
        <div className="bg-gray-100 p-10 rounded-lg flex">
          <div className="w-72 h-72">
            <img
              src={brand?.image ? brand.image : restaurant}
              className="rounded-3xl object-fill"
              alt=""
            />
          </div>
          <h3 className="text-2xl font-semibold py-5">{brand?.name}</h3>
        </div>
      </div>
    </>
  );
}
