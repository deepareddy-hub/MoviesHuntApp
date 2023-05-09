import React from "react";
import Result from "./Result";

function Results({ results, openDetail }) {
return (
	<section className="results">
	{typeof results != "undefined" ? (
		results.map((result) => (
		<Result key={result.imdbID} result
			={result} openDetail={openDetail} />
		))
	) : (
		<div className="not-found">
		<h2>Sorry, We couldn't find any movies that matches your search!</h2>
		<br></br>
		<br></br>
		<br></br>
		<h3>
			Please Check Your Input and Try Again!!<br></br>
			Hope You Enjoy Movie Hunt!!!
		</h3>
		</div>
	)}
	</section>
);
}

export default Results;
