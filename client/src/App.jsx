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
      userSession: 67,
      relatedData: [],
      outfitData: [],
    }
    this.clickAddOutfit = this.clickAddOutfit.bind(this)
    this.gettingOutfit = this.gettingOutfit.bind(this)
    this.clickDeleteOutfit = this.clickDeleteOutfit.bind(this)
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
  // when you delete and add same outfit, duplicates arise
  gettingOutfit() {
    let addOutfitBody = {
      user_session: this.state.userSession,
      product_id: this.state.mainProduct
    }
    // for (let i = 0; i < this.state.outfitData.length; i++) {
    //   if (this.state.outfitData[i].product_id === this.state.mainProduct && this.state.outfitData[i].user_session === this.state.userSession) {
    // console.log('Outfit exists in this User_ID')
    // return;
    // }
    axios.post(`http://52.26.193.201:3000/cart/`, addOutfitBody)
      .then(res => {
        console.log(res);
        axios.get(`http://52.26.193.201:3000/cart/${this.state.userSession}`)
          .then(res => {
            var outfits = res.data;
            this.setState(({ outfitData: outfits }))
          })
      });
  }

  clickAddOutfit() {
    //Conditional to prevent duplicate outfits being added to state
    for (let i = 0; i < this.state.outfitData.length; i++) {
      if (this.state.outfitData[i].product_id === this.state.mainProduct && this.state.outfitData[i].user_session === this.state.userSession) {
        console.log('Outfit exists in this User_ID')
        return;
      }
    }
    return this.gettingOutfit()
  }

  clickDeleteOutfit(id) {

    // const newOutfitData = this.state.outfitData.filter(item => item.product_id !== id);
    // console.log(newOutfitData)
    this.setState(state => ({
      outfitData: state.outfitData.filter(item => item.product_id !== id)
    }))
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
            clickAddOutfit={this.clickAddOutfit}
            outfitData={this.state.outfitData}
            mainProduct={this.state.mainProduct}
            clickDeleteOutfit={this.clickDeleteOutfit}
          />
        </div>
      </div>
    );
  }
}

export default RelatedAndOutfitApp;