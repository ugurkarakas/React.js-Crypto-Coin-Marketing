import React from 'react'
import "./Crypto.css";
const Crypto = ({name,image,symbol,marketcap,price,volume,priceChange}) => {
  return (
<div class="coin-card">
         <div class="head-partial">
             <img src={image}/>
             <p>{name} <b>{symbol}</b></p>
         </div>
         <div class="content-partial">
             <div class="content-item">
                 <p>Price</p><h6>${price}</h6>
             </div>
             <div class="content-item">
                 <p>24h %</p>
                 {priceChange < 0 ? (
                     <h6 class="text-red-500">{priceChange.toFixed(2)}%</h6>
                 ):(
                    <h6 class="text-green-500">{priceChange.toFixed(2)}%</h6>
                 )}
             </div>
             <hr />
             <div class="content-item">
             <div class='content-item-detail'>
                 <p>Market Cap</p><b>${marketcap.toLocaleString()}</b>
             </div>
             <div class='content-item-detail'>
                 <p>Volume</p><b>${volume.toLocaleString()}</b>
             </div>
             </div>          
         </div>
     </div>
  );
};

export default Crypto