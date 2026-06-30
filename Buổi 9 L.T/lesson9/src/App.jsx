import './App.css'

const student = {
  name: 'Hieu',
  course: 'CIJS107',
  lesson: 'Lesson 9 - Object',
  skills: ['property', 'method', 'destructuring'],
  profile: {
    role: 'Frontend learner',
    level: 'Beginner',
  },
  introduce() {
    return `${this.name} dang hoc ${this.lesson}`
  },
}

const lessonCards = [
  {
    title: 'Tao object',
    code: "const user = { name: 'Hieu', age: 18 }",
  },
  {
    title: 'Doc property',
    code: 'user.name hoac user["name"]',
  },
  {
    title: 'Nested object',
    code: 'user.profile.role',
  },
]

function App() {
  const { name, course, lesson, skills, profile } = student

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Lesson 9</p>
        <h1>Object Base Project</h1>
        <p>
          Base project de hoc Object trong JavaScript: tao object, doc property,
          destructuring, nested object va method co ban.
        </p>
      </section>

      <section className="profile-panel">
        <div>
          <p className="eyebrow">Student object</p>
          <h2>{name}</h2>
          <p>{student.introduce()}</p>
        </div>
        <div className="meta-grid">
          <span>Course: {course}</span>
          <span>Lesson: {lesson}</span>
          <span>Role: {profile.role}</span>
          <span>Level: {profile.level}</span>
        </div>
      </section>

      <section className="content-grid">
        {lessonCards.map((card) => (
          <article className="lesson-card" key={card.title}>
            <h3>{card.title}</h3>
            <code>{card.code}</code>
          </article>
        ))}
      </section>

      <section className="skills-panel">
        <p className="eyebrow">Array inside object</p>
        <h2>Skills</h2>
        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App