const lessons = ["HTML", "CSS", "React"];

export default function LessonList() {
  return lessons.map((lesson) => <p key={lesson}>{lesson}</p>);
}
