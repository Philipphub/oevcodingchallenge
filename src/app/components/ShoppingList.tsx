"use client";
import React from "react";

import { truncateString } from "@/util/util";
import { IProducts } from "@/model/IProducts";
import { NewProductModal } from "@/app/components/NewProductModal";

interface IShoppingListProps {
  products: IProducts[];
}

export const ShoppingList: React.FunctionComponent<IShoppingListProps> = (
  props
) => {
  const [products, setProducts] = React.useState<IProducts[]>([]);
  const [cart, setCart] = React.useState<IProducts[]>([]);
  const [openNewProductModal, setOpenNewProductModal] =
    React.useState<boolean>(false);
  const [newProduct, setNewProduct] = React.useState<IProducts>({
    id: 0,
    title: "",
    description: "",
    price: 0,
  });

  React.useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  const onChangeNewProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddToCart = (item: IProducts) => {
    const formattedItem = {
      id: Math.round(Math.random() * 1000000),
      title: item.title,
      description: item.description,
      price: item.price,
    };
    const newCart = [...cart, formattedItem];
    setCart(newCart);
    setOpenNewProductModal(false);
    setNewProduct({
      id: 0,
      title: "",
      description: "",
      price: 0,
    });
  };

  return (
    <div className="container mt-5">
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: 716 }}
              onChange={(e) => {
                const filteredProducts = props.products.filter((item) => {
                  return item.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                });
                setProducts(filteredProducts);
              }}
            />

            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => setOpenNewProductModal(true)}
            >
              Add New Product to Cart
            </button>
          </div>
        </nav>
      </div>
      <div className="container mt-3">
        <div className="row row-cols-2">
          <div className="col-7">
            <div className="row row-cols-2">
              {products.map((item: IProducts) => {
                return (
                  <div className="col p-3" key={item.id}>
                    <div className="card">
                      <img
                        src={item.thumbnail}
                        className="card-img-top"
                        alt={item.description}
                        style={{
                          width: "100%",
                          height: 200,
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text" style={{ minHeight: 70 }}>
                          {truncateString(item.description, 100)}
                        </p>
                        <div
                          className="container"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <a
                            href="#"
                            className="btn btn-primary"
                            onClick={() => {
                              if (
                                cart?.find(
                                  (cartItem) => cartItem.id === item.id
                                )
                              ) {
                                return;
                              } else {
                                setCart([...cart, item]);
                              }
                            }}
                          >
                            Add to Cart
                          </a>
                          <p>{item.price},-</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-5">
            <p>My Products</p>
            {cart?.length === 0 ? (
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="currentColor"
                  className="bi bi-cart mt-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <p className="mt-3">Shoppingcart is empty</p>
              </div>
            ) : (
              <div className="container">
                <div className="container">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setCart([])}
                  >
                    Delete All
                  </button>
                  <ul className="list-group mt-3">
                    <li
                      className="d-flex list-group-item"
                      style={{
                        flexDirection: "row",
                        fontWeight: "bold",
                      }}
                    >
                      <div>Title</div>
                    </li>
                    {cart.map((item: IProducts) => {
                      return (
                        <li
                          className="d-flex list-group-item"
                          key={item.id}
                          style={{
                            justifyContent: "space-between",
                          }}
                        >
                          <div>{item.title}</div>
                          <div>{item.price},-</div>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash mt-1"
                            viewBox="0 0 16 16"
                            onClick={() => {
                              const newCart = cart.filter(
                                (cartItem) => cartItem.id !== item.id
                              );
                              setCart(newCart);
                            }}
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="d-flex justify-content-between mt-5">
                    <p>Total: </p>
                    <p>
                      {`${cart.reduce((acc, item) => {
                        return acc + item.price;
                      }, 0)},-`}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <NewProductModal
        openNewProductModal={openNewProductModal}
        setOpenNewProductModal={() => setOpenNewProductModal}
        onChangeNewProduct={onChangeNewProduct}
        handleAddToCart={handleAddToCart}
        newProduct={newProduct}
      />
    </div>
  );
};
