import React from "react";
import { Button, Modal } from "react-bootstrap";
import { IProducts } from "@/model/IProducts";

interface INewProductModalProps {
  openNewProductModal: boolean;
  setOpenNewProductModal: (open: boolean) => void;
  newProduct: IProducts;
  onChangeNewProduct: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddToCart: (item: IProducts) => void;
}

export const NewProductModal: React.FunctionComponent<
  INewProductModalProps
> = ({
  openNewProductModal,
  setOpenNewProductModal,
  newProduct,
  onChangeNewProduct,
  handleAddToCart,
}) => {
  return (
    <Modal
      show={openNewProductModal}
      onHide={() => setOpenNewProductModal(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="basic-url" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
          name="title"
          onChange={(e) => {
            onChangeNewProduct(e);
          }}
        />
        <label htmlFor="basic-url" className="form-label mt-3">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
          name="price"
          onChange={(e) => {
            onChangeNewProduct(e);
          }}
        />
        <label htmlFor="basic-url" className="form-label mt-3">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
          name="description"
          onChange={(e) => {
            onChangeNewProduct(e);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleAddToCart(newProduct)}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
};
