const initialState = [];

export default function playlist (state = initialState, action) {
  switch (action.type) {
    case "ADD_PlAYLIST": {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
