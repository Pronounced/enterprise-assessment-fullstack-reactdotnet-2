import React from "react";

import Post from "./components/Post";
import Feed from "./components/Feed";
import Admin from "./components/Admin";

/*
  READ THESE COMMENTS AS A PART OF STEP TWO

  To manage switching among the different views in this application, 
  we have implemented a "view switcher" in the `App` component. 

  There are three key parts to the view switcher:
    1. The `view` property defined on the `App` component's `state`
    2. The `changeView` method defined on the `App` component
    3. The `renderView` method defined on the `App` component

  The value of the `view` property will determine which gets returned by the
  `renderView` method, which is invoked inside the `App` component's `render`. 
  You can set the initial value of `view` in the `App` component's `constructor`
  function, determining what view gets rendered "by default".

  If you haven't modified this code yet, the view switcher observes the following rules:
  - The default view is 'feed'
  - If the view is set to 'feed', the `<Feed>` component is displayed
  - If the view is set to any other value, the `<Post>` component is displayed
  - The `changeView` function should change the value of `view` in the `App` component's state.

  You'll make some refactors and additions to this view switcher throughout the
  next steps of the assessment. When you're ready, return to the README.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      view: "feed",
      blogs: [],
      blog: null
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(option, data) {
    this.setState({
      view: option,
      blog: data
    });
  }

  renderView() {
    const { view } = this.state;

    if (view === "feed") {
      return <Feed blogs={this.state.blogs} handleClick={blog => this.changeView("post", blog)} />;
    } else if (view === "post") {
      return <Post blog={this.state.blog}/>;
    } else if (view === "admin") {
      return <Admin blogs={this.state.blogs}/>
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:5000/api/blogs")
    .then(response => response.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          blogs: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="logo" onClick={() => this.changeView("feed")}>
            BLOGMODO
          </span>
          <span
            className={
              this.state.view === "feed" ? "nav-selected" : "nav-unselected"
            }
            onClick={() => this.changeView("feed")}
          >
            See all Posts
          </span>
          <span className="nav-unselected">Write a Post</span>
          <span className="nav-unselected" onClick={() => this.changeView("admin")}>Admin</span>
        </div>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
