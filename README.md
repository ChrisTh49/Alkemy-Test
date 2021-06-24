# Alkemy-Test
En este readme explicare un poco las rutas

Primero las rutas de usuario:
  Para iniciar la ruta de usuario primero se debe crear uno, para este se necesita un "Username, email y password";
  Luego al hacer logging se genera un token el cual en postman se debe colocar en el apartador header.
  Luego de hacer logging se puede utilizar la app con la creacion, edicion, etc de datos tanto de los personajes:
    /characters
    O las peliculas
    /movies
  Con estas rutas se pueden obtener un numero reducido de datos, pero si desea los detalles puede entrar a:
    /characters/"id" ejemplo: /characters/1
    O
    /movies/"id" ejemplo: /movies/1
  Y se mostraran todos los detalles.
  

Los datos de la base de datos entan en un archivo .env que pueden crear para utilizar la base de datos de manera segura y sencilla, igual que la frase secreta del JWT.
