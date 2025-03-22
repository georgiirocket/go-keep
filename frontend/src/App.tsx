//import { Greet } from '../wailsjs/go/main/App'
import ThemeProvider from '@/src/common/providers/theme'

function App() {
  return (
    <ThemeProvider>
      <h1 className="w-full text-center">Hello app!!</h1>
    </ThemeProvider>
  )
}

export default App
