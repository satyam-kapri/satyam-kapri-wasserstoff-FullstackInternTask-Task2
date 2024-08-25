import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function SelectFilter({filters,filtername,setFilters,reset,setReset}) {
  
  // selected fields (default all are selected)
  const [selectedName, setselectedName] = React.useState(filters?Object.keys(filters[filtername]):[]);
  const [names,setname]=React.useState(filters?Object.keys(filters[filtername]):[]);

  // reset all to selected
  React.useEffect(()=>{
    if(reset===true){
    setselectedName((Object.keys(filters[filtername])));
    setReset(false);
  }
  },[reset]);


   //  add to selected
  const handleChange = (event) => {
    const {target: { value },} = event;
    setselectedName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  // set filter on checkbox click
  const handleCheckbox=(v)=>{
    let f=filters;
    f[filtername][v]=f[filtername][v]===1?0:1;
    setFilters(f);
  }
  return (
    <div>
      <FormControl sx={{ color:'white'}} fullWidth size='small'>
        <InputLabel id="demo-multiple-checkbox-label">{filtername}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedName}
          onChange={handleChange}
          input={<OutlinedInput label="Topic" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          sx={{fontSize:'14px'}}
          size="small"
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} size="small" sx={{height:'20px',marginY:'2px',}}>
              <Checkbox checked={selectedName.indexOf(name) > -1} onChange={()=>{handleCheckbox(name)}}/>
              <ListItemText primary={name}  />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
