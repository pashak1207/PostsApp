import React from "react";
import { connect, useDispatch } from "react-redux";
import { createPostAction } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    const { title } = this.state;
    if (!title.trim()) {
      return;
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPostAction(newPost);
    this.setState((prev) => ({ ...prev, title: "" }));
  };

  changeInputHandler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success mt-3" type={"submit"}>
          Створити
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPostAction,
};

export default connect(null, mapDispatchToProps)(PostForm);
