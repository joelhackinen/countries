/*
import { ICountry } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { useState } from "react";


const Country = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const countries = useAppSelector(state => state.countries);
  const country = countries.find(c => c.id === id)

  if (!country) {
    navigate("/");
    return;
  }

  const { flag, name, region, population, languages} = country;

  return (
    <tr>
      <td><img src={flag.svg} height='100' alt={flag.alt}/></td>
      <td>{name}</td>
      <td>{region}</td>
      <td>{population}</td>
      <td>
        {languages && "languages"}
        {languages && 
          <ul>
            {Object.values(languages).map(l => <li key={l}>{l}</li>)}
          </ul>
        }
      </td>
      <td><button>Show Details</button></td>
    </tr>
  );
};
*/

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from '../hooks';
import { ICountry } from '../types';

const style = {
  // eslint-disable-next-line
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Country = () => {
  
  const { nameParam } = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const countries = useAppSelector(state => state.countries);
  const country = countries.find(c => c.name.common === nameParam) as ICountry; // safe because errorElement defined in router

  const { flag, name, region, population, coordinates } = country;

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name.official} <img src={flag.svg} height='20' alt={flag.alt}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {name.common} belongs to {region.region} region and {region.subregion} subregion.<br/>
            Located at the {Math.abs(coordinates.lat)} {coordinates.lat >= 0 ? "N" : "S"} and {Math.abs(coordinates.lng)} {coordinates.lat >= 0 ? "W" : "E"},
            this country has a population of {population}.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Country;