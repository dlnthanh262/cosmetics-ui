import React, { useEffect } from "react";
import { Button, Modal, Input } from "react-bootstrap";
import axios from "axios";

async function addCategory(category) {
  return fetch("http://localhost:8080/api/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  }).then((data) => data.json());
}

const Category = () => {
  const [show, setShow] = React.useState(false);
  const [categories, setCategories] = React.useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = React.useState("");
  const [parentCategoryId, setParentCategoryId] = React.useState(0);
  const [coupon, setCoupon] = React.useState("");
  const [active, setActive] = React.useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addCategory({
      name,
      parentCategoryId,
      coupon,
      active
    });
  };

  const fetchCategories = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/categories");
      setCategories(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-2 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Tìm kiếm"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            class="col-5 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>Chi tiết bảng phân loại</h2>
          </div>
          <div class="col-2 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Thêm phân loại
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive ">
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Tên </th>
                  <th>Phân loại cha</th>
                  <th>Mã khuyến mãi</th>
                  <th>Kích hoạt</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.parentCategoryId}</td>
                    <td>{item.coupon == null ? 'Không áp dụng' : item.coupon}</td>
                    <td>{item.active == true ? 'Có' : 'Không'}</td>
                    <td>
                      <a
                        href="#"
                        class="edit"
                        title="Edit"
                        data-toggle="tooltip"
                      >
                        <i class="material-icons">&#xE254;</i>
                      </a>
                      <a
                        href="#"
                        class="delete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i class="material-icons">&#xE872;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Thêm phân loại</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="nameInput"
                    aria-describedby="emailHelp"
                    placeholder="Tên phân loại"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="form-group mt-3">
                  <select class="form-control" id="parentCategoryIdInput" onChange={e => setParentCategoryId(e.target.value)}>
                    <option selected value="0">Phân loại cha</option>
                    {categories.map((item) => (
                      <option value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    id="couponInput"
                    aria-describedby="emailHelp"
                    placeholder="Coupon"
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                </div>
                <div class="form-check form-switch form-group mt-3">
                <input class="form-check-input" type="checkbox" role="switch" id="activeInput" checked/>
                <label class="form-check-label" for="flexSwitchCheckChecked" onChange={(e) => setActive(e.target.value)}>Kích hoạt</label>
                </div>

                <button type="submit" class="btn btn-success mt-4">
                  Thêm
                </button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  );
};

export default Category;
