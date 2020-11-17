import React, { Component } from 'react';
import ProductCard from '../components/ProductCard.jsx'
import ProductCardList from '../components/ProductCardList.jsx'
import { BrowserRouter as Router, Link, Route } from 'react-router'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProduct: 1,
      productData: [],
      relatedData: [],
      productStyles: []
    }
  }

  componentDidMount() {
    // axios.get('http://52.26.193.201:3000/products/list')
    //   .then(res => {
    //     const data = res.data;
    //     this.setState({ productData: data })
    //   })

    axios.get(`http://52.26.193.201:3000/products/${this.state.mainProduct}/related`)
      .then(res => {
        const data = res.data;
        this.setState({ relatedData: data })
      })

    // let stylesArr = [];
    // for (let id of this.state.relatedData) {
    //   axios.get(`http://52.26.193.201:3000/products/${id}/styles`)
    //     .then(res => {
    //       this.setState({ productStyles: [...stylesArr, res] })
    //     })
    // }
  }

  //   axios.get(`http://52.26.193.201:3000/products/${this.state.mainProduct}/related`)
  //   .then(res => {
  //     const data = res.data;
  //     this.setState({ relatedData: data })
  //     console.log(this.state.relatedData)
  //   })
  // }
  render() {
    return (
      <div>
        RELATED PRODUCTS
        <ProductCardList
          className="product-card"
          relatedData={this.state.relatedData}
        />

      </div>
    );
  }
}

export default App;