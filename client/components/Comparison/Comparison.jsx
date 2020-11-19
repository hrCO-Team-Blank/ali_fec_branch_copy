import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Comparison = ({ mainProduct, product, setModalIsOpen, count, setCount }) => {

  const [main, setMain] = useState([]);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${mainProduct}`)
      .then(res => setMain([res.data]))
      .catch(err => console.log(err))

    axios.get(`http://52.26.193.201:3000/products/${product}`)
      .then(res => setRelated([res.data]))
      .catch(err => console.log(err))
  }, []);

  // Render Features
  // let size = 0;
  // let featureArr = [];
  // related[0]['features'].length >= related[0]['features'].length ? size = related[0]['features'].length : size = main[0]['features'].length
  // for (let i = 0; i < size; i++) {
  //   featureArr.push(
  //     <tr>
  //       <td>{main[0]['features'][i]['value']}</td>
  //       <td>{main[0]['features'][i]['feature'] || { main[0]['features'][i]['feature'] }}</td>
  //       <td>{related[0]['features'][i]['value']}</td>
  //     </tr>
  //   )
  // }

  return (
    <div>
      <button onClick={(e) => { e.stopPropagation(); setModalIsOpen(false); }}> X </button>
      {/* { console.log(main)}
      { console.log(related)} */}
      {related.length &&
        <table >
          <tr>
            <th>{main[0]['name']}</th>
            <th>Comparison</th>
            <th>{related[0]['name']}</th>
          </tr>
          <tr>
            <td>{main[0]['slogan']}</td>
            <td>Slogan</td>
            <td>{related[0]['slogan']}</td>
          </tr>
          <tr>
            <td>{main[0]['description']}</td>
            <td>Description</td>
            <td>{related[0]['description']}</td>
          </tr>
          <tr>
            <td>{main[0]['category']}</td>
            <td>Category</td>
            <td>{related[0]['category']}</td>
          </tr>
          <tr>
            <td>{main[0]['default_price']}</td>
            <td>Price</td>
            <td>{related[0]['default_price']}</td>
          </tr>
          {/* // {featureArr} */}
        </table>}
    </div>
  );
}

export default Comparison;