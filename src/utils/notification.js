import Swal from "sweetalert2";

export const success = (message) => {
  Swal.fire({
    title: `${message}!`,
    text: `Your data has been ${message.toLowerCase()}`,
    icon: "success",
    confirmButtonColor: "#000000",
  });
};

export const loginSuccess = () => {
  Swal.fire({
    title: `Success!`,
    text: `Login Successfully`,
    icon: "success",
    confirmButtonColor: "#000000",
  });
};

export const signupSuccess = () => {
  Swal.fire({
    title: `Success!`,
    text: `Registered Successfully`,
    icon: "success",
    confirmButtonColor: "#000000",
  });
};

export const warning = (message) => {
  Swal.fire({
    title: "Warning!",
    text: message,
    icon: "warning",
    confirmButtonColor: "#000000",
  });
};

export const failure = (message) => {
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "error",
    confirmButtonColor: "#000000",
  });
};

export const confirmation = () =>
  Swal.fire({
    title: "Are you sure?",
    text: "You want to delete?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#000000",
    cancelButtonColor: "#d33",
    confirmButtonText: "Delete",
  });

export const confirmationCompleteTodo = () =>
  Swal.fire({
    title: "Is the Task Complete?",
    text: "Do you really want to mark it as complete?",
    icon: "success",
    showCancelButton: true,
    confirmButtonColor: "#000000",
    cancelButtonColor: "#d33",
    confirmButtonText: "Complete",
  });
