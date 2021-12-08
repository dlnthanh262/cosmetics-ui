import React from "react";

import Blog from "./Blog/Blog";

const Blogs = ({ posts }) => {
  return (
    <section class="from-blog spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title from-blog__title">
              <h2>Bài viết nổi bật</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {posts.map((post) => (
            <Blog post={post} key={post.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
