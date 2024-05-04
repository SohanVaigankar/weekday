import { APPLY_FILTERS } from "./action.types";

const initialState = {
  role: [],
  numberOfEmployees: [],
  experience: [],
  mode: [],
  minimumSalary: [],
  companyName: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_FILTERS:
      const { filterName, value } = action.payload;
      return {
        ...state,
        [filterName]: value,
      };
    default:
      return state;
  }
};

export default filtersReducer;
