import React from 'react'
import style from './search.module.css';
import  TextField  from '@mui/material/Textfield';
import SearchIcon from '@mui/icons-material/Search';
const SearchMobile = () => {
  return (
    <div className={style.search}>
      
          <TextField 
             className={style.searchs}
             id="outlined-search"
             label="Search"
             type="search" />

             <SearchIcon className={style.icon}/>
             
    </div>
  )
}

export default SearchMobile