import { useState } from "react";
import "./Header.css";

const Header = (props) => {
	const [position, setPosition] = useState(0);

	const prev = () => {
		// eslint-disable-next-line no-unused-expressions
		position >= -1840 ? setPosition((prev) => prev - 184) : null;
	};

	const next = () => {
		// eslint-disable-next-line no-unused-expressions
		position >= 0 ? null : setPosition((prev) => prev + 184);
	};

	return (
		<div className="header">
			<button onClick={next} className="buttons">
				Prev
			</button>
			<div className="slider">
				<div className="slider_line" style={{ left: position + "px" }}>
					{props.newLessonsState?.map((el, index) => (
						<div
							key={index}
							onClick={(e) => props.showLesson(e)}
							className={
								el.completed ? "slider_component completed" : "slider_component"
							}
						>
							<p>{el.title}</p>
						</div>
					))}
				</div>
			</div>
			<button onClick={prev} className="buttons">
				Next
			</button>
		</div>
	);
};

export default Header;
