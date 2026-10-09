import { LocalizationProvider } from "@mui/x-date-pickers"
import Form from "./components/Form"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import Container from "./containers/Container"
import Header from "./layouts/Header"


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header></Header>
        <Container />
      </>
    </LocalizationProvider>
  )
}

export default App
