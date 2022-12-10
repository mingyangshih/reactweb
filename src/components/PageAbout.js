import React, {useContext} from 'react';
import {Context} from '../App';
const PageAbout = () => {
    const context = useContext(Context);
    return (
        <div>
            <h1>PageAbout</h1>
            <div>{context.siteName}</div>
            <div>{context.author}</div>
        </div>
    );
};
export default PageAbout;
