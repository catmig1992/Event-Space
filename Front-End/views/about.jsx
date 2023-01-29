const React = require("react");
const Def = require("./default.jsx");

function about() {
  return (
    <Def>
      <main>
        <h1>About us</h1>
        <div>
          <img src="" alt="" height="100px" width="100px" /> ///Still need to
          choose image///
          <div>
            <p>
              Planning a PARTY is our business! We are here for your every need
              to get the party started.
            </p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = about;
