import logo from './aimelogo2.jpeg';
import './App.css';

const NavBar = () => {
    return (
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo de la tienda react" />
        </div>
        <ul className="menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
           <ul>
                    <li><a href="">Carteras</a></li> 
                    <li><a href="">Indumentaria</a></li> 
                    <li><a href="">Anillos</a></li> 
                    <li><a href="">Collares</a></li> 
                    <li><a href="">Pulseras</a></li> 
           </ul>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
        <div className="cart-widget">
          {/* Widget del carrito de compras */}
          <span>Carrito</span>
        </div>
      </nav>
    );
  };
  
  // Componente Contenedor para mostrar el catálogo de productos
  const Contenedor = (props) => {
    return (
      <div>
        <h1>Bienvenido a {props.tienda}</h1>
        <p>{props.mensaje}</p>
        {/*Lógica para mostrar el catálogo de productos */}
      </div>
    );
  };
  
  // Componente principal
  const App = () => {
    return (
      <div>
        <NavBar />
        <Contenedor tienda="Aime accesorios" mensaje="¡Gracias por su visita!" />
      </div>
    );
  };


export default App;

