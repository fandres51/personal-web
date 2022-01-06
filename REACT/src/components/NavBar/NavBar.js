import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar({ items=['one', 'two', 'tree'], lastItem=false, line=false }) {

    return (
        <div className="navBarContainer">
            <div className={`navBarElemContainer 
                ${lastItem ? "navBarSpaceBetween" : "navBarSpaceStart"} 
                ${line ? "navBarLine" : "navBarNoLine"}
            `}>
                <div className={"navBarElementContainer"}>
                    {items.map((item, i, arr) =>
                        i !== (arr.length - 1) ?
                            <Link to="/" className="navBarItem" key={i}>
                                <div className="navBarText">{item}</div>
                            </Link>
                            : <div key={i}></div>
                    )}
                </div>
                <div className="navBarElementContainer">
                    <Link to="/" className="navBarItem">
                        <div className="navBarText">{items[items.length - 1]}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar
