import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary>Click Me!</Button>
      </div>
      <div>
        <Button secondary>Buy</Button>
      </div>
      <div>
        <Button success> Sell</Button>
      </div>
      <div>
        <Button warning>Come on</Button>
      </div>
      <div>
        <Button danger>Confirm</Button>
      </div>
    </div>
  );
}

export default App;
