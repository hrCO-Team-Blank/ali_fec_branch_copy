import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.jsx'
import ProductCardList from '../components/ProductCardList.jsx'
import { BrowserRouter as Router, Link, Route } from 'react-router'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProduct: 2,
      productData: [],
      relatedData: [],
      productStyles: []
    }
  }

  componentDidMount() {
    axios.get(`http://52.26.193.201:3000/products/${this.state.mainProduct}/related`)
      .then(res => {
        const data = res.data;
        this.setState({ relatedData: data })
      })
  }

  render() {
    return (
      <div>
        RELATED PRODUCTS
        <ProductCardList
          //passing array of indices
          relatedData={this.state.relatedData}
        />

      </div>
    );
  }
}

export default App;