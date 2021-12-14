import React, { useEffect } from "react";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import NumberFormat from "react-number-format";

const CartItem = ({ cartItem, onAdd }) => {
  const [itemCount, setItemCount] = React.useState(1);
  return (
    <tr>
      <td>
        <figure class="itemside">
          <div class="aside">
            <img
              src={`http://localhost:3000/assets/img/products/${cartItem.image}`}
              class="img-sm"
            />
          </div>
          <figcaption class="info">
            <a href="#" class="title text-dark">
              {cartItem.name}
            </a>
            <p class="text-muted small"></p>
          </figcaption>
        </figure>
      </td>
      <td>
        <ButtonGroup>
          <p className="product-detail-button-text">Số lượng: </p>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 1));
              //   onAdd(cartItem);
            }}
            className="product-detail-button"
            style={{ marginLeft: "60px" }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <p className="product-detail-button-text">{itemCount}</p>
          <Button
            onClick={() => {
              setItemCount(Math.min(itemCount + 1, 100));
              //   onAdd(cartItem);
            }}
            className="product-detail-button"
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </td>
      <td>
        <div class="price-wrap">
          <var class="price">{cartItem.unitPrice * cartItem.cartQuantity}</var>
          <small class="text-muted"> {cartItem.unitPrice} </small>
        </div>
      </td>
      <td class="text-right">
        <a
          data-original-title="Save to Wishlist"
          title=""
          href=""
          class="btn btn-light mr-2"
          data-toggle="tooltip"
        >
          {" "}
          <i class="fa fa-heart"></i>
        </a>
        <a href="" class="btn btn-light">
          {" "}
          Xóa
        </a>
      </td>
    </tr>
  );
};

export default CartItem;
