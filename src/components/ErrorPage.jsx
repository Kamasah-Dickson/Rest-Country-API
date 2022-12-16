import backLightImg from "../assets/arrow_back_FILL0_wght400_GRAD0_opsz48.svg";
import { Link } from "react-router-dom";
export default function ErrorPage() {
	return (
		<div className="main-error">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<Link to="/">
				<button aria-label="Go home">
					<img src={backLightImg} alt="Go back" />
					<p>Please go back</p>
				</button>
			</Link>
		</div>
	);
}
