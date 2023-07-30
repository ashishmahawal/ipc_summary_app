import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const lang = [
  {
    value: "english",
    label: "english",
  },
  {
    value: "hindi",
    label: "hindi",
  },
];

export default function SelectTextFields() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      id='lang-container'
    >
      <div>
        <TextField
          id="lang"
          select
          label="Language"
          defaultValue="EUR"
          SelectProps={{
            native: true,
          }}
        >
          {lang.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
