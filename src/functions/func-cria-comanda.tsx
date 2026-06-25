
import Comanda from "../classes/class-comanda";
import CriaClientes from "./func-cria-cliente";


function CriaComanda():Comanda[]{

     return CriaClientes().map(cliente => new Comanda(cliente));
}

export default CriaComanda