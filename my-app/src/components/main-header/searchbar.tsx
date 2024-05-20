import Image from 'next/image'
import lupaIcon from '../../assets/icon/search-blue_desk.svg'
import classes from './searchbar.module.css'
const SearchBar = () => {
    return (
        <div className={ classes.searchWrapper }>
            <input type="text" placeholder="Procurar" className={ classes.searchBar } aria-label="Search input" />
            <Image src={ lupaIcon } className={ classes.lupaIcon } alt="Search icon" />
        </div>
    )
}

export default SearchBar
