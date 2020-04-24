const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return {
        users: [...action.payload],
      };
    }
    default:
      return state;
  }
};
