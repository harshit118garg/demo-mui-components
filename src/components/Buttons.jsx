import React from 'react';
import { Button, IconButton, ButtonGroup, Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";

const Buttons = () => {
  return (
    <>
      <h2>Text Buttons</h2>
     <Button>Click Me</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success" href="https://google.com">
      Link
    </Button>
    <Button disabled>Disabled</Button>

    <br />

    <h2>Contained Buttons</h2>
    <Button variant="contained" color="secondary">
      Click Me
    </Button>
    <Button variant="contained" color="warning">
      Click Me
    </Button>
    <Button variant="contained" color="error" href="https://google.com">
      Link
    </Button>
    <Button variant="contained" color="error" disabled>
      Disabled
    </Button>

    <br />

    <h2>Outlined Buttons</h2>
    <Button variant="outlined" color="secondary">
      Click Me
    </Button>
    <Button variant="outlined" color="warning">
      Click Me
    </Button>
    <Button variant="outlined" color="error" href="https://google.com">
      Link
    </Button>
    <Button variant="outlined" color="error" disabled>
      Disabled
    </Button>

    <br />

    <h2>Button Size</h2>
    <Button variant="contained" color="secondary" size="small">
      Small
    </Button>
    <Button variant="contained" color="warning" size="medium">
      Medium
    </Button>
    <Button variant="contained" color="error" size="large">
      Large
    </Button>

    <br />

    <h2>Button and Icons</h2>
    <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
      Delete
    </Button>
    <Button variant="contained" color="success" endIcon={<DoneRoundedIcon />}>
      Delete
    </Button>

    <br />

    <h2>Icon Button</h2>
    <IconButton color="error">
      <DeleteIcon />
    </IconButton>

    <br />

    <h2>Custom Button</h2>
    <Button variant="contained" style={{ backgroundColor: "brown" }}>
      Custom Button 1
    </Button>
    <Button variant="contained" sx={{ backgroundColor: "#4C0027" }}>
      Custom Button 2
    </Button>

    <br />

    <h2>Button with handle Click</h2>
    <Button variant="contained" onClick={() => alert(`button is clicked`)}>
      Click Me
    </Button>

    <br />

    <h2>Button Group (Horizontal) </h2>
    <ButtonGroup variant="contained" color="warning">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <br />

    <h2>Button Group (Vertical) </h2>
    <ButtonGroup variant="contained" color="warning" orientation="vertical">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <br />

    <h2>Floating Action Button (Fab) </h2>
    <Fab color="secondary">
      <CreateTwoToneIcon />
    </Fab>
    <Fab color="primary" variant="extended" >
      <DeleteIcon />Delete
    </Fab> 
    </>
  )
}

export default Buttons