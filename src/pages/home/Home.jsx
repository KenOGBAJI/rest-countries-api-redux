import "./home.css";
import Filter from "../../components/input/Filter"
import Search from "../../components/search/Search";
import Country from "../../components/Country";

const Home = () => {
  return (
    <section className="home-page-container">
      <div className="input-container">
        <Search />
        <Filter />
      </div>
      <Country />
    </section>
  );
};

export default Home;