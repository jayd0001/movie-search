import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store/store";
import { MovieSearch } from "./components/MovieSearch/MovieSearch";
import GlobalStyle from "./GlobalStyle";
import { AppContainer, Title } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <AppContainer>
          <Title>Movie Search</Title>
          <MovieSearch />
        </AppContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
