import { useState } from "react";
import { useLessonContext } from "../context/context";
import "./NoteComponent.scss";

const NoteComponent = () => {
	const { newLessonsState, lessonIndex, postNotes } = useLessonContext();

	const [noteTarget, setNoteTarget] = useState("");

	const notesHandler = (e) => {
		let newNotes = [...newLessonsState[lessonIndex].listNotes, noteTarget];
		postNotes(e, newNotes);
	};

	const makeNote = (e) => {
		setNoteTarget(e.currentTarget.value);
	};

	return (
		<div className="note">
			<div className="button_note">
				<form onSubmit={notesHandler} action="">
					<input
						onChange={(e) => makeNote(e)}
						placeholder="Write your note here!"
						type="text"
						name=""
						id=""
					/>
					<button type="submit">Leave note</button>
				</form>
			</div>
			<div className="notes_list">
				{newLessonsState[lessonIndex].listNotes === undefined
					? null
					: newLessonsState[lessonIndex].listNotes?.map((el, index) => (
							<div className="note_section" key={index}>
								{++index + ". "}
								{el}
							</div>
					  ))}
			</div>
		</div>
	);
};
export default NoteComponent;
