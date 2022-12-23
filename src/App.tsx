import { ContadorReducer } from "./Components/ContadorReducer";
import { Counter } from "./Components/Counter";
import { Formulario } from "./Components/Formulario";
import { TimerPadre } from "./Components/TimerPadre";
import { Usuario } from "./Components/Usuario";
import { Formulario2 } from './Components/Formulario2';



function App() {
  return (
    <div className="App">
      <h1>Hola mundo - Ts</h1>

      <Counter />

      <Usuario />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerPadre />


      <h2 className="mt-5" >useReducer</h2>
      <hr />
      <ContadorReducer />

      <h2 className="mt-5">CustomHooks</h2>
      <hr />
      <Formulario2 />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}

export default App;
