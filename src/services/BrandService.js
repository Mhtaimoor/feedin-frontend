import GenericService from "./GenericService";
// import jwtDecode from "jwt-decode";
class BrandService extends GenericService {
  constructor() {
    super();
  }

  getBrands = () =>
    new Promise((resolve, reject) => {
      this.get("/brands/")
        .then((data) => {
          // console.log(data);
          resolve(data);
        })
        .catch((err) => {
          console.log("error");
          reject(err);
        });
    });
  getSingleBrand = (name) =>
    new Promise((resolve, reject) => {
      this.get("/brands/" + name)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

let brandsService = new BrandService();
export default brandsService;
