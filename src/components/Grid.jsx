import React from "react";
import Card from "./card";
import { Link } from "react-router-dom";
export default function Grid({
	countries,
	search,
	setCountries,
	loadData,
	setToggle,
	lists,
	error,
	setError,
}) {
	const [pending, setPending] = React.useState(true);

	const url = "https://restcountries.com/v2/all";
	const url2 = `https://restcountries.com/v2/region/${lists.filterId}`;
	//
	React.useEffect(() => {
		fetch(lists.filterId ? url2 : url)
			.then((res) => {
				if (!res.ok) {
					throw Error("Error could not reach end point");
				}
				return res.json();
			})
			.then((data) => {
				setPending(false);
				setCountries(data);
				setError(null);
				setToggle(true);
			})
			.catch((error) => {
				setPending(false);
				setError(error.message);
			});
	}, [lists.filterId]);

	return (
		<div className="grid">
			{error && <div className="error">{error}</div>}
			{pending && <div className="loading">Loading...</div>}
			{!error &&
				countries
					.filter((data) => data.name.toLowerCase().includes(search.data))
					.slice(0, loadData)
					.map((country) => {
						return (
							<Link to={`/${country.name}`} key={country.area}>
								<Card
									name={country.name}
									img={country.flags.svg}
									population={country.population}
									region={country.region}
									capital={country.capital}
								/>
							</Link>
						);
					})}
		</div>
	);
}
