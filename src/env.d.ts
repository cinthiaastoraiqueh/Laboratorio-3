/// <reference types="astro/client" />

declare namespace NodeJS {
    interface ProcessEnv {
      API_END_POINT: string;
      API_KEY: string;
      API_BASE_ROUTE: string;
      STRAPI_URL: string;
      // Agrega otras variables de entorno según sea necesario
    }
  }
  