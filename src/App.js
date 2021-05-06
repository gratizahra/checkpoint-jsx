import './App.css';
import './style.css';
import imageinsrc from"./img.png"


function App() {
  return (
 <div className="App">
      <header className="App-header">
  
  <div>
    <h1 className='title red'>Zahra Grati</h1>
    <p className='parag'>Welcome to my web page</p>
    <br />
    <img src={imageinsrc} className="myimage" alt="imageinsrc" />
    <br />
    <img src={"/image.png"} className="imageinPublic" alt="imageinpublic"></img>
    <div className='vid'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7fPXI_MnBOY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
      </header>
  </div>

  );
}

export default App;
