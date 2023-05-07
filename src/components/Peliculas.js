import React, { Component } from 'react';
import InsertarPelicula from './InsertarPelicula';

class Peliculas extends Component {
  state = {
    peliculas: [
      { titulo: 'Batman VS Superman', image: 'https://i.blogs.es/b6ccf4/batman-v-superman-dawn-of-justice-poster-nuevo-blogdecine-imagen-completa/450_1000.jpg' },
      { titulo: 'Gran Torino', image: 'https://pics.filmaffinity.com/Gran_Torino-278262332-large.jpg' },
      { titulo: 'Looper', image: 'https://es.web.img3.acsta.net/medias/nmedia/18/92/47/73/20250845.jpg' }
    ],
    nombre: 'Claudio Illanes',
    favorita: {}
  };
  favorita = (pelicula) => {
    console.log('Favorita Marcada = ');
    console.log(pelicula);
    this.setState({
      favorita: pelicula
    })
  }
  render() {
    return (
      <React.Fragment>
        <h2 className="subheader">Peliculas</h2>
        <p>Selección de peliculas de {this.state.nombre}</p>
        {this.state.favorita.titulo &&
          <p className='favorita'>
            La pelicula favorita es <strong>{this.state.favorita.titulo}</strong>
          </p>
        }


        {/* Crear componente pelicula */}
        <div id="articles" className='peliculas'>
          {
            this.state.peliculas.map((pelicula, i) => {
              return (
                <InsertarPelicula key={i}
                  pelicula={pelicula}
                  marcarFavorita={this.favorita}
                />
              )
            })
          }
        </div>
      </React.Fragment>

    );

  }
}

export default Peliculas;