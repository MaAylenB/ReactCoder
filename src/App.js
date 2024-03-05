import logo from './logo.svg';
import './App.css';

const NavBar = () => {
    return (
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo de la tienda react" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
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

