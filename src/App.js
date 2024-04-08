import Body from "./component/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
