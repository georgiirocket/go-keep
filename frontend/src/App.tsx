//import { Greet } from '../wailsjs/go/main/App'
import ThemeProvider from '@/src/common/providers/theme'
import Loader from '@/src/common/components/loader'

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <div className="relative grid grid-cols-[auto_1fr]">
        <h1 className="text-center">Sidebar</h1>
        <h1 className="w-full text-center">Hello app!!</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
