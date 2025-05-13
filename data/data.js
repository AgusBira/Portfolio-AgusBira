export const data = [
    {
        name:"Coliseum: E-commerce ",
        description: "Coliseum es E-Commerce de Videojuegos es una tienda en línea desarrollada con React.js, diseñada para ofrecer una experiencia fluida y dinámica en la compra de videojuegos.",
        img: "/images/colisumproyect.png",
        slug: "coliseum",
        tecnologies: ["React.js", "CSS3", "Firebase", "Context API",],
        images:["/images/ImagenesColiseum/imagen1.png",
        "/images/ImagenesColiseum/imagen2.png",
        "/images/ImagenesColiseum/imagen4.png",],
        links: [
            {
                name: "Demo",
                url: "https://coliseum-mu.vercel.app",
                img:"/images/iconocoliseum.png"
            },
            {
                name: "Github",
                url: "https://github.com/AgusBira/E-CommerceVideojuegos",
                img:"/images/github-mark-white.png"
            }
        ],
        longDescription:[
             
            {
                text:"Descripción General",
                style:"subtitle"
            }, 

            {
                text:"Coliseum es E-Commerce de Videojuegos es una tienda en línea desarrollada con React.js, diseñada para ofrecer una experiencia fluida y dinámica en la compra de videojuegos.",
                style:"normal"
            } ,
            {
                text:"Sus principales características incluyen:",
                style:"normal"
            },
            {
                text:["Agregar productos al carrito.","Ver detalles de cada producto (imágenes, descripción, precio, etc.).","Gestionar el carrito (aumentar/disminuir cantidad, eliminar items).","Proceder al checkout con un formulario para finalizar la compra."],
                style:"ul"
            }

        ]
    },
    {
        name: "Portfolio Personal",
        description:"Este mismo sitio web es uno de mis proyectos, construido con Next.js y taiwlind CSS. ",
        img:"/images/portfolioproyect.png",
        slug: "portfolio",
        tecnologies: ["Next.js","React.js" ,"Tailwind CSS", "Framer Motion","Shadcn UI"],
        links: [
            {
                name: "Demo",
                url: "https://portfolio-agus-bira.vercel.app",
                img:"/images/portafolio-profesional.png"
            },
            {
                name: "Github",
                url: "https://github.com/AgusBira/Portfolio-AgusBira",
                img:"/images/github-mark-white.png"
            }
        ],
        longDescription: [
            {
                text:"Descripción General",
                style:"subtitle"
            }, 

            {
                text:"Este portfolio es una aplicación web moderna y responsive, construida con Next.js, React.js y Tailwind CSS, diseñada para mostrar proyectos, habilidades y experiencia de manera elegante y eficiente.",
                style:"normal"
            } ,
            {
                text:"Características clave:",
                style:"normal"
            },
            {
                text:[" Rendimiento optimizado: Gracias a Next.js, el sitio tiene carga rápida, pre-renderizado y SEO mejorado."," Diseño responsive: Adaptable a cualquier dispositivo, utilizando Tailwind CSS para un desarrollo ágil y estilos consistentes.","Interacciones fluidas: Efectos animados y transiciones suaves para mejorar la experiencia del usuario.","Estructura modular: Componentes reutilizables en React para un código mantenible y escalable."],
                style:"ul"
            }
        ],
    }
]