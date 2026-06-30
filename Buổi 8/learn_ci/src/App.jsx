import { useMemo, useState } from 'react'
import './App.css'

const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

function insertItem(array, value, index) {
  const result = [...array]

  for (let i = result.length - 1; i >= index; i -= 1) {
    result[i + 1] = result[i]
  }

  result[index] = value
  return result
}

function removeItem(array, index) {
  const result = [...array]

  for (let i = index; i < result.length - 1; i += 1) {
    result[i] = result[i + 1]
  }

  result.length = result.length - 1
  return result
}

function findItem(array, keyword) {
  const value = keyword.trim().toLowerCase()

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].toLowerCase() === value) {
      return i
    }
  }

  return -1
}

function clampIndex(value, min, max) {
  const numberValue = Number(value)

  if (Number.isNaN(numberValue)) {
    return min
  }

  return Math.min(Math.max(numberValue, min), max)
}

function App() {
  const [names, setNames] = useState(initialNames)
  const [nameInput, setNameInput] = useState('MindX')
  const [insertIndex, setInsertIndex] = useState(3)
  const [deleteIndex, setDeleteIndex] = useState(2)
  const [searchText, setSearchText] = useState('David')
  const [note, setNote] = useState('Array bat dau tu index 0, phan tu cuoi co index = length - 1.')

  const lastIndex = names.length - 1
  const safeInsertIndex = clampIndex(insertIndex, 0, names.length)
  const safeDeleteIndex = clampIndex(deleteIndex, 0, Math.max(lastIndex, 0))

  const searchIndex = useMemo(() => {
    if (!searchText.trim()) {
      return -1
    }

    return findItem(names, searchText)
  }, [names, searchText])

  function addToEnd() {
    const value = nameInput.trim()

    if (!value) {
      setNote('Nhap ten truoc khi them vao mang.')
      return
    }

    setNames((currentNames) => {
      const result = [...currentNames]
      result[result.length] = value
      return result
    })
    setNote(`Da them ${value} vao cuoi mang bang array[array.length].`)
  }

  function insertAtPosition() {
    const value = nameInput.trim()

    if (!value) {
      setNote('Nhap ten truoc khi chen vao mang.')
      return
    }

    setNames((currentNames) => insertItem(currentNames, value, safeInsertIndex))
    setNote(`Da chen ${value} vao index ${safeInsertIndex}. Cac phan tu sau duoc day sang phai.`)
  }

  function deleteAtPosition() {
    if (names.length === 0) {
      setNote('Mang dang rong nen khong the xoa.')
      return
    }

    const removedName = names[safeDeleteIndex]
    setNames((currentNames) => removeItem(currentNames, safeDeleteIndex))
    setNote(`Da xoa ${removedName} tai index ${safeDeleteIndex}. Cac phan tu sau duoc keo len truoc.`)
  }

  function resetArray() {
    setNames(initialNames)
    setNameInput('MindX')
    setInsertIndex(3)
    setDeleteIndex(2)
    setSearchText('David')
    setNote('Da reset ve mang mau cua bai hoc.')
  }

  return (
    <main className="app">
      <section className="hero">
        <div>
          <p className="label">Lesson 8</p>
          <h1>Array Practice</h1>
          <p>
            Thuc hanh mang trong JavaScript: truy cap phan tu, xem length, duyet mang,
            them cuoi, chen, xoa va tim kiem bang vong lap.
          </p>
        </div>
        <button className="secondary-button" type="button" onClick={resetArray}>Reset</button>
      </section>

      <section className="summary-grid">
        <article>
          <span>array.length</span>
          <strong>{names.length}</strong>
        </article>
        <article>
          <span>First item</span>
          <strong>{names[0] ?? 'empty'}</strong>
        </article>
        <article>
          <span>Last index</span>
          <strong>{lastIndex >= 0 ? lastIndex : 'none'}</strong>
        </article>
        <article>
          <span>Last item</span>
          <strong>{names[lastIndex] ?? 'empty'}</strong>
        </article>
      </section>

      <section className="content-grid">
        <div className="panel">
          <p className="label">Duyet mang</p>
          <h2>Danh sach hien tai</h2>
          <div className="name-list">
            {names.map((name, index) => (
              <div className="name-row" key={`${name}-${index}`}>
                <span>{index}</span>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
          <p className="note">{note}</p>
        </div>

        <div className="panel controls">
          <p className="label">Thao tac</p>
          <h2>Lam viec voi array</h2>

          <label>
            Gia tri can them / chen
            <input value={nameInput} onChange={(event) => setNameInput(event.target.value)} />
          </label>

          <div className="two-buttons">
            <button type="button" onClick={addToEnd}>Them cuoi</button>
            <button type="button" onClick={insertAtPosition}>Chen</button>
          </div>

          <label>
            Index can chen
            <input
              min="0"
              max={names.length}
              type="number"
              value={insertIndex}
              onChange={(event) => setInsertIndex(event.target.value)}
            />
          </label>

          <label>
            Index can xoa
            <input
              min="0"
              max={Math.max(lastIndex, 0)}
              type="number"
              value={deleteIndex}
              onChange={(event) => setDeleteIndex(event.target.value)}
            />
          </label>
          <button className="danger-button" type="button" onClick={deleteAtPosition}>Xoa phan tu</button>

          <label>
            Tim kiem ten
            <input value={searchText} onChange={(event) => setSearchText(event.target.value)} />
          </label>
          <div className={searchIndex >= 0 ? 'result success' : 'result'}>
            {searchText.trim()
              ? searchIndex >= 0
                ? `${searchText} nam o index ${searchIndex}`
                : `Khong tim thay ${searchText}`
              : 'Nhap ten de tim kiem'}
          </div>
        </div>
      </section>

      <section className="panel formulas">
        <p className="label">Cong thuc</p>
        <h2>Y tuong can nho</h2>
        <div>
          <code>array[index]</code>
          <code>lastIndex = array.length - 1</code>
          <code>array[array.length] = newValue</code>
          <code>for (let i = 0; i &lt; array.length; i += 1)</code>
        </div>
      </section>
    </main>
  )
}

export default App
