import React from 'react';

const ResultsGrid = props => {
    const { results } = props;
    return (
        <div className="result-grid">
            {results.map(result => (
                <div>{result}</div>
            ))}
        </div>
    );
};

export default ResultsGrid;
