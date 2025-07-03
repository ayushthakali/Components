import { useState, useEffect } from "react";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return <div>CounterPage</div>;
}

export default CounterPage;
