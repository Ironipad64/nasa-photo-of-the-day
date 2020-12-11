import React, { useState, useEffect } from "react";
import "./App.css";


import axios from "axios";

function App() {

  useEffect(() => {
    axios
      .get()
      .then()
      .catch();
  }, []);



  return (
    // <div class="card" style="width: 18rem;">
    //   {/* <img src="..." class="card-img-top" alt="..."></img> */}
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>


    <div >
      {/* <img src="..."  alt="..."></img> */}
      <div >
        <h5 >Card title</h5>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" >Go somewhere</a>
      </div>
    </div>
  );

};

export default App;
