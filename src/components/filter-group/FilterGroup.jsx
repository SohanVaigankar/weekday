import { Box, Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { APPLY_FILTERS } from "../../redux/action.types";

// components
import MultiSelect from "../multiselect/MultiSelect";
// utils & static data
import {
  ROLES,
  NUMBER_OF_EMPLOYEES_OPTIONS,
  EXPERIENCE_OPTIONS,
  MODE_OPTIONS,
  MIN_SALARY_OPTIONS,
} from "../../utils/constants";

const FilterGroup = () => {
  const dispatch = useDispatch();

  // updating state of filters based on applied filters
  const handleApplyFilter = (filterName, value) => {
    dispatch({
      type: APPLY_FILTERS,
      payload: { filterName, value },
    });
  };

  const filters = {
    roles: {
      options: ROLES,
      placeholder: "role",
      label: "Roles",
      onChange: handleApplyFilter,
    },
    employees: {
      options: NUMBER_OF_EMPLOYEES_OPTIONS,
      placeholder: "numberOfEmployees",
      label: "Number of Employees",
      onChange: handleApplyFilter,
    },
    experience: {
      options: EXPERIENCE_OPTIONS,
      placeholder: "experience",
      label: "Experience",
      onChange: handleApplyFilter,
    },
    mode: {
      options: MODE_OPTIONS,
      placeholder: "mode",
      label: "Mode",
      onChange: handleApplyFilter,
    },
    minSalary: {
      options: MIN_SALARY_OPTIONS,
      placeholder: "minimumSalary",
      label: "Minimum Base Pay Salary",
      onChange: handleApplyFilter,
    },
    companyName: {
      id: "companyName",
      label: "Search Company Name",
      onChange: (e) => {
        handleApplyFilter("companyName", e.target.value);
      },
    },
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2, marginTop: 1, padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {/* Roles filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect {...filters.roles} />
        </Grid>
        {/* no. of employee filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect {...filters.employees} />
        </Grid>
        {/* experience filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect {...filters.experience} />
        </Grid>
        {/* location filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect {...filters.mode} />
        </Grid>
        {/* minimum salary filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <MultiSelect {...filters.minSalary} />
        </Grid>
        {/* company name search filter */}
        <Grid item xs={12} sm="auto" sx={{ minWidth: "280px" }}>
          <TextField fullWidth variant="outlined" {...filters.companyName} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterGroup;
