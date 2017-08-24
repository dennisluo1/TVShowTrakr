import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleShow extends Component {
  addFavorite(){
    axios.post('/profile', {
      title: this.props.showData.title,
      genre: this.props.showData.genre,
      sched_time: this.props.showData.sched_time,
      sched_day: this.props.showData.sched_day,
      image_url: this.props.showData.image_url,
      summary: this.props.showData.summary,
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div className='singleShow'>
        <img src={this.props.showData.image_url} alt={this.props.showData.title} />
        <ul>
          <li>{this.props.showData.title}</li>
          <li>{this.props.showData.sched_day}</li>
          <li>{this.props.showData.sched_time}</li>
        </ul>
        <p>{this.props.showData.summary}</p>
        {this.props.auth ? <button className="favButton" onClick={() => this.addFavorite()}><Link to='/profile'>Favorite</Link></button> : ''}
      </div>
    )
  }
}

export default SingleShow;