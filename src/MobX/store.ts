export const createStore = () => {
  return {
    Cities: ['Gotham'],

    get allCities(): Array<string> {
      return this.Cities
    },
    get cityCount(): Number {
      return this.Cities.length
    },
    addCity(city: string) {
      console.log('store: adding city: ' + city)
      this.Cities.push(city)
      console.log(this.Cities)
    }
  }
}

export type TStore = ReturnType<typeof createStore>
