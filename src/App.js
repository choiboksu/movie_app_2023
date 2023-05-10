import { render } from '@testing-library/react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Movie({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}.</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );

}

const movieILike = [
  {id:1, name:'LALA LAND', rating:4.2, image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTVfMjI3%2FMDAxNjUwMDAwODI1ODU2.Tra9HNhz6iKQ9FP--zeS13qJdrww7bPr6VfNjPT09ksg.fC1swIw6Q3daJA-09YY8ChjeDZ3JZdLyXuoqx3AiPVwg.JPEG.ehy1125%2F%25B6%25F3%25B6%25F3%25B7%25A3%25B5%25E5%25C6%25F7%25BD%25BA%25C5%25CD.jpg&type=a340'},
  {id:2, name:'The Sixth Sense', rating:5.0, image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20191125_10%2F1574660739499tlbaN_JPEG%2F12023073050782084_1423630311.jpg&type=a340'},
  {id:3, name:'IRON MAN', rating:5.0, image:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20100204_185%2Fux8520_1265245616679T4brr_jpg%2Fironman_ux8520.jpg&type=a340'}
];

/*
function renderMovie(m) {
  return <Movie name={m.name} picture={m.image}/>;
}
동일한 기능의 화살표 함수.
*/
const renderMovie = m => <Movie key={m.id} name={m.name} picture={m.image} rating={m.rating}/>;

class App extends Component {
  render() {
    console.log(movieILike.map(renderMovie));
    return (
      <div className="App">
        {movieILike.map(renderMovie)}
      </div>
    );
  }
}

export default App;
