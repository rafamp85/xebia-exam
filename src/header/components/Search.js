import { useContext } from "react";
import { PropTypes } from 'prop-types';

import { TopicsContext } from "../../context/TopicsContext";


const Search = () => {

    const { search, setSearch } = useContext(TopicsContext);

    const handleChangeSearch = e => {
        setSearch( e.target.value );
    }

    return ( 
        <form>
            <div className="input-field col s6">
                <input 
                    type="text"
                    name="searchTopic"
                    id="searchTopic"
                    value={search}
                    onChange={handleChangeSearch}
                />
                <label htmlFor="searchTopic">Search</label>
            </div>
        </form>
     );
}
 
export default Search;

Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func
}

Search.defaultProps = {
    search: 'react',
}