import React from "react";
import searchImg from "../assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import searchImgDark from "../assets/search_FILL0_wght400_GRAD0_opsz48 copy.svg";
import dropdownBlack from "../assets/expand_more_FILL0_wght400_GRAD0_opsz48.svg";
import dropdownWhite from "../assets/expand_more_FILL0_wght400_GRAD0_opsz48 copy.svg";
import me from "../assets/Kamasah.jpg";

export default function Filter({ theme, setSearch, lists, dispatch }) {
	const input = React.useRef(null);

	function handleSearch(e) {
		setSearch((prev) => ({
			...prev,
			data: e.target.value.toLowerCase(),
		}));
	}

	return (
		<div className="filter-section">
			<a href="https://github.com/Kamasah-Dickson/Rest-Country-API">
				<img title="Github" className="me" src={me} alt="Github" />
			</a>
			<div className="input-div">
				<div className="before">
					{<img src={!theme ? searchImg : searchImgDark} alt="search" />}
				</div>
				<input
					onChange={(e) => handleSearch(e)}
					type="text"
					placeholder="Search for a country..."
					name="search"
					ref={input}
				/>
			</div>
			<div className="filter-wrapper">
				<div
					className="filter"
					aria-label="filter by region"
					aria-expanded={lists.show}
					tabIndex="1"
					onClick={() =>
						dispatch({ type: "FILTER", payload: () => !lists.show })
					}
				>
					<span>Filter by Region</span>
					<img
						draggable="false"
						src={!theme ? dropdownWhite : dropdownBlack}
						alt="drop-down"
					/>
				</div>
				<div className={lists.show ? "filter-options show" : "filter-options"}>
					<a href="#">
						<span
							tabIndex="2"
							aria-labelledby="id"
							id="Africa"
							onClick={() => dispatch({ type: "AFRICA", filterId: "africa" })}
						>
							Africa
						</span>
					</a>
					<a href="#">
						<span
							tabIndex="3"
							aria-labelledby="id"
							id="America"
							onClick={() => dispatch({ type: "AMERICA", filterId: "america" })}
						>
							America
						</span>
					</a>
					<a href="#">
						<span
							tabIndex="4"
							aria-labelledby="id"
							id="Asia"
							onClick={() => dispatch({ type: "ASIA", filterId: "asia" })}
						>
							Asia
						</span>
					</a>
					<a href="#">
						<span
							tabIndex="5"
							aria-labelledby="id"
							id="Europe"
							onClick={() => dispatch({ type: "EUROPE", filterId: "europe" })}
						>
							Europe
						</span>
					</a>
					<a href="#">
						<span
							tabIndex="6"
							aria-labelledby="id"
							id="Oceania"
							onClick={() => dispatch({ type: "OCEANIA", filterId: "oceania" })}
						>
							Oceania
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}
