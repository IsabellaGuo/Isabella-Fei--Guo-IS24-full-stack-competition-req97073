import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function Products() {
    const [backendData, setBackendData] = useState([]);
    
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
  
    useEffect(() => {
        fetch('/api').then(res => res.json()).then(data => {
        console.log("DATA: ", data.products)
            setBackendData(data.products.map(prod => {
                prod.id = prod.productId;
                return prod;
        }))
        })
        
    }, [])
 
    return (
        <div style={{ width: '100%', height: 400, marginTop:50 }}>
        
           
            {backendData.length && <DataGrid rows={backendData} columns={columns} pageSize={5} getRowHeight={getRowHeight} checkboxSelection /> }
            
      </div>
        
  )
}

export default Products;