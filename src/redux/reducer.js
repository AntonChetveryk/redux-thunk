const initialState = {
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return state;
    case "GET_USERS": {
      return {
        users: [...action.payload],
      };
    }
    default:
      return state;
  }
};
