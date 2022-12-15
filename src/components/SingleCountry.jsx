import React from "react";
import { Link, useParams } from "react-router-dom";
import back from "../assets/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";

export default function SingleCountry() {
	const { countriesID } = useParams();
	const [SingleCountry, setSingleCountry] = React.useState([]);
	const [pending, setPending] = React.useState(true);
	const [error, setError] = React.useState(null);

	const url = "https://restcountries.com/v2/all";
	React.useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error("Error could not reach end point");
				}
				return res.json();
			})
			.then((data) => {
				setPending(false);
				setSingleCountry(data);
				setError(null);
			})
			.catch((error) => {
				setPending(false);
				setError(error.message);
			});
	}, []);

	return (
		<>
			{error && <div className="error">{error}</div>}
			{pending && <div className="loading">Loading...</div>}

			{SingleCountry.filter((country) => country.name == countriesID).map(
				(country) => {
					return (
						<div key={country.name} className="wrapper">
							<div className="container">
								<Link to="/">
									<img className="back" src={back} alt="go back" />
								</Link>
							</div>
							<div className="container">
								<div className="left-container">
									<img src={country.flag} alt={country.name} />
								</div>
								<div className="right-container">
									<div className="top">
										<div className="left">
											<h2>{country.name}</h2>
											<ul>
												<li>
													<span>Native Name:</span> {country.nativeName}
												</li>

												<li>
													<span>Population:</span>{" "}
													{(country.population / 1000000).toLocaleString(
														"en-US"
													) + "Million"}{" "}
												</li>
												<li>
													<span>Region:</span> {country.region}
												</li>
												<li>
													<span>Sub Region:</span> {country.subregion}
												</li>
												<li>
													<span>Capital:</span> {country.capital}{" "}
												</li>
											</ul>
										</div>
										<div className="right">
											<ul>
												<li>
													<span>Top Level Domain :</span>{" "}
													{country.topLevelDomain}{" "}
												</li>
												<li>
													<span>Currencies :</span> {country.currencies[0].code}
												</li>
												<li>
													<span>Languages:</span>
													{country.languages.map(
														(lang) => [lang.name].join() + ","
													)}
												</li>
											</ul>
										</div>
									</div>
									<div className="bottom">
										<span>Border Countries</span>
										<ul>
											{country?.borders?.map((border) => (
												<li key={border}>{border}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					);
				}
			)}
		</>
	);
}
