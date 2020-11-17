import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductCardThumbnail = ({ product }) => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${product}/styles`)
      .then(res => setStyles([res.data]))
      .catch(err => console.log(err))
  }, []);

  // console.log('Styles', styles[results])
  // [results][photos]

  return (
    <div>
      {styles.length && <img src={styles[0]['results'][0]['photos'][0]['thumbnail_url']} />}
    </div>
  );
}

export default ProductCardThumbnail;