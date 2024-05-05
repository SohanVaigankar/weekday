import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const MultiSelect = (props) => {
  const { options, placeholder, label, onChange } = props;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, newValue) => {
    setSelectedOptions(newValue);
    // calls the dispatch action for the filters state stored in redux
    onChange(
      placeholder,
      newValue.map((option) => option.value)
    );
  };

  return (
    <Autocomplete
      multiple
      id={`autocomplete-${label}`}
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.label}
        </li>
      )}
      style={{ width: "100%", marginRight: 0, marginLeft: 0 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          fullWidth
        />
      )}
    />
  );
};

export default MultiSelect;
