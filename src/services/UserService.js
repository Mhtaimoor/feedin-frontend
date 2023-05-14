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
      // console.log({ username, password });
      this.post("users/login", { username, password })
        .then((data) => {
          console.log(data);
          localStorage.setItem("FeedInnUserToken", data.token);
          resolve(data.token);
        })
        .catch((err) => {
          console.log("Error");
          reject(err);
        });
    });

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

  logout = () => {
    localStorage.removeItem("FeedInnUserToken");
  };

  getCurrentUser = () => {
    try {
      const token = localStorage.getItem("FeedInnUserToken");
      const user = jwtDecode(token);
      return user;
    } catch (ex) {
      return null;
    }
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
