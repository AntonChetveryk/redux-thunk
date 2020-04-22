export const fetchUsers = () => (dispatch) => {
  fetch("http://77.120.108.119:9999/users/")
    .then((res) => res.json())
    .then((res) => {
      dispatch(getUsers(res.data));
    });
};

export const updateUsers = (payload) => {
  return { type: "UPDATE_USERS", payload };
};

export const getUsers = (payload) => {
  return { type: "GET_USERS", payload };
};
