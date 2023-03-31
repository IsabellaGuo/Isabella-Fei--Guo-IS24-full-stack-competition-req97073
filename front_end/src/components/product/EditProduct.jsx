import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import './EditProduct.css';

export default function EditProductForm({ editProduct, selectedProduct }) {
    const [openEditForm, setOpenEditForm] = useState(false);
    const prodId = useRef();
    const prodName = useRef();
    const prodOwner = useRef();
    const developers = useRef();
    const scrumMaster = useRef();
    const methodology = useRef();
    const startDate = useRef();

    Modal.setAppElement('#root');
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '20%',
            bottom: '10%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            borderRadius: '4px',
            height: 400,

        },
    };

    const handleClick = () => {
        setOpenEditForm(true);
    }

    // handleSubmit is a function that is called when the user clicks the submit button.
    const handleSubmit = (event) => {
        event.preventDefault();
        editProduct({
            productId: prodId.current.value,
            productName: prodName.current.value,
            scrumMasterName: scrumMaster.current.value,
            productOwnerName: prodOwner.current.value,
            Developers: developers.current.value.split(','),
            methodology: methodology.current.value,
            startDate: startDate.current.value,
        });
        setOpenEditForm(false);
    };

    const handleCancel = () => {
        setOpenEditForm(false);
    };

    return (
      <div>
        <Button
          className="edit-button"
          onClick={handleClick}
          variant="contained"
          disabled={!selectedProduct}
        >
          Edit a product
        </Button>
        <Modal
          isOpen={openEditForm}
          contentLabel="Example Modal"
          style={customStyles}
        >
          {openEditForm && (
            <form className="edit-form" onSubmit={handleSubmit}>
              <label className="edit-lable" htmlFor="id">
                Product Id:
              </label>
              <input
                className="edit-input"
                type="text"
                id="id"
                name="id"
                required
                ref={prodId}
                defaultValue={selectedProduct.id}
                disabled
              />
              <label className="edit-lable" htmlFor="name">
                Product Name:
              </label>
              <input
                className="edit-input"
                type="text"
                id="name"
                name="name"
                defaultValue={selectedProduct.productName}
                required
                ref={prodName}
              />
              <label className="edit-lable" htmlFor="productOwnerName">
                Product Owner
              </label>
              <input
                className="edit-input"
                type="text"
                id="productOwnerName"
                name="productOwnerName"
                ref={prodOwner}
                defaultValue={selectedProduct.productOwnerName}
                required
              />
              <label className="edit-lable" htmlFor="developers">
                Developers
              </label>
              <input
                className="edit-input"
                type="text"
                id="developers"
                name="developers"
                ref={developers}
                defaultValue={selectedProduct.Developers}
                required
              />
              <label className="edit-lable" htmlFor="scrummaster">
                Scrum Master
              </label>
              <input
                className="edit-input"
                type="text"
                id="scrummaster"
                name="scrummaster"
                ref={scrumMaster}
                required
                defaultValue={selectedProduct.scrumMasterName}
              />
              <label className="edit-lable" htmlFor="startDate">
                Start Date
              </label>
              <input
                className="edit-input"
                type="text"
                id="startDate"
                name="startDate"
                ref={startDate}
                defaultValue={selectedProduct.startDate}
                required
                disabled
              />
              <label className="edit-lable" htmlFor="methodology">
                Methodology
              </label>
              <input
                className="edit-input"
                type="text"
                id="methodology"
                name="methodology"
                ref={methodology}
                defaultValue={selectedProduct.methodology}
                required
              />
              <div className="buttons">
                <Button className="edit-save" type="submit" variant="contained">
                  Save
                </Button>
                <Button
                  className="edit-cancel"
                  onClick={handleCancel}
                  variant="contained"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </Modal>
      </div>
    );
}
