const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag")
      ]
    )
  ]
);

const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React jsx
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

