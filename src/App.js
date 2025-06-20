import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          <GoBell className="mr-1"/>
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Buy
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase /> Sell
        </Button>
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
