import { Provider } from "react-redux";
import Header from "./component/Header";
import Main from "./component/Main";
import store from "./redux/store";


function App() {
  return (
    <>
    <div style= {{marginInline : "2rem"}}>
      <Provider store = {store}>
        <Header/>
        <Main/>
      </Provider>
    </div>
    </>
  );
}

export default App;
