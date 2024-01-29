import Home from './assets/pages/home/Home';
import Header from './assets/components/header/Header';
import './App.css';

function App() {
  

  return (
    <div itemType='https://schema.org/WebPage' itemScope='itemScope' className="page-template page-template-elementor_header_footer page page-id-1617 wp-custom-logo ast-desktop ast-page-builder-template ast-no-sidebar astra-4.6.3 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-template-full-width elementor-kit-6 elementor-page elementor-page-1617">
      <a className="skip-link screen-reader-text" href="#content" role="link" title="Aller au contenu"> Aller au contenu</a>
      <div className="hfeed site" id="page">
        <Header />
        <Home />
      </div>   
      <div id="wa"></div>           
    </div>
  )
}

export default App
