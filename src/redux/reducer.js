const initialState = {
  users: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USERS":
      return {
        users: [
          ...state.users,
          {
            name: action.payload.name,
            username: action.payload.username,
            avatar: action.payload.avatar,
          },
        ],
      };
    case "GET_USERS": {
      return {
        users: [...action.payload],
      };
    }
    default:
      return state;
  }
};
