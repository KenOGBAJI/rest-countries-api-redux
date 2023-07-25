import "./filter.css";
import { useState, useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../../features/countries/countriesSlice";




const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropdown] = useState(false);

  const handleDropdown = () => {
    setDisplayDropdown(!displayDropDown)
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if(filter !== ""){
      dispatch(setRegion(filter.toLocaleLowerCase()));
    }

    return () => {
      dispatch(reset());
    }
  }, [dispatch, filter]);
  
  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down"></i>
      </div>
      {displayDropDown ? (
        <div className="dropdown">
          {regions.map((item, index) => {
          return (
            <div key={index} className="dropdown-item" onClick={() => {
              setFilter(item);
              handleDropdown();
            }} >{item}</div>
          )
        })}
        </div>
        
      ) : null}
    </section>
  );
};

export default Filter;
