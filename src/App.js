import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = <h2>Habib</h2>;
  const school = "codetrain";
  const image =
    "https://images.unsplash.com/photo-1691120040190-b763dfee386c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60";
  const paragraph = (
    <>
      <h3>kadiri</h3>
      <h3>Age 14</h3>
    </>
  );
  return (
    <section className="App">
      <h1>Hello world</h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1671718111925-5a32f89069b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
        style={{ width: 200, height: "300px" }}
      />
      <img src={image} />
      <div style={{ backgroundColor: "salmon" }}>
        {name}
        {paragraph}
        <h4>i attend {school}</h4>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor non
          accusantium beatae, recusandae qui corporis eaque neque error ea
          commodi, cupiditate cum voluptate perspiciatis quisquam? Voluptate
          veniam nulla omnis aut.
        </p>
      </div>
    </section>
  );
}

export default App;
