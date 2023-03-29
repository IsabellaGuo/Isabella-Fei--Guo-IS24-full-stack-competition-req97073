import React from 'react';

export default function Product(props) {
  return (
    <div className="product">
      <h2>{props.ProductName}</h2>
      <p>{props.productOwnerName}</p>
      <p>{props.scrumMasterName}</p>
      <p>{props.startDate}</p>
    </div>
  );
}