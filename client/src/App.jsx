import React, { Component } from 'react';
import RelatedCard from '../components/RelatedCard/RelatedCard.jsx'
import RelatedCardList from '../components/RelatedCardList/RelatedCardList.jsx'
import OutfitCardList from '../components/OutfitCardList/OutfitCardList.jsx'

import { BrowserRouter as Router, Link, Route } from 'react-router'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProduct: 1,
      userSession: 3,
      relatedData: [],
      outfitData: [],
    }
    this.addOutfit = this.addOutfit.bind(this)
  }

  componentDidMount() {
    axios.get(`http://52.26.193.201:3000/products/${this.state.mainProduct}/related`)
      .then(res => {
        const relatedProducts = res.data;
        this.setState({ relatedData: relatedProducts })
      })

    axios.get(`http://52.26.193.201:3000/cart/${this.state.userSession}`)
      .then(res => {
        const outfits = res.data;
        this.setState({ outfitData: outfits })
      })
  }

  addOutfit(event) {
    let addOutfitBody = {
      user_session: this.state.userSession,
      product_id: this.state.mainProduct
    }
    axios.post(`http://52.26.193.201:3000/cart/`, addOutfitBody)
      .then(res => {
        console.log(res);
      });

    axios.get(`http://52.26.193.201:3000/cart/${this.state.userSession}`)
      .then(res => {
        const outfits = res.data;
        this.setState({ outfitData: outfits })
      })
  }

  render() {
    return (
      <div>
        <div>
          <h1>RELATED PRODUCTS</h1>
          <RelatedCardList
            //passing array of indices
            relatedData={this.state.relatedData}
            mainProduct={this.state.mainProduct}
          />
        </div>

        <div>
          <h1>YOUR OUTFIT</h1>
          <OutfitCardList
            addOutfit={this.addOutfit}
            outfitData={this.state.outfitData}
            mainProduct={this.state.mainProduct}
          />
        </div>
      </div>
    );
  }
}

export default App;