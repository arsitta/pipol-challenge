import { MaterialThemeProvider } from './providers/MaterialThemeProvider'
import { ReduxProvider } from './providers/ReduxProvider'
import { MainRouter } from './routes/MainRouter'
import "./styles/styles.scss"
function App() {

  return (
    <ReduxProvider>
      <MaterialThemeProvider>
        <MainRouter />
      </MaterialThemeProvider>
    </ReduxProvider>
  )
}

export default App
