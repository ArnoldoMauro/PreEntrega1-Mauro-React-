import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import Titular from './componentes/Titular';
import Card from './componentes/Card';
import './App.css';



function App() {
  return (
    <div className="App">
        <Titular/>
        <br />
        <NavBar/>
        <br />
        <br />
        <ItemListContainer 
          logo = "Bodega de Campo"
        />
        <br />
        <br />
        <div className="caja" style={{display: "flex"}}>
          <Card
            title = "Cadus Tupungato Appellatium Malbec"
            price = "5.800"
            // image = {"cadus"}
            description = "19% off"
          />
          <Card
            title = "Luigi Bosca De Sangre Cabernet Sauvignon"
            // imagen = ""
            price = "8.200"
            description = "14% off"
          />
          <Card
            title = "Gran Sombrero Cavernet Sauvignon"
            // imagen = ""
            price = "3040"
            description = "20% off"
          />
          <Card
            title = "HD Gran Reserva Malbec"
            // imagen = ""
            price = "6.800"
            description = "11% off"
          />
        </div>

      
    </div>
  );
}

export default App;
