import React, { Component } from 'react';
import RelatedCard from '../components/RelatedCard/RelatedCard.jsx'
import RelatedCardList from '../components/RelatedCardList/RelatedCardList.jsx'
import OutfitCardList from '../components/OutfitCardList/OutfitCardList.jsx'

import { BrowserRouter as Router, Link, Route } from 'react-router'
import axios from 'axios';

class RelatedAndOutfitApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProduct: 1,
      userSession: 60,
      relatedData: [],
      outfitData: [],
    }
    this.addOutfit = this.addOutfit.bind(this)
    this.gettingOutfit = this.gettingOutfit.bind(this)

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

  gettingOutfit() {
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
        this.setState(state => ({ outfitData: outfits }))
      })
  }

  //Conditional to prevent duplicate outfits being added to state

  // if (this.state.outfitData.length && this.state.outfitData['product_id'].includes(this.state.mainProduct) && this.state.outfitData['user_session'].includes(this.state.userSession)) {
  //   console.log('Outfit exists in this User_ID')
  // } else {
  addOutfit() {
    console.log(this.state.outfitData)

    if (this.state.outfitData.length === 0) {
      return this.gettingOutfit()
      // fix to look within objects in array
    }
    for (let i = 0; i < this.state.outfitData.length; i++) {
      console.log('In For', this.state.outfitData)
      if (this.state.outfitData[i]['product_id'] === this.state.mainProduct && this.state.outfitData[i]['user_session'] === this.state.userSession) {
        console.log('Outfit exists in this User_ID')
        break;
      }
    }
    console.log('Worked')
    return this.gettingOutfit()
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

export default RelatedAndOutfitApp;