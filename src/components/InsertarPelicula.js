import React, { Component } from 'react';

class InsertarPelicula extends Component {

  marcar = () =>{
    this.props.marcarFavorita(this.props.pelicula);
  }
  render() {
    const pelicula = this.props.pelicula;
    const { titulo, image } = this.props.pelicula;
    return (
      <article className='article-item' id="article-template">
        <div className='image-wrap'>
          <img src={image} alt={titulo}></img>
        </div>
        <h2> {titulo}</h2>
        <span>
          Hace 5 min
        </span>
        <a href="#">Leer más</a>
        <button onClick={this.marcar}>
          Marcar como favorita
        </button>
        <div className="clearfix"></div>
      </article>
    )
  }
}

export default InsertarPelicula;