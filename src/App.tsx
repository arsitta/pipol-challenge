import { ApolloClientProvider } from './providers/ApolloClientProvider'
import { MaterialLocalizationProvider } from './providers/MaterialLocalizationProvider'
import { MaterialThemeProvider } from './providers/MaterialThemeProvider'
import { ReduxProvider } from './providers/ReduxProvider'
import { MainRouter } from './routes/MainRouter'
import "./styles/styles.scss"
function App() {

  return (
    <ApolloClientProvider>
      <ReduxProvider>
        <MaterialLocalizationProvider>
          <MaterialThemeProvider>
            <MainRouter />
          </MaterialThemeProvider>
        </MaterialLocalizationProvider>
      </ReduxProvider>
    </ApolloClientProvider>
  )
}

export default App
