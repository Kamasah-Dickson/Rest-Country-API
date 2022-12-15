import React from "react";

export default function Card({ img, name, population, region, capital }) {
	return (
		<>
			<div className="card">
				<div className="card--img">
					<img src={img} alt="" />
				</div>
				<div className="details">
					<h2>{name}</h2>
					<p>
						Population:{" "}
						<span>
							{(population / 1000000).toLocaleString("en-US") + "Million"}
						</span>
					</p>
					<p>
						Region: <span>{region}</span>
					</p>
					<p>
						Capital: <span>{capital}</span>
					</p>
				</div>
			</div>
		</>
	);
}
