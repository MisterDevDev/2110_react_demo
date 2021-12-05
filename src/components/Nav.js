import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 0, name: "popular" },
        { id: 1, name: "minecraft" },
        { id: 2, name: "wellthatsucks" },
        { id: 3, name: "memes" },
        { id: 4, name: "pcmasterrace" },
      ],
    };
  }
  render() {
    const { categories } = this.state;
    const { selectedCategory } = this.props;
    return (
      <nav>
        <div className="flexSpace">
          <img
            style={{ height: "3rem" }}
            src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Complete-White-Dark-Background-Logo.wine.svg"
          />
          <h2>Welcome to our Reddit App</h2>
          <img
            style={{ height: "3rem" }}
            src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Complete-White-Dark-Background-Logo.wine.svg"
          />
        </div>
        <div className="links">
          {categories.map((category) => {
            return (
              <div
                className={category.name === selectedCategory ? "selected" : ""}
                key={`${category.id}`}
                onClick={() => this.props.changeCategory(category.name)}
              >
                {category.name}
              </div>
            );
          })}
        </div>
      </nav>
    );
  }
}
