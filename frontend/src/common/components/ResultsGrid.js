import React from "react";

const tileData = [
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    title: "Titanic",
    author: "IAhel ramos"
  },
  {
    img:
      "https://m.media-amazon.com/images/M/MV5BMTc5Nzc1OTk3OV5BMl5BanBnXkFtZTgwNDM1NTQ3NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    title: "Shalom",
    author: "IAhel ramos1"
  }
];
const ResultsGrid = props => {
  const { classes } = props;

  return (
    <div className="result-grid">
      {tileData.map(tile => (
        <div key={tile.img}>
          <img src={tile.img} />
        </div>
      ))}
    </div>
  );
};

export default ResultsGrid;
