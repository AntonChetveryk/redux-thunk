const Link = "http://77.120.108.119:9999/users/";

export const fetchUsers = () => (dispatch) => {
  fetch(Link)
    .then((res) => res.json())
    .then((res) => {
      dispatch(getUsers(res.data));
    });
};

export const addUser = (user) => {
  console.log("addUser");
  fetch(Link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ ...user }),
  });
};

export const getUsers = (payload) => {
  return { type: "GET_USERS", payload };
};
