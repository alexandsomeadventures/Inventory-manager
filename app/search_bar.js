import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'
import {useRef} from 'react'
import "@/app/page"
export default function CustomizedInputBase({ onSearch }) {
  const inputRef = useRef(null);
  const handleSearch = () => {
    const searchValue = inputRef.current.value;
    onSearch(searchValue)
  };
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Items in Store"
        inputProps={{ 'aria-label': 'search items in store' }}
        inputRef={inputRef}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search"  onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
