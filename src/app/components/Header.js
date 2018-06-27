import React from "react";
import Link from "react-router-dom/es/Link";

export const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/section/11">Section</Link></li>
            </ul>
        </div>
    );
};
