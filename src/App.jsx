import { Route, Routes } from "react-router"
import { Home } from "./Pages/Home/Home"
import { Saludar } from "./Pages/Saludar/Saludar"
import { NotFound } from "./Pages/NotFound/NotFound"
import { Calculadora2 } from "../src/Pages/Calculadora2/Calculadora2"
import { Panel2 } from "./Pages/Panel2/Panel2"
import { Formulario2 } from "./Pages/Formulario2/Formulario2"
import { Tarea2 } from "./Pages/Tarea2/Tarea2"


export const App = ()=> {
  return (
<>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/saludar" element={<Saludar />} />
    <Route path="/Calculadora" element={<Calculadora2 />} />
    <Route path="/Panel" element={<Panel2 />} />
    <Route path="/Formulario" element={<Formulario2 />} />
    <Route path="/Tarea" element={<Tarea2 />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</>
  )};
