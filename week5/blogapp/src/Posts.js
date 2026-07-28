import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: ""
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      this.setState({ posts: data.slice(0, 10) });
    } catch (error) {
      this.setState({ error: "Unable to load posts" });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch() {
    this.setState({ error: "Something went wrong" });
    alert("Something went wrong in Posts component");
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
