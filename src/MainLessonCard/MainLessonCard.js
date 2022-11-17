import React from "react";
import { useLessonContext } from "../context/context";
import "./MainLessonCard.scss";
import NoteComponent from "../NoteComponent/NoteComponent";

const MainLessonCard = () => {
	const { title, links, type, youtube, hometask, isCompleted } =
		useLessonContext();

	return (
		<div>
			<h1>{title}</h1>
			<h2>{type}</h2>
			<div className="main_container">
				{youtube ? <a href={youtube}>YouTube Lesson</a> : null}
				{links ? (
					<div>
						<h3>You can find important info here:</h3>
						<ul>
							{links?.map((el, index) => (
								<li key={index}>
									<span>
										{el[0]}: {<a href={el[1]}>{el[1]}</a>}
									</span>
								</li>
							))}
						</ul>
					</div>
				) : null}
				{hometask ? (
					<div>
						<h3>Don't forget about your hometask:</h3>
						<ul>
							{hometask?.map((el, index) => (
								<li key={index}>{el}</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
			<button className="is_completed" onClick={isCompleted}>
				Completed
			</button>
			<NoteComponent />
		</div>
	);
};

export default MainLessonCard;
