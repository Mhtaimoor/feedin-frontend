import React, { useState } from "react";
import userImage from "../../assets/user.png";
import userService from "../../services/UserService";
// import { useLocation, useNavigate } from "react-router-dom";
import { success } from "../../utils/notification";

export default function Info({ user }) {
  // console.log(user.name);

  const [showEditDialog, setShowEditDialog] = useState(false);
  const [newName, setNewName] = useState(user.name);
  // console.log(newName);
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);

  const [editImage, setEditImage] = useState("");
  const [image, setImage] = useState("");

  // const [editImage, setEditImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const userData = userService.getCurrentUser();

  const handleDialogClose = () => {
    setShowEditDialog(false);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.name === "image") {
      const selectedFile = e.target.files[0];
      setEditImage(selectedFile);
      setImage(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setImagePreview(objectUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    userService
      .updateUser(userData.id, {
        newName,
        editImage,
        newUsername,
        newEmail,
      })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          success("updated");
          if (typeof window !== "undefined") {
            window.location.reload(); // Reload the page after 3 seconds
          }
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="bg-gray-100 w-full sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Details and Informations about user.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Username</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.username}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div className="mt-2 p-5">
              <h3 className="font-medium text-gray-600">
                Want to change details?
              </h3>
              <button
                className="px-5 py-2 rounded-lg mt-2 text-md bg-purple-700 hover:bg-purple-800 text-white"
                onClick={(e) => setShowEditDialog(true)}
              >
                Edit
              </button>
            </div>
          </dl>
        </div>
      </div>
      {showEditDialog && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-10 md:w-1/2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Edit User Information
            </h3>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    className="mx-auto w-48 h-48 object-contain"
                    alt="Logo Preview"
                  />
                ) : (
                  <img
                    className="mx-auto rounded-full h-36 w-36"
                    src={userImage}
                    alt="UserImage"
                  />
                )}
                <div className="flex justify-center">
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer p-2 bg-gray-200 hover:bg-gray-300 rounded-md font-medium text-indigo-700 hover:text-indigo-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span className="px-1">Upload Image</span>
                    <input
                      id="image"
                      name="image"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newName}
                  placeholder={user.name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="mt-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={newUsername}
                  placeholder={user.username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={newEmail}
                  placeholder={user.email}
                  onChange={handleEmailChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  // onClick={handleSaveClick}
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save
                </button>
                <button
                  onClick={handleDialogClose}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
