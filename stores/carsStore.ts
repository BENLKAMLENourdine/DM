import { defineStore } from "pinia";
import type { CarsProps } from "~/components/organisms/CatalogCar.vue";
import { getCars, getPopularCars, getCarDetails } from "../services";
import type { carDetails } from "~/components/organisms/CarDetailsFrame.vue";

interface CarState {
    popularCars: Array<CarsProps>,
    recommendationCars: Array<CarsProps>,
    favoriteCarsIDs: Array<String>,
    search: string | null,
    currentPage: number,
    lastPage: number,
    carDetails: carDetails | null,
    displayOnlyFavorites: boolean
}

export const useCarsStore = defineStore("cars", {
  state: (): CarState => ({
    popularCars: [],
    recommendationCars: [],
    favoriteCarsIDs: [],
    search: null,
    currentPage: 1,
    lastPage: 1,
    carDetails: null,
    displayOnlyFavorites: false

  }),
  getters: {
    noMoreCars(): boolean {
        return this.currentPage === this.lastPage
    }
  },
  actions: {
    async fetchCars() {
      const callback = (context: { response: any }) => {
        const results = context.response._data
        this.recommendationCars = results.data
        this.lastPage = results.meta.last_page
      }

        await getCars(this.search, this.lastPage, callback)
      },

      async fetchPopularCars() {
        const callback = (context: { response: any }) => {
          this.popularCars = context.response._data
        }
        await getPopularCars(callback)
      },
  
      async fetchCarDetails(id: string) {
        const callback = (context: { response: any }) => {
          this.carDetails = context.response._data
        }
        await getCarDetails(id, callback)
      },

      async showMore() {
        ++this.currentPage

        const callback = (context: { response: any }) => {
          const results = context.response._data
          this.recommendationCars = [...this.recommendationCars, ...results.data]
          this.lastPage = results.meta.last_page
        }
  
        await getCars(this.search, this.lastPage, callback)
      },
      async searchAction(searchQuery: string) {
        this.search = searchQuery
        this.currentPage = 1

        const callback = (context: { response: any }) => {
          const results = context.response._data
          this.recommendationCars = results.data
          this.lastPage = results.meta.last_page
        }
  
        await getCars(this.search, this.lastPage, callback)
      },
      toggleLike(id: string) {
        const index = this.favoriteCarsIDs.indexOf(id);
        if (index !== -1) {
            this.favoriteCarsIDs.splice(index, 1);
        } else {
            this.favoriteCarsIDs.push(id);
        }
      },
      toggleDisplayType() {
        console.log('hjk')
        this.displayOnlyFavorites = !this.displayOnlyFavorites
      }
  }
});