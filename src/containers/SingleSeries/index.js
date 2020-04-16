import React, { Component } from 'react';
import Loader from '../../components/Loader';
import Logo from '../../logo.svg'
import reactStringReplace from 'react-string-replace';

class SingleSeries extends Component {
state = {
    show: null
}

componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
    .then( (response) => response.json())
    .then(json => this.setState({ show: json}));
}

render() {
    const { show } = this.state;
    console.log(show);
    
    return (
        <div>
        { show === null && <Loader />}
        {
          show !== null 
          &&
          <div>
          <p>{show.name}</p>
          <p>Premiered : {show.premiered}</p>
          <p>Rating : {show.rating.average}</p>
          <p>Episodes : {show._embedded.episodes.length}</p>
          <p>
            {
              show.image !== null   
              && 
            <img alt="Show" 
            src= {reactStringReplace(show.image.medium, /(http)/g, () => 'https')}
             />
            }
          
              {
                  show.image === null
                  &&
                  <img alt="No Image" src={Logo} style={{ width: 300 }}/>
              }  
          </p>
          </div>
        }
        </div>
    )
  }
} 

export default SingleSeries;