import React, { useState, useEffect } from 'react';
import axios from 'axios';


const OutfitInfo = ({ product }) => {

  const [info, setInfo] = useState([]);

  // componentDidMount rendering product info
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${product}`)
      .then(res => setInfo([res.data]))
      .catch(err => console.log(err))
  }, []);

  console.log('Info', info)

  return (
    <div>
      <div>
        {info.length && info[0]['category']}
      </div>
      <div>
        {info.length && info[0]['name']}
      </div>
      <div>
        $ {info.length && info[0]['default_price']}
      </div>
      <div>
        STAR RATING
      </div>
    </div>
  );
}

export default OutfitInfo;