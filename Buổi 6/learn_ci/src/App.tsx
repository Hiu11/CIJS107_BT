import { useMemo, useState } from 'react'
import './App.css'

type PrimitiveValue = string | number | boolean

type LessonValue = {
  id: number
  label: string
  value: PrimitiveValue
  note: string
}

enum LessonStatus {
  Ready = 'Ready',
  Practicing = 'Practicing',
  Reviewed = 'Reviewed',
}

const lessonValues: LessonValue[] = [
  {
    id: 1,
    label: 'Student name',
    value: 'Hieu',
    note: 'string value for text data',
  },
  {
    id: 2,
    label: 'Practice score',
    value: 8.5,
    note: 'number value for math operations',
  },
  {
    id: 3,
    label: 'Finished reading',
    value: true,
    note: 'boolean value for logic checks',
  },
]

function getValueType(value: PrimitiveValue) {
  return typeof value
}

function formatValue(value: PrimitiveValue) {
  return typeof value === 'boolean' ? String(value) : value
}

function App() {
  const [targetScore, setTargetScore] = useState<number>(7)
  const currentScore = 8.5

  const status = useMemo(() => {
    if (currentScore >= targetScore) {
      return LessonStatus.Reviewed
    }

    return LessonStatus.Practicing
  }, [targetScore])

  const isPassing = currentScore >= targetScore
  const canSubmit = isPassing && status === LessonStatus.Reviewed

  return (
    <main className="lesson-page">
      <section className="hero-panel">
        <p className="eyebrow">Lesson 6</p>
        <h1>JavaScript and TypeScript practice</h1>
        <p>
          A small React + TypeScript exercise for variables, primitive types,
          comparison operators, logic operators, and enum values.
        </p>
      </section>

      <section className="grid-panel" aria-label="Typed values">
        {lessonValues.map((item) => (
          <article className="value-card" key={item.id}>
            <span>{item.label}</span>
            <strong>{formatValue(item.value)}</strong>
            <p>Type: {getValueType(item.value)}</p>
            <small>{item.note}</small>
          </article>
        ))}
      </section>

      <section className="practice-panel">
        <div>
          <p className="eyebrow">Comparison and logic</p>
          <h2>Score checker</h2>
          <p>
            Current score is <strong>{currentScore}</strong>. Change the target
            score to see TypeScript keep number state predictable.
          </p>
        </div>

        <label className="score-control">
          Target score
          <input
            min="1"
            max="10"
            step="0.5"
            type="number"
            value={targetScore}
            onChange={(event) => setTargetScore(Number(event.target.value))}
          />
        </label>

        <div className="result-box">
          <p>Status enum: {status}</p>
          <p>currentScore &gt;= targetScore: {String(isPassing)}</p>
          <p>canSubmit = isPassing && reviewed: {String(canSubmit)}</p>
        </div>
      </section>
    </main>
  )
}

export default App
