export const createStore = () => {
  const store = {
    Cities: ["Kolkata"],

    get allCities(): Array<string> {
      return store.Cities;
    },
    get cityCount(): Number {
      return store.Cities.length;
    },
    addCity: (city: string) => {
      console.log("store: adding city: " + city);
      store.Cities.push(city);
      console.log(store.Cities)
    }
  };

  return store;
};

export type TStore = ReturnType<typeof createStore>;
