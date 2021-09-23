import { createContext, useState } from "react";


export const TopicsContext = createContext();

const TopicsProvider = (props) => {

    const [search, setSearch] = useState('react');

    return(
        <TopicsContext.Provider
            value={{
                search,
                setSearch
            }}
        >
            {props.children}
        </TopicsContext.Provider>
    );
}

export default TopicsProvider;