

import Canvas from './canvas';
import Modifier from './pages/Modifier';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Modifier />
    </main>
  )
}

export default App