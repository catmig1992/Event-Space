const React = require('react')
const Def = require('./default.jsx')

function home () {
    return (
      <Def>
<main>
  
    <h1>SPARKLY EVENT PLANNER</h1>
    <div>
      <img src="" alt="" height="100px" width="100px"/> ///Still need to choose image///
      <div>
        <h2>About us</h2>
        <p>Planning a PARTY is our business! We are here for your every need to get the party started.</p>
        <p>To get started, click "Build Your Own Event" and fill out the form. If you have questions.</p>
      </div>
    </div>
    <a href="">//Still need a route for the button// 
        <button className="btn-primary">Build Your Own Event</button>
    </a>
</main>


      </Def>
    )
  }
  

module.exports = home
