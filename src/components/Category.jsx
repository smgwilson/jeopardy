import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Clue from './Clue';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      clues: [],
    }
  }
  componentDidMount() {
    let id = this.props.category.id;
    fetch(`http://jservice.io/api/clues?category=${id}`)
      .then(response => response.json())
      .then(json => this.setState({clues: json}));
  }
  render() {
    console.log('categoty props:', this.props.category);
    return (
      <div>
        <Link className="link-home" to='/'><h4>Home</h4></Link>
        <h2>{this.props.category.title}</h2>
        { this.state.clues.map(clue => {
            return (
                <Clue key={clue.id} clue={clue} />  
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
  }
}

export default connect(mapStateToProps, null)(Category);