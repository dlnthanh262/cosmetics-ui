import React from "react";
import Moment from "moment";

const Blog = ({ post }) => {
  Moment.locale("vn");

  return (
    <div class="col-lg-4 col-md-4 col-sm-6">
      <div class="blog__item">
        <div class="blog__item__pic">
          <img src={`http://localhost:3000/assets/img/posts/${post.image}`} alt="" />
        </div>
        <div class="blog__item__text">
          <ul>
            <li>
              <i class="fa fa-calendar-o"></i>{" "}
              {Moment(post.createdAt).format("MMM d, YYYY")}
            </li>
            <li>
              <i class="fa fa-comment-o"></i> 5
            </li>
          </ul>
          <h5>
            <a href="#">{post.title}</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Blog;
