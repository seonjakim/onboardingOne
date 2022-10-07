import './App.css';

import useRouter from '../router/useRouter';

function App() {
  const {push} = useRouter()
  return (
    <div className="App">
      <h1>ROOT!</h1>
      <div className="card">
        <button onClick={() => push('/about')}>
          link to about
        </button>
      </div>
    </div>
  )
}

export default App
