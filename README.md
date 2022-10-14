# Instituto Politécnico Formosa.
## Tec. en Desarrollo de Software Multiplataforma.

### Primer Examen Parcial - Back-End - Gestión de Usuarios y Tareas.

![Mi conejito](https://cdn.discordapp.com/avatars/320382643654885387/da398e2e3fa6acd867765248ee10acbf.webp?size=80)

### Para descargar el repositorio ejecutar el siguiente comando:
```bash
git clone https://github.com/AlsoFabio/trabajo-presentar.git
```

### Para ejecutar el proyecto, se debe tener instalado __Node.js__ y __npm__.

### Verificar versión de Node con:
```bash
node -v
```

### Verificar versión de npm con:
```bash	
npm -v
```

### Para instalar las dependencias que necesita este proyecto, ejecutar el siguiente comando:

```bash
npm install
```

### Para ejecutar el proyecto, ejecutar el siguiente comando:

```bash
npm run dev
```

### Una vez iniciado el servidor, cree un usuario nuevo con el metodo POST en:

```bash
http://localhost:3000/user
```

#### con el siguiente body:

```bash
{
 "name":"NombreDeEjemplo",
 "password":"ContraDeEjemplo",
 "email":"email@generico.com"
}
```

### Una vez generado el usuario debe realizar un login con el metodo POST en:

```bash
http://localhost:3000/login
```

#### siguiendo con los datos de ejemplo, con el siguiente body:

```bash
{
 "name":"NombreDeEjemplo",
 "password":"ContraDeEjemplo"
}
```

#### o registrarse con el usuario con rol de administrador:

```bash
  {
   "name":"Manolo",
   "password":"123456"
  }
```

### Copie el token en el apartado de headers para realizar las siguientes funciones:

#### con el metodo GET en [localhost:3000/users](http://localhost:3000/users) obtiene un listado de todos los usuarios (visible solo para los administradores).
#### con el metodo GET en [localhost:3000/users/](http://localhost:3000/users)(id del usuario a buscar) obtiene al usuario buscado.
#### con el metodo PUT en [localhost:3000/users/](http://localhost:3000/users)(id del usuario a modificar) realiza una modificación al usuario con el siguiente body:
##### los 3 datos son requeridos.
```bash
{
 "name":"NuevoNombre",
 "password":"NuevaContra",
 "email":"NuevoEmail"
}
```
#### con el metodo DELETE en [localhost:3000/users/](http://localhost:3000/users/)(id del usuario a eliminar) realiza un softdelete del usuario.

### Una vez registrado, puede empezar a generar tareas de la siguiente forma:

#### con el metodo POST en [localhost:3000/tasks](http://localhost:3000/tasks) realiza una nueva tarea con el siguiente body:
```bash
{
 "title":"TituloDeLaTarea",
 "description":"DescripcionDeLaTarea"
}
```
#### con el metodo GET en [localhost:3000/tasks](http://localhost:3000/tasks/) obtiene un listado de todas las tareas activas.
#### con el metodo GET en [localhost:3000/tasks/misTareas](http://localhost:3000/tasks/misTareas) obtiene un listado de todas las tareas activas realizadas por el usuario logeado.
#### con el metodo GET en [localhost:3000/tasks/](http://localhost:3000/tasks/)(id de la tarea a buscar) obtiene la tarea buscada.
#### con el metodo PUT en [localhost:3000/tasks/](http://localhost:3000/tasks/)(id de la tarea a modificar) realiza una modificación a la tarea con el siguiente body:
##### los 2 datos son requeridos.
```bash
{
 "title":"TituloDeLaTarea",
 "description":"DescripcionDeLaTarea"
}
```
#### con el metodo PUT en [localhost:3000/tasks/completar](http://localhost:3000/tasks/completar)(id del tarea a completar) completa la tarea.
#### con el metodo DELETE en [localhost:3000/tasks/eliminar](http://localhost:3000/tasks/eliminar)(id del tarea a eliminar) realiza un softdelete de la tarea.
