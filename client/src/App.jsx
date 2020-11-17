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
      mainProduct: 2,
      userSession: 1,
      relatedData: [],
      outfitData: []
    }
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

  render() {
    return (
      <div>
        <div>
          RELATED PRODUCTS
        <RelatedCardList
            //passing array of indices
            relatedData={this.state.relatedData}
          />
        </div>

        <div>
          YOUR OUTFIT
          <OutfitCardList outfitData={this.state.outfitData} />
        </div>
      </div>
    );
  }
}

export default App;