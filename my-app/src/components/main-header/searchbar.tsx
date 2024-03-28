import Image from 'next/image';
import React from 'react';
import lupaIcon from '../../assets/icon/search-blue_desk.svg';	
import classes from './searchbar.module.css';
const SearchBar = () => {
    return (
        <div className={classes.searchWrapper}>
            <input type="text" placeholder="Procurar" className={classes.searchBar}/>
            <Image src={lupaIcon} className={classes.lupaIcon}/>
        </div>
    );
};

export default SearchBar;