import React from 'react';
import './Global.css'
import './App.css'
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
          
          <div className="input-block">
            <label htmlFor="github_username">Usuario Github</label>
            <input type="text" name="github_username" id="github_username " required/>
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required/>
          </div>
          
          <div className="input-group">
            <label htmlFor="Usuario do GitHub"></label>
            <input type="text" name="github_username" id="username_github " required/>
          </div>

        </form>
      </aside>
      <main>
        <h2>Edson</h2>
      </main>

    </div>
  );
}

export default App;
