import { createContext, useContext } from "react";

const lesson = {
	title: "",
	name: "",
	type: "",
	youtube: "",
	shortSummary: "",
	keyPoints: [],
	links: [],
	hometask: [],
	isCompleted: false,
};

export const Context = createContext(lesson);
export const useLessonContext = () => {
	return useContext(Context);
};
