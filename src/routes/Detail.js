import React from 'react';
import { useLocation } from 'react-router-dom';
import './Detail.css';

//class Detail extends Component () {
function Detail() {
    let details = useLocation().state;

    return <section className="container">
                <div>
                    <div className="detail__container">
                    <img src={details.poster} alt={details.title} title={details.title}/>
                        <h3 className="">{details.title}</h3>
                        <h5 className="">{details.year}</h5>
                        <ul className="">
                        {details.genres.map((genre, index) => {return <li key={index} className="">{genre}</li>;})}
                        </ul>
                        <p className="">{details.summary}</p>
                    </div>
                </div>
            </section>;
}

export default Detail;