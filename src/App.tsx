import AppRoutes from "./routes/Routes"
import { AuthProvider } from "./services/auth"

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App