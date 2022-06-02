import { React } from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {

    return (
        <div>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...'  
                    value={searchQuery}
                    onInput={e => setSearchQuery(e.target.value)}
                />
                <i className='bx bx-search can-click'></i>
            </div>
        </div>
    )
}

export default SearchBar