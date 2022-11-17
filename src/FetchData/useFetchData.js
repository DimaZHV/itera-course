import { useState, useEffect } from "react";

export function useFetchData() {
	const [lessons, setLesson] = useState();

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json"
		)
			.then((res) => res.json())
			.then((res) => res.lessons)
			.then((data) => {
				data.map((el) => {
					el.listNotes = [];
				});
				setLesson(data);
			});
	}, []);

	// const completeLesson = () => {
	// 	const currentLesson = lessons[2];
	// 	currentLesson.isCompleted = true;
	// 	setLesson([...lessons]);
	// };

	return lessons;
}
