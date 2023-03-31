import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import './AddProduct.css';


export default function AddProductForm({ addNewProduct }){
    const [form, setForm] = useState(false);
    const prodId = useRef();
    const prodName = useRef();
    const prodOwner = useRef();
    const developers = useRef();
    const scrumMaster = useRef();
    const startDate = useRef();
    const methodology = useRef();

    // React Modal helps to create a modal popup window
    Modal.setAppElement('#root');
    // This is the styling for the modal popup window
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    
    const handleClick = () => {
        setForm(true);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addNewProduct({
            productId: Math.random().toString(16).slice(2),
            productName: prodName.current.value,
            scrumMasterName: scrumMaster.current.value,
            productOwnerName: prodOwner.current.value,
            Developers: developers.current.value.split(','),
            startDate: startDate.current.value,
            methodology: methodology.current.value,


        });
        setForm(false); 
    };
    const handleCancel = () => {
        setForm(false);
    };

    return (
      <div>
        <Button className="add-button"onClick={handleClick} variant="contained">Add a product</Button>
        <Modal isOpen={form} contentLabel="Example Modal" style={customStyles}>
          {form && (
            <form className="add-form" onSubmit={handleSubmit}>
              <label className="add-lable" htmlFor="id">Product Id:</label>
              <input type="text" id="id" name="id" required ref={prodId} />
              <label className="add-lable" htmlFor="name">Product Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                ref={prodName}
              />
              <label className="add-lable" htmlFor="productOwnerName">Product Owner</label>
              <input
                type="text"
                id="productOwnerName"
                name="productOwnerName"
                ref={prodOwner}
                required
              />
              <label className="add-lable" htmlFor="developers">Developers</label>
              <input
                type="text"
                id="developers"
                name="developers"
                ref={developers}
                required
              />
              <label className="add-lable" htmlFor="scrummaster">Scrum Master</label>
              <input
                type="text"
                id="scrummaster"
                name="scrummaster"
                ref={scrumMaster}
                required
              />
              <label className="add-lable" htmlFor="startDate">Start Date</label>
              <input
                type="text"
                id="startDate"
                name="startDate"
                ref={startDate}
                required
              />
              <label className="add-lable" htmlFor="methodology">Methodology</label>
              <input
                type="text"
                id="methodology"
                name="methodology"
                ref={methodology}
                required
              />
            <div className="buttons">
                <Button className="add-save" type="submit" variant="contained">Save</Button>
                <Button className="add-edit" onClick={handleCancel} variant="contained">Cancel</Button>    
            </div>
             
            </form>
          )}
        </Modal>
      </div>
    );
  
}