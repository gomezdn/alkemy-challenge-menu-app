Repositorio donde resolver el challenge de frontend para aplicar a la aceleración de Alkemy.

Herramientas usadas: REACT, REACT-ROUTER-DOM, CHAKRA UI, SWEETALERT2, FORMIK.

Se consulta la API de Spoonacular para buscar recetas y añadirlas al menú el cual conservará (en localStorage) hasta 4 platos; 2 veganos y 2 no veganos. Si alguna de las dos categorías está llena, dará aviso y no dejará agregar otro plato igual. Lo mismo si el menú ya tiene los 4 platos.

Las rutas están protegidas con react-router-dom en base a la presencia del token que devuelve la API al loguearse con las credenciales correctas (email: challenge@alkemy.org, pass: react).

El login está validado con formik para verificar que no esté vacío, así como el input de búsqueda de recetas, el cual tiene que tener la menos dos caracteres.
