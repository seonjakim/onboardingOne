import './App.css';

import useRouter from '../router/useRouter';

function About() {
  const { push } = useRouter()
  return (
    <div className="App">
      <h1>ABOUT!</h1>
      <div className="card">
        <button onClick={() => push('/')}>
          link to root
        </button>
      </div>
    </div>
  )
}

export default About
