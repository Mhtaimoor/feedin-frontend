import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  signup = ({ name, username, email, password }) =>
    new Promise((resolve, reject) => {
      this.post("users/register", { name, username, email, password })
        .then((data) => {
          resolve(data);
          localStorage.setItem("FeedInnUserToken", data.token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  login = ({ username, password }) =>
    new Promise((resolve, reject) => {
      this.post("users/login", { username, password })
        .then((data) => {
          console.log(data); // Check the received data object
          console.log(data.userToken); // Verify the token value
          localStorage.setItem("FeedInnUserToken", data.userToken);
          resolve(data.token);
        })
        .catch((err) => {
          console.log("Error");
          reject(err);
        });
    });

  getCurrentUser = () => {
    try {
      const token = localStorage.getItem("FeedInnUserToken");
      // Modify the code here to extract user information from the token
      const user = jwtDecode(token);
      return user;
    } catch (ex) {
      return null;
    }
  };

  getProfile = (id) =>
    new Promise((resolve, reject) => {
      // console.log(id);
      this.get("users/profile/" + id)
        .then((data) => {
          // console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
          console.log("error");
        });
    });

  createReward = (id) =>
    new Promise((resolve, reject) => {
      // console.log(id);
      this.post("rewards/" + id)
        .then((data) => {
          // console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
          console.log("error");
        });
    });

  getRewards = (id) =>
    new Promise((resolve, reject) => {
      // console.log(id);
      this.get("rewards/" + id)
        .then((data) => {
          // console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
          console.log("error");
        });
    });

  logout = () => {
    localStorage.removeItem("FeedInnUserToken");
  };

  getUsers = () =>
    new Promise((resolve, reject) => {
      this.get("/users")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  deleteUser = (id) =>
    new Promise((resolve, reject) => {
      this.delete("/users/" + id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  updateUser = (id, { newName, editImage, newUsername, newEmail }) =>
    new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("editImage", editImage);
      formData.append("name", newName);
      formData.append("username", newUsername);
      formData.append("email", newEmail);

      this.put("/users/" + id, formData)
        .then((data) => {
          console.log(data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  forgetPassword = ({ email }) =>
    new Promise((resolve, reject) => {
      this.post("/users/forget", { email })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  resetPassword = ({ newPassword, resetPasswordLink }) =>
    new Promise((resolve, reject) => {
      this.put("/users/reset", { newPassword, resetPasswordLink })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
}

let userService = new UserService();
export default userService;
