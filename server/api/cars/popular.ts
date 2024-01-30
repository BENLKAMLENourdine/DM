export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const API_BASE_URL = config.public.API_BASE_URL;
    return await $fetch(`${API_BASE_URL}cars/popular`);
  });
  