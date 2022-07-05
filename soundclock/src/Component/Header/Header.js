import Button from '@mui/material/Button';
import ModalLogin from './Modal/ModalLogin';
import SearchBar from './SearchBar/SearchBar';
import './Header.scss';



const Header = () => {
    return (
        <div className="Header">
            <Button className="Home__Button">Home</Button>
            <SearchBar/>
            <ModalLogin/>
        </div>
    )
}

export default Header;