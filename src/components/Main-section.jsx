import React from "react";
import Filter from "./Filter";
import Grid from "./Grid";

export default function Main({ theme }) {
	const [search, setSearch] = React.useState({ data: "" });
	const [countries, setCountries] = React.useState([]);
	const [loadData, setLoadData] = React.useState(8);
	const [toggle, setToggle] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [lists, dispatch] = React.useReducer(
		(state, action) => {
			switch (action.type) {
				case "AFRICA":
				case "AMERICA":
				case "ASIA":
				case "EUROPE":
				case "OCEANIA":
					return {
						...state,
						show: false,
						filterId: action.filterId,
					};

				case "FILTER":
					return {
						...state,
						show: action.payload(),
					};
			}
		},

		{ show: false, list: false, filterId: "" }
	);

	function loadMore() {
		setLoadData((prev) => prev + 8);
	}
	return (
		<main>
			<div className={"container "}>
				<Filter
					theme={theme}
					search={search}
					setSearch={setSearch}
					setCountries={setCountries}
					countries={countries}
					setToggle={setToggle}
					toggle={toggle}
					lists={lists}
					dispatch={dispatch}
					error={error}
				/>
				<div className="wrapper">
					<Grid
						search={search}
						setSearch={setSearch}
						countries={countries}
						setCountries={setCountries}
						loadData={loadData}
						setToggle={setToggle}
						toggle={toggle}
						lists={lists}
						error={error}
						setError={setError}
					/>
					{!error && toggle && search.data.length < 1 && (
						<button onClick={loadMore} className="load-more">
							Load More
						</button>
					)}
				</div>
			</div>
		</main>
	);
}
