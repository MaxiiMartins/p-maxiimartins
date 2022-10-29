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
      "Es una pagina de un Consultorio Odontológico en donde los pacientes puedan pedir sus turnos online y tendra un panel donde podran administrar los turnos (EN DESARROLLO)",
    src: odontologia,
    url: "/turnos-odontologia",
    deploy: "https://turnos-odontologia.vercel.app/",
    link: "https://github.com/MaxiiMartins/proyecto-turnos"
  },
  {
    id: 2,
    title: "Aplicacion del clima",
    description:
      "Cree un Widget para poder consultar el clima de tu cuidad y te muestra la ubicacion. ",
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
      "Es una SPA (Single Page Application) con consumo de API (thedogapi.com) y una Base de datos propia. Podrás buscar una raza y ver más detalles de cada una también tendrás la posibilidad de crear una nueva raza.",
    src: dog,
    url: "/dogs",
    deploy: "https://dogs-app-murex.vercel.app/",
    link: "https://github.com/MaxiiMartins/PI-Dogs"
  },
  {
    id: 5,
    title: "Sneakers E-Commerce",
    description:
      "Aplicacion web para la compra de zapatillas. Soporta pago con QR, MercadoPago y PayPal. Dispone tanto de un panel de usuario donde revisar perfil, favoritos, carrito de compra e historial de compras, como de un panel de administrador con estadísticas de ventas, stock, categorías y usuarios donde crear, buscar, editar o eliminar cualquiera de los anteriores.",
    src: sneakers,
    url: "/sneakers-ecommerce",
    deploy: "https://sneakers-xxre.vercel.app/",
    link: "https://github.com/MaxiiMartins/pfinal_client"
  },
  {
    id: 6,
    title: "M-flix",
    description:
      "Es una pagina donde podras buscar las peliculas y series favoritas. El diseño esta orientado a una de las plataforma de streaming mas famosas. (EN DESARROLLO)",
    src: peliculas,
    url: "/mflix",
    deploy: "",
    link: "https://github.com/MaxiiMartins/"
  },
];


export default proyectos