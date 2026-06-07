/**
 * Environment Configuration
 *
 * Este archivo centraliza las variables de configuración específicas del entorno
 * (desarrollo, producción, testing). Permite:
 *
 * - Definir constantes que cambian según el entorno (API keys, URLs, flags)
 * - Mantener el código limpio separando configuración de lógica
 * - Facilitar el despliegue en diferentes entornos sin modificar el código fuente
 *
 * Angular carga automáticamente el archivo environment.ts correspondiente
 * según la configuración de build (ng serve vs ng build --prod)
 */
export const environment = {
  production: true,
  companyName: 'Gifs',
  companyName2: 'App',
  companySlogan: 'Maneja tus gifs'

  //ApiKeys

  //URLs
};
