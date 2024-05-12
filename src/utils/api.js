export const fetchArticles = async () => {
  try {
    const res = await fetch(process.env.STRAPI_URL);
    console.log('Respuesta de la API:', res); // Agregar este console.log
    const data = await res.json();
    console.log('Datos de los artículos:', data); // Agregar este console.log
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

