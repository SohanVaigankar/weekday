import { Box, Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

// components
import Filter from "../filter/Filter";
// utils & static data
import {
  ROLES,
  NUMBER_OF_EMPLOYEES_OPTIONS,
  EXPERIENCE_OPTIONS,
  MODE_OPTIONS,
  MIN_SALARY_OPTIONS,
} from "../../utils/constants";
import { APPLY_FILTERS } from "../../redux/action.types";

const FilterGroup = () => {
  const dispatch = useDispatch();

  const handleApplyFilter = (filterName, value) => {
    dispatch({
        type: APPLY_FILTERS,
        payload: { filterName, value },
      });
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2, marginTop: 1, padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Filter
            options={ROLES}
            placeholder="role"
            label="Roles"
            onChange={handleApplyFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Filter
            options={NUMBER_OF_EMPLOYEES_OPTIONS}
            placeholder="numberOfEmployees"
            label="Number of Employees"
            onChange={handleApplyFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Filter
            options={EXPERIENCE_OPTIONS}
            placeholder="experience"
            label="Experience"
            onChange={handleApplyFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Filter
            options={MODE_OPTIONS}
            placeholder="mode"
            label="Mode"
            onChange={handleApplyFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Filter
            options={MIN_SALARY_OPTIONS}
            placeholder="minimumSalary"
            label="Minimum Base Pay Salary"
            onChange={handleApplyFilter}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TextField
            fullWidth
            id="companyName"
            label="Search Company Name"
            variant="outlined"
            onChange={(event) => {
              handleApplyFilter("companyName", event.target.value);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterGroup;
