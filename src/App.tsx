import { ApolloClientProvider } from './providers/ApolloClientProvider'
import { MaterialThemeProvider } from './providers/MaterialThemeProvider'
import { ReduxProvider } from './providers/ReduxProvider'
import { MainRouter } from './routes/MainRouter'
import "./styles/styles.scss"
function App() {

  return (
    <ApolloClientProvider>
      <ReduxProvider>
        <MaterialThemeProvider>
          <MainRouter />
        </MaterialThemeProvider>
      </ReduxProvider>
    </ApolloClientProvider>
  )
}

export default App
