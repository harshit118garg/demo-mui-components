import React from "react";
import { Checkbox,FormControlLabel } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CheckBox = () => {
  return <>
    <h2>Checkbox</h2>
    <Checkbox />
    <Checkbox checked />
    <Checkbox checked={true} color='error' />
    <Checkbox defaultChecked color='secondary' indeterminate />
    <Checkbox icon={<FavoriteIcon />} />
    <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />
    <Checkbox onChange={() => alert(`checked`)} />
    <FormControlLabel control={<Checkbox color='success' />} label='India' labelPlacement="bottom" />
  </>;
};

export default CheckBox;
