
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import styles from "./assets/styles/App.module.scss";

function App() {
  return(
  <div className={`d-flex flex-column ${styles.appContainer}`}>
  <Header />
  <Homepage/>
  <Footer />

  </div>
  );

}

export default App;
