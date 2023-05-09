import React from "react";

function Result({ result, openDetail }) {
return (
	<div className="result" onClick=
		{() => openDetail(result.imdbID)}>
	<img src={result.Poster} alt="Poster"/>
	<h3>{result.Title} <br></br><br></br><h6>Release Year:{result.Year}</h6></h3>
	
	</div>
);
}

export default Result;
