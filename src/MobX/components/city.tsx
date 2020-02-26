import React, { useState } from "react";
import { useObserver, Observer } from "mobx-react-lite";
import { StoreContext } from "../Context";

export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map(city => (
        <li key={city}>{city}</li>
      ))}
    </ul>
  );
};

export const CitiesHeader = () => {
  const store = React.useContext(StoreContext);
  if (!store) throw Error("Store shouldn't be null");

  return useObserver(() => {
    return <h1>Number of cities: {store.cityCount}</h1>;
  });
};

export const CitiesList = () => {
  const store = React.useContext(StoreContext);
  if (!store) throw Error("Store shouldn't be null");

  return (
    <Observer>{ () => <CityView cities={store.Cities} /> }</Observer>
  )
};

export const CitiesForm = () => {
  const store = React.useContext(StoreContext);
  if (!store) throw Error("Store shouldn't be null");

  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        store.addCity(city);
        setCity("");
      }}>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      <button type="submit">Add City</button>
    </form>
  );
};
