import Home from "./assets/pages/home/Home";
import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
import "./App.css";



function App() {
	console.log('app')
    return (
		<div className="app">
			<Header />
			<Home />
			<Footer />
		</div>
    );
}

export default App;
