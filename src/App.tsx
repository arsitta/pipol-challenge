import { ReduxProvider } from './providers/ReduxProvider'
import { MainRouter } from './routes/MainRouter'

function App() {

  return (
    <ReduxProvider>
      <MainRouter />
    </ReduxProvider>
  )
}

export default App
