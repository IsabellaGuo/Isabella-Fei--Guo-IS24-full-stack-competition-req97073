import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import './Search.css';

export default function Search({search}) {
    const searchKeyword = useRef();
    const type = useRef();

    const handleSearch = () => { 
        search(type.current.value, searchKeyword.current.value);

    }

    return (
        <div className="search">
            <select className="search-select" defaultValue={'scrumMaster'} ref={type}>
                <option value="scrumMaster">Scrum Master</option>
                <option value="Developer">Developer</option>
            </select>
            <input className="search-input" type="text" ref={searchKeyword} />
            <Button className="search-button" onClick={handleSearch} variant="contained">Search</Button>
        </div>
    );
}

