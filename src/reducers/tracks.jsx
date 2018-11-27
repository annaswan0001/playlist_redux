const initialState = ["Smells like spirit", "Hello world"];

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case "ADD_TRACK": {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
