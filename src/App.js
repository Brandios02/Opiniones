import './App.css';
import Opiniones from './Componentes/Opiniones';
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Estas son las opiniones destacadas</h1>
      <Opiniones
      nombre='Jesus Lopez'
      pais='Mexico'
      imagen='Sujeto1'
      alt='Sujeto1'
      cargo='Desarrollador FullStack'
      empresa='Spotify'
      opinion='Ser desarrollador de JavaScript en Spotify es una oportunidad emocionante y dinámica. La plataforma, conocida por su amplia biblioteca musical y su interfaz amigable, requiere un enfoque innovador y creativo para mejorar la experiencia del usuario. Trabajar en un entorno tan colaborativo y centrado en el usuario permite a los desarrolladores no solo escribir código, sino también contribuir a un producto que impacta la vida diaria de millones de personas.'
      />

      <Opiniones
      nombre='Alberto Gamez'
      pais='Mexico'
      imagen='Sujeto2'
      alt='Sujeto2'
      cargo='Desarrollador FrontEnd'
      empresa='Amazon'
      opinion='Ser desarrollador front-end en Amazon es una experiencia fascinante y desafiante. Amazon es una de las plataformas de comercio electrónico más grandes del mundo, lo que significa que el trabajo que realizas tiene un impacto directo en la experiencia de compra de millones de usuarios. La velocidad y eficiencia son clave, y como desarrollador, tienes la responsabilidad de crear interfaces intuitivas y atractivas que faciliten la navegación y la interacción.'
      />

      <Opiniones
      nombre='Naid Jung'
      pais='Estados Unidos'
      imagen='sujeto3'
      alt='sujeto3'
      cargo='Desarrollador BackEnd'
      empresa='Google'
      opinion='Ser desarrollador back-end en Google es una oportunidad increíblemente enriquecedora. Google es conocido por su innovación constante y su enfoque en la escalabilidad, lo que significa que trabajar aquí implica enfrentar retos técnicos fascinantes. Los desarrolladores back-end juegan un papel crucial en el diseño y mantenimiento de sistemas robustos que manejan enormes volúmenes de datos, garantizando que las aplicaciones funcionen de manera eficiente y segura.'
      />
      </div>
    </div>
  );
}

export default App;
