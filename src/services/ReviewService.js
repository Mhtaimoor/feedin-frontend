import GenericService from "./GenericService";
// import jwtDecode from "jwt-decode";
class ReviewService extends GenericService {
  getReviews = (userId) =>
    new Promise((resolve, reject) => {
      this.get(`/reviews/${userId}`)
        .then((data) => {
          // console.log(data);
          resolve(data);
        })
        .catch((err) => {
          console.error(err);
          reject(new Error("Server error"));
        });
    });

  createReview = (
    restaurantName,
    userId,
    reviewerName,
    ratingDate,
    reviewHeading,
    reviewText,
    reviewerEat,
    goesWith,
    rating
  ) =>
    new Promise((resolve, reject) => {
      if (!userId) {
        reject(new Error("userId is undefined"));
      }
      console.log({
        userId,
        reviewerName,
        ratingDate,
        reviewHeading,
        reviewText,
        reviewerEat,
        goesWith,
        rating,
      });
      this.post("/reviews/" + restaurantName, {
        userId,
        reviewerName,
        ratingDate,
        reviewHeading,
        reviewText,
        reviewerEat,
        goesWith,
        rating,
      })
        .then((response) => {
          console.log(response);
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
}

let reviewsService = new ReviewService();
export default reviewsService;
