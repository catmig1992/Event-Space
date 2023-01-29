// const React = require("react");

// function Index() {
//   return `Index Page`;
// }

// module.exports = Index;

//Note: the above code `Index Page` is temporary so an error is not thrown

// This file throws an error with the block of code below:

const React = require("react");
const Default = require("./layouts/Default");

function Index() {
  return (
    <Default>
      <h2>Index Page</h2>
    </Default>
  );
}

module.exports = Index;
