import "./styles.css";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Card from "../../components/Card";

function Catalog() {
  return (
    <>
      <Header></Header>
      <main className="ct-catalog-main">
        <section id="ct-catalog-section" className="ct-container">
          <div>
            <div className="ct-search-bar-container">
              <SearchBar></SearchBar>
            </div>
            <div className="ct-catalog-cards-container">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Catalog;
