import { NavItem2} from '../NavItem2/NavItem2'
export const Navbar2 = () => {
  return (
    <>
    <h1>Practicando Hooks</h1>
<nav>
  <ul>
    <NavItem2 to="/Saludar" content="Saludar" />
    <NavItem2 to="/Calculadora" content="Calculadora" />
    <NavItem2 to="/Panel" content="Panel" />
    <NavItem2 to="/Formulario" content="Formulario" />
    <NavItem2 to="/Tarea" content="Tarea" />
  </ul>
</nav>
<button>UseState- Lista Tareas</button>
    </>
  )
}