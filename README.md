# Reto Trainee para Fullstack Web Developer

Este proyecto fue desarrollado como parte de un reto para la posición de Trainee Fullstack. El objetivo del reto fue poner a prueba mis conocimientos en el desarrollo de APIs, conexión a bases de datos MySQL y habilidades en JavaScript Vanilla para consumir la API y mostrar la información de manera correcta.

![359shots_so](https://github.com/user-attachments/assets/00e5e03e-f08a-4e54-abc7-836ca51325b3)


## Estructura del Proyecto

![image](https://github.com/user-attachments/assets/f43ce81a-a59a-4374-8ad0-fd9b1b639ac0)


## Backend

El backend está construido con Express.js y proporciona una API para manejar las contrataciones. La información se almacena en un archivo JSON y se puede acceder a ella a través de varios endpoints.

### Endpoints

- `GET /contrataciones`: Obtiene todas las contrataciones.
- `GET /contrataciones/:table/:value`: Filtra las contrataciones por una columna específica y un valor.

### Configuración

1. Clona el repositorio.
2. Navega al directorio `backend`.
3. Instala las dependencias con `npm install`.
4. Inicia el servidor con `npm start`.

### Conexión a MySQL

Aunque la conexión a MySQL está comentada en el código, puedes habilitarla descomentando las líneas correspondientes y configurando los detalles de la conexión.

## Frontend

El frontend está construido con HTML, CSS y JavaScript Vanilla. Utiliza Vite para el desarrollo y la construcción del proyecto.

### Funcionalidades

- **Paginación**: Implementada en `Pagination.js`.
- **Búsqueda**: Implementada en `Search.js`.
- **Filtrado**: Implementado en `Filter.js`.
- **Exportación a JSON**: Implementada en `ExportJSON.js`.
- **Mostrar/Ocultar Columnas**: Implementada en `ToggleCols.js`.

### Configuración

1. Navega al directorio `frontend`.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor de desarrollo con `npm run dev`.

### Estructura de Archivos

- [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fdanil%2FOneDrive%2FDocuments%2FWorkspace%2FMaquetaci%C3%B3n%20de%20la%20Interfaz%20gr%C3%A1fica%20en%20HTML%20GA5%20220501095%20AA1%20EV04%2FEYcontratcs%2FElyonChallenge-1%2Ffrontend%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22d1ec5cef-92d5-4cfc-a571-99482ea6cc76%22%5D "c:\Users\danil\OneDrive\Documents\Workspace\Maquetación de la Interfaz gráfica en HTML GA5 220501095 AA1 EV04\EYcontratcs\ElyonChallenge-1\frontend\index.html"): Archivo principal HTML.
- `index.css`: Estilos globales.
- `src/scripts/actions/`: Contiene los scripts de JavaScript para las diferentes funcionalidades.
- `src/styles/`: Contiene los estilos específicos para componentes.
