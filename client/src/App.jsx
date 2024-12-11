import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonalInfo from "./features/form/PersonalInfo";
import Plan from "./features/form/Plan";
import AddOns from "./features/form/AddOns";
import Summary from "./features/form/Summary";
import './app.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PersonalInfo />} />
          <Route path='/personal' element={<PersonalInfo />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/addons' element={<AddOns />} />
          <Route path='/summary' element={<Summary />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
