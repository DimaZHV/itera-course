import { useFetchData } from "./FetchData/useFetchData.js";
import { useState, useEffect } from "react";
import "./App.scss";
import { Context } from "./context/context.js";
import Header from "./Header/Header";
import MainLessonCard from "./MainLessonCard/MainLessonCard.js";

function App() {
	const data = useFetchData();

	const [newLessonsState, setNewLessonsState] = useState();
	const [lesson, setLesson] = useState("Choose a lesson from the upper list!");
	const [lessonIndex, setLessonIndex] = useState();

	useEffect(() => {
		if (localStorage.getItem("course")) {
			const memoryCourse = localStorage.getItem("course");
			const memoryCourseParse = JSON.parse(memoryCourse);
			setNewLessonsState([...memoryCourseParse]);
		} else {
			setNewLessonsState(data);
		}
	}, [data]);

	const showLesson = (e) => {
		const target = newLessonsState?.find(
			(el) => el.title === e.target.innerText
		);
		const index = newLessonsState?.findIndex(
			(el) => el.title === e.target.innerText
		);
		setLessonIndex(index);
		setLesson({ ...target });
	};

	const isCompleted = () => {
		const index = newLessonsState?.findIndex((el) => el.title === lesson.title);
		newLessonsState[index].completed = true;
		localStorage.setItem("course", JSON.stringify([...newLessonsState]));

		setNewLessonsState([...newLessonsState]);
	};

	const postNotes = (e, notes) => {
		e.preventDefault();
		const index = newLessonsState?.findIndex((el) => el.title === lesson.title);
		newLessonsState[index].listNotes = notes;
		localStorage.setItem("course", JSON.stringify([...newLessonsState]));

		setNewLessonsState([...newLessonsState]);
	};

	const reset = () => {
		localStorage.removeItem("course");
		setNewLessonsState(data);
	};
	return (
		<div className="App">
			<div className="wrapper">
				<button className="reset" onClick={reset}>
					RESET COURSE
				</button>
				<Context.Provider
					value={{
						...lesson,
						newLessonsState,
						lessonIndex,
						postNotes,
						isCompleted,
					}}
				>
					<Header newLessonsState={newLessonsState} showLesson={showLesson} />
					<div className="main">
						{typeof lesson === "string" ? (
							<h1 className="first-lesson">{lesson}</h1>
						) : (
							<MainLessonCard isCompleted={isCompleted} />
						)}
					</div>
					<div className="footer"></div>
				</Context.Provider>
			</div>
		</div>
	);
}

export default App;
