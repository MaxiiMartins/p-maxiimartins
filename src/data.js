import clima from "../public/images/proyectos/clima.jpg";
import lista from "../public/images/proyectos/lista.jpg";
import odontologia from "../public/images/proyectos/fas.jpg";
import dog from "../public/images/proyectos/pidogs.JPG"
import sneakers from "../public/images/proyectos/ecommerce.JPG"
import peliculas from "../public/images/proyectos/peliculas.JPG"

const proyectos = [
  {
    id: 1,
    title: "Turnos odontologia",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum ad ea! Impedit odio doloremque sequi corporis eligendi beatae atque quos",
    src: odontologia,
    url: "/turnos-odontologia",
    deploy: "https://turnos-odontologia.vercel.app/",
    link: "https://github.com/MaxiiMartins/proyecto-turnos"
  },
  {
    id: 2,
    title: "Aplicacion del clima",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum ad ea! Impedit odio doloremque sequi corporis eligendi beatae atque quos",
    src: clima,
    url: "/app-clima",
    deploy: "",
    link: "https://github.com/MaxiiMartins/10-app-react/tree/main/clima"
  },
  {
    id:3,
    title:"Lista de tarea",
    description:"Es una aplicación web simple donde podés gestionar una lista de tareas pendientes, podés agregar una tarea a tu lista y eliminar las tareas realizadas. Espero tengas una buena experiencia utilizando la aplicación. Saludos 👋",
    src: lista,
    url: "/lista",
    deploy: "https://lista-de-tarea-mx.vercel.app/",
    link:"https://github.com/MaxiiMartins/app-todo-react"
  },
  {
    id: 4,
    title: "Dogs",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum ad ea! Impedit odio doloremque sequi corporis eligendi beatae atque quos",
    src: dog,
    url: "/dogs",
    deploy: "https://dogs-app-murex.vercel.app/",
    link: "https://github.com/MaxiiMartins/PI-Dogs"
  },
  {
    id: 5,
    title: "Sneakers E-Commerce",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum ad ea! Impedit odio doloremque sequi corporis eligendi beatae atque quos",
    src: sneakers,
    url: "/sneakers-ecommerce",
    deploy: "https://sneakers-xxre.vercel.app/",
    link: "https://github.com/MaxiiMartins/pfinal_client"
  },
  {
    id: 6,
    title: "pelisflix",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum earum ad ea! Impedit odio doloremque sequi corporis eligendi beatae atque quos",
    src: peliculas,
    url: "/Pelisflix",
    deploy: "",
    link: "https://github.com/MaxiiMartins/"
  },
];


export default proyectos