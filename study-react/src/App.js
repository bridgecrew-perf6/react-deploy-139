import React from "react";
import ScrollBox from "./ScrollBox";
const App = () => {
  return (
    <div>
      <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
      <button onClick={() => this.scrollBox.scrollToBottom()} />
    </div>
  );
};

export default App;
