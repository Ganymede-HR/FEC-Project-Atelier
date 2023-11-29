import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetails from './components/ProductDetails';
import RelatedItems from './components/RelatedItems';
import QuestionsAndAnswers from './components/QuestionsAndAnswers';
import RatingsAndReviews from './components/RatingsAndReviews';
import './global.css';

const App = () => {
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then(response => {
        const firstProductId = response.data[0].id; 
        setProductId(firstProductId);
      })
      .catch(error => {
        console.error('Fail:', error);
      });
  }, []);

  return (
    <div>
      <div>hello from app</div>
      {productId && (
        <>
          <ProductDetails productId={productId} />
          <RelatedItems productId={productId} setProductId={setProductId} />
          <QuestionsAndAnswers />
          <RatingsAndReviews productId={productId} />
        </>
      )}
    </div>
  );
};

export default App;
