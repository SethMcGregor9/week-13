import React from "react";

function Home() {
    return <div className="form">
    <form >
      <h3  className="title">Login</h3>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
       
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
    </div>

}

export default Home;