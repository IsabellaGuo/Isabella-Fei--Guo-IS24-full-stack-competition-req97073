import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Used Material UI's data grid to create a table of products
function Products({products, editSelectedProduct}) {
   
    
    const columns = [
        {
            field: 'productId',
            headerName: 'Product ID',
            width: 170
        },
        {
            field: 'productName',
            headerName: 'Product Name',
            width: 170
        },
        {
            field: 'productOwnerName',
            headerName: 'Product Owner',
            width: 170
        },
        {
            field: 'Developers',
            headerName: 'Developers',
            width: 170,
            renderCell: (params) => (
                <ul>
                    {params.value.map((developer) => (
                        <li key={developer}>{developer}</li>
                    ))}
                </ul>
            ),
        },
        {
            field: 'scrumMasterName',
            headerName: 'Scrum Master',
            width: 170
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            width: 170
        },
        {
            field: 'methodology',
            headerName: 'Methodology',
            width: 170
        }
    ]

    const getRowHeight = (params) => {
        return 110;
    }
  
   

    const handleSelectedRow = (e) => { 
        console.log("Selected Row: ", e);
        const selectedProduct = products.find(prod => prod.id === e[0]);
        console.log("Selected Product: ", selectedProduct);
       editSelectedProduct(selectedProduct);
       
    }

    

 
    return (
        <div style={{ width: '100%', height: 400, marginTop:50 }}>
        
           
            {products.length && <DataGrid rows={products} columns={columns} pageSize={5} getRowHeight={getRowHeight} checkboxSelection onRowSelectionModelChange={handleSelectedRow} disableMultipleRowSelection={true} /> }
            
      </div>
        
  )
}

export default Products;