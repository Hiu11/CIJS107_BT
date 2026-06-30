import { useMemo, useState } from 'react'
import './App.css'

type Weather = 'sunny' | 'rainy' | 'cloudy'
type Plan = {
  id: number
  title: string
  type: 'study' | 'rest' | 'review'
  done: boolean
}

const plans: Plan[] = [
  { id: 1, title: 'Review if/else examples', type: 'study', done: false },
  { id: 2, title: 'Write switch-case for weekdays', type: 'study', done: true },
  { id: 3, title: 'Skip finished exercises', type: 'review', done: true },
  { id: 4, title: 'Take a short break', type: 'rest', done: false },
  { id: 5, title: 'Practice break and continue', type: 'review', done: false },
]

function getWeatherAdvice(weather: Weather, hasUmbrella: boolean) {
  if (weather === 'rainy' && hasUmbrella) {
    return 'It is raining, but you can go out with an umbrella.'
  }

  if (weather === 'rainy') {
    return 'It is raining, stay inside and study Lesson 7.'
  }

  if (weather === 'sunny') {
    return 'It is sunny, finish exercises before going outside.'
  }

  return 'Cloudy weather is good for reviewing code examples.'
}

function getWeekdayName(day: number) {
  switch (day) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return 'Invalid day'
  }
}

function buildPlanList(items: Plan[]) {
  const result: string[] = []

  for (const item of items) {
    if (item.done) {
      continue
    }

    result.push(`${result.length + 1}. ${item.title}`)

    if (result.length === 3) {
      break
    }
  }

  return result
}

function App() {
  const [weather, setWeather] = useState<Weather>('rainy')
  const [hasUmbrella, setHasUmbrella] = useState<boolean>(false)
  const [day, setDay] = useState<number>(1)

  const advice = getWeatherAdvice(weather, hasUmbrella)
  const dayName = getWeekdayName(day)
  const moodText = weather === 'sunny' ? 'Outdoor later' : 'Focus mode'
  const visiblePlans = useMemo(() => buildPlanList(plans), [])

  return (
    <main className="lesson-shell">
      <section className="intro-card">
        <p className="eyebrow">Lesson 7</p>
        <h1>Conditions and loops</h1>
        <p>
          Practice if/else, switch-case, ternary operators, for loops, break,
          and continue with a small React + TypeScript exercise.
        </p>
      </section>

      <section className="control-grid">
        <label>
          Weather
          <select
            value={weather}
            onChange={(event) => setWeather(event.target.value as Weather)}
          >
            <option value="rainy">Rainy</option>
            <option value="sunny">Sunny</option>
            <option value="cloudy">Cloudy</option>
          </select>
        </label>

        <label>
          Weekday number
          <input
            min="0"
            max="6"
            type="number"
            value={day}
            onChange={(event) => setDay(Number(event.target.value))}
          />
        </label>

        <label className="checkbox-row">
          <input
            checked={hasUmbrella}
            type="checkbox"
            onChange={(event) => setHasUmbrella(event.target.checked)}
          />
          Has umbrella
        </label>
      </section>

      <section className="result-card">
        <h2>Condition results</h2>
        <p><strong>If/else:</strong> {advice}</p>
        <p><strong>Switch-case:</strong> {day} is {dayName}</p>
        <p><strong>Ternary:</strong> {moodText}</p>
      </section>

      <section className="result-card">
        <h2>Loop result</h2>
        <p>The list below skips completed tasks with continue and stops after 3 tasks with break.</p>
        <ol>
          {visiblePlans.map((plan) => (
            <li key={plan}>{plan}</li>
          ))}
        </ol>
      </section>
    </main>
  )
}

export default App
