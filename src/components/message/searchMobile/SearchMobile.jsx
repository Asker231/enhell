import React from 'react'
import style from './search.module.css';

import SearchIcon from '@mui/icons-material/Search';
const SearchMobile = () => {
  return (
    <div className={style.search}>


<input type="text" className={style.searchs} />
          

             <SearchIcon className={style.icon}/>
             
    </div>
  )
}

export default SearchMobile