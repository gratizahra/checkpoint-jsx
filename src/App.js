
import './App.css';
import './style.css';
import imageinsrc from"./img.png"


function App() {
  return (
    <div className="App">
      <header className="App-header">
  
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className='title red'>Your name here</h1>
    <br />
    <img src={imageinsrc} className="myimage" alt="imageinsrc" />
    <br />
    <img src={"/image.png"} className="imageinPublic" alt="imageinpublic"></img>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
      </div>
      </header>
  </div>

  );
}

export default App;
