import clima from "../public/images/proyectos/clima.jpg";
import lista from "../public/images/proyectos/lista.jpg";
import odontologia from "../public/images/proyectos/fas.jpg";
import dog from "../public/images/proyectos/pidogs.JPG";
import sneakers from "../public/images/proyectos/ecommerce.JPG";
import peliculas from "../public/images/proyectos/peliculas.JPG";
import ticketfan from "../public/images/proyectos/ticketfan.jpg";
import goandstay from "../public/images/proyectos/goandstay.png";
import twitterclone from "../public/images/proyectos/twitterclone.png";
import encuestas from "../public/images/proyectos/encuestas.png";
import prode from "../public/images/proyectos/prode.png";

const proyectos = [
  {
    id: 645,
    title: "Prode | Tres Estrellas",
    description:"ESTAMOS CONTRUYENDO EL MEJOR LUGAR DONDE PRODRAS PONER A PRUEBA TUS HABILIDADES FUTBOLERA Y GANAR PLATA MIENTRAS TE DIVIERTES.",
    src: prode,
    url: "/prode",
    deploy: "",
    link: ""
  },
  {
    id: 231,
    title: "Encuestas de Reacciones",
    description:"'Encuestas de Reacciones' te brinda la posibilidad de crear imágenes de encuestas personalizadas, donde podrás elegir la pregunta o el tema a encuestar y dar opciones de respuesta utilizando las reacciones de LinkedIn, como Recomendar 👍, Celebrar 🎉, Interesante 💡, entre otras. Estas encuestas visualmente atractivas captarán la atención de tu red de LinkedIn y fomentarán la participación activa.",
    src: encuestas,
    url: "/encuestas",
    deploy: "https://encuestas-de-reacciones.vercel.app/",
    link: ""
  },
  {
    id: 6,
    title: "Twitter Clone",
    description:"En el proyecto clon de Twitter, trabajé en el área de frontend como parte del equipo de desarrollo. Mi contribución se enfocó en el desarrollo de componentes para la página de inicio, donde implementé funciones como crear y mostrar tweets, incluyendo fotos y ubicaciones, así como eliminar, dar 'me gusta' y comentar en los tweets. Además, implementé la detección de hashtags y la advertencia de contenido inapropiado. Asimismo, me aseguré de que los componentes fueran responsivos y se adaptaran a diferentes dispositivos para proporcionar una experiencia de usuario óptima.",
    src: twitterclone,
    url: "/twitter-clon",
    deploy: "https://twitter-nocountry-production.up.railway.app/",
    link: "https://github.com/No-Country/s8-07-t-node-react-twitter"
  },
  {
    id: 21,
    title: "Go && Stay",
    description:
      "Go && Stay es un sitio web de alquiler de alojamientos donde podrá encontrar de forma rápida, sencilla y segura, el hospedaje ideal en el destino de sus sueños. Tenemos alojamientos increíbles de los cuales usted podrá elegir el que más se acople a sus necesidades, haciendo que su estadía cuente con el hogar perfecto cuando está lejos de casa.",
    src: goandstay,
    url: "/goandstay",
    deploy: "",
    link: "https://github.com/No-Country/C10-G8-JavaReact"
  },
  {
    id: 1,
    title: "Ticket-FAN",
    description:
      " Ticket-FAN es una aplicación de venta de tickets de eventos musicales, deportivos, etc. Fue desarrollada por un grupo de 8 personas donde forme parte del front-end junto a otros compañeros, también se encontraban diseñadoras y desarrolladores back-end",
    src: ticketfan,
    url: "/ticket-fan",
    deploy: "https://ticketfan.vercel.app/",
    link: "https://github.com/No-Country/c8-09-t-csharp-react/"
  },
  {
    id: 2,
    title: "Turnos odontologia",
    description:
      "Es una pagina de un Consultorio Odontológico en donde los pacientes puedan pedir sus turnos online y tendra un panel donde podran administrar los turnos (EN DESARROLLO)",
    src: odontologia,
    url: "/turnos-odontologia",
    deploy: "https://turnos-odontologia.vercel.app/",
    link: "https://github.com/MaxiiMartins/proyecto-turnos"
  },
  {
    id: 3,
    title: "Aplicacion del clima",
    description:
      "Cree un Widget para poder consultar el clima de tu cuidad y te muestra la ubicacion. ",
    src: clima,
    url: "/app-clima",
    deploy: "",
    link: "https://github.com/MaxiiMartins/10-app-react/tree/main/clima"
  },
  {
    id: 4,
    title: "Lista de tarea",
    description:
      "Es una aplicación web simple donde podés gestionar una lista de tareas pendientes, podés agregar una tarea a tu lista y eliminar las tareas realizadas. Espero tengas una buena experiencia utilizando la aplicación. Saludos 👋",
    src: lista,
    url: "/lista",
    deploy: "https://lista-de-tarea-mx.vercel.app/",
    link: "https://github.com/MaxiiMartins/app-todo-react"
  },
  {
    id: 5,
    title: "Dogs",
    description:
      "Es una SPA (Single Page Application) con consumo de API (thedogapi.com) y una Base de datos propia. Podrás buscar una raza y ver más detalles de cada una también tendrás la posibilidad de crear una nueva raza.",
    src: dog,
    url: "/dogs",
    deploy: "https://dogs-app-murex.vercel.app/",
    link: "https://github.com/MaxiiMartins/PI-Dogs"
  },
  {
    id: 6,
    title: "Sneakers E-Commerce",
    description:
      "Aplicacion web para la compra de zapatillas. Soporta pago con QR, MercadoPago y PayPal. Dispone tanto de un panel de usuario donde revisar perfil, favoritos, carrito de compra e historial de compras, como de un panel de administrador con estadísticas de ventas, stock, categorías y usuarios donde crear, buscar, editar o eliminar cualquiera de los anteriores.",
    src: sneakers,
    url: "/sneakers-ecommerce",
    deploy: "https://sneakers-xxre.vercel.app/",
    link: "https://github.com/MaxiiMartins/pfinal_client"
  },
  {
    id: 7,
    title: "M-flix",
    description:
      "Es una pagina donde podras buscar las peliculas y series favoritas. El diseño esta orientado a una de las plataforma de streaming mas famosas. (EN DESARROLLO)",
    src: peliculas,
    url: "/mflix",
    deploy: "",
    link: "https://github.com/MaxiiMartins/"
  }
];

export default proyectos;
