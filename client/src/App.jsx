import React, { Component } from 'react';
import styled from 'styled-components';
import RelatedCard from '../components/RelatedCard/RelatedCard.jsx'
import RelatedCardList from '../components/RelatedCardList/RelatedCardList.jsx'
import OutfitCardList from '../components/OutfitCardList/OutfitCardList.jsx'
import { BrowserRouter as Router, Link, Route } from 'react-router'
import axios from 'axios';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  margin: 10px 0px;
`;

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
      <Container>
        <article>
          <h3>RELATED PRODUCTS</h3>
        </article>
        <RelatedCardList
            //passing array of indices
            relatedData={this.state.relatedData}
          />
        <article>
          <h3>YOUR OUTFIT</h3>
        </article>
        <OutfitCardList outfitData={this.state.outfitData} />

      </Container>
    );
  }
}

export default App;