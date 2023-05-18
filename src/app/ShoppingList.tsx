import React from "react";

import styles from "@/app/page.module.css";

import { truncateString } from "@/util/util";
import { IProducts } from "@/model/IProducts";

interface IShoppingListProps {
  products: IProducts[];
}

export const ShoppingList: React.FunctionComponent<IShoppingListProps> = (
  props
) => {
  return (
    <main className={styles.main}>
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
          </div>
        </nav>
      </div>
      <div className="container mt-3">
        <div className="row row-cols-2">
          <div className="col-8">
            <div className="row row-cols-2">
              {props.products.map((item: IProducts) => {
                return (
                  <div className="col p-3">
                    <div className="card" key={item.id}>
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
                        <a href="#" className="btn btn-primary">
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-4 text-center">
            <p>My Products</p>
            <div>
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
          </div>
        </div>
      </div>
    </main>
  );
};
