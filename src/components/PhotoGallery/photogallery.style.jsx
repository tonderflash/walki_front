import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex; /* Usar Flexbox para organizar las columnas */
  gap: 10px; /* Espacio entre columnas */
  width: 100%;
  height: 100vh;
  background-color: #000; /* Fondo opcional */

  @media (max-width: 768px) {
    gap: 5px; /* Menos espacio en pantallas pequeñas */
  }
`;

export const Column = styled.div`
  flex: 1; /* Todas las columnas tienen el mismo ancho */
  display: flex;
  flex-direction: column; /* Las imágenes se apilan verticalmente */
  gap: 10px; /* Espacio entre imágenes */
`;

export const PhotoItem = styled.div`
  img {
    width: 100%; /* La imagen llena el ancho de la columna */
    height: auto; /* Mantiene la proporción natural */
    display: block; /* Evitar espacios inline */
  }
`;