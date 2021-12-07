import React from "react";

const Blog = ({ post }) => {
  return (
    <div class="col-lg-4 col-md-4 col-sm-6">
      <div class="blog__item">
        <div class="blog__item__pic">
          <img src={`assets/img/posts/${post.image}`} alt="" />
        </div>
        <div class="blog__item__text">
          <ul>
            <li>
              <i class="fa fa-calendar-o"></i> May 4,2019
            </li>
            <li>
              <i class="fa fa-comment-o"></i> 5
            </li>
          </ul>
          <h5>
            <a href="#">${post.title}</a>
          </h5>
          <p>
            Sed quia non numquam modi tempora indunt ut labore et dolore magnam
            aliquam quaerat{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
