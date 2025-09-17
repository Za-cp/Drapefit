import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className="headerSearch d-flex align-items-center">
            {/* Camera Search Icon */}
            <div className="imgsearch-cam button-search search-mag-icon">
                <img 
                    src="//shop.simon.com/cdn/shop/t/552/assets/Camera.svg?v=10213076253632790521738165885" 
                    alt="Camera Search"
                />
            </div>

            {/* Search Input */}
            <input type="text" className="search-input" placeholder="Search " />

            {/* Search Button */}
            <Button className="search-btn">
                <IoSearch />
            </Button>
        </div>
    );
};

export default SearchBox;
