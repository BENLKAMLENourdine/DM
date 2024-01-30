
export async function getCars(q: string | null, page: number, callback: Function) {
  await useFetch(`/api/cars`, {
    key: 'recommendation-cars',
    query: {
      q,
      page
    },
    onResponse: callback
  })
}

export async function getPopularCars(callback: Function) {
  await useFetch(`/api/cars/popular`, {
    key: 'popular-cars',
    onResponse: callback
  })
}

export async function getCarDetails(id: string, callback: Function) {
  await useFetch(`/api/cars/${id}`, {
    key: 'car-details',
    onResponse: callback
  })
}