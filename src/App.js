/** @format */

import './App.css'
import FilterList from './components/FilterList'
import { fakeNames } from './components/fakerNames'

function App() {
  return (
    <div className='App'>
      <FilterList names={fakeNames} />
    </div>
  )
}

export default App
