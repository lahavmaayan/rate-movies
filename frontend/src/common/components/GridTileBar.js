import React from 'react';

const GridTileBar = ({ title, data }) => {
    return (
        <div className="tile-bar">
            <div className="tile-title">
                {title}
                <span className="tile-data">{data}</span>
            </div>
        </div>
    );
};

export default GridTileBar;
