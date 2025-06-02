import * as React from "react";
import ContactRow from "../components/ContactRow";
import "../styles.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

const IndexPage = () => {
	return (
		<div className="hero is-fullheight" data-theme="dark">
			<div className="hero-body">
				<div className="container has-text-centered">
					<p className="title">Genevieve Conty</p>
					<p className="subtitle">Software Engineer</p>
					<ContactRow />
				</div>
			</div>
		</div>
	)
}

export default IndexPage;