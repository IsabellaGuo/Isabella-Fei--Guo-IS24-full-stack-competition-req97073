import React, { useEffect, useState } from 'react';



function App() {
  const [backendData, setBackendData] = useState([{}])
  const products = '' 
  
  useEffect(() => {
    fetch('/api').then(res => res.json()).then(data => {
      console.log("DATA: ", data)
      setBackendData(data.products)
    })
    
  }, [])
 
    return (
      <div>
        
        {(typeof backendData === 'undefined') ? (<p>Loading...</p>) : (backendData.map((product) => <div key={product.productId}><p>{product.productName}</p></div>))}
      </div>
        
  )
}

export default App;
