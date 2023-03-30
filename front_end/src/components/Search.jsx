import React, { useRef } from 'react';

export default function Search({search}) {
    const searchKeyword = useRef();
    const type = useRef();

    const handleSearch = () => { 
        search(type.current.value, searchKeyword.current.value);

    }

    return (
        <div className="search">
            <select name="" id="" defaultValue={'scrumMaster'} ref={type}>
                <option value="scrumMaster">Scrum Master</option>
                <option value="Developer">Developer</option>
            </select>
            <input type="text" ref={searchKeyword} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

