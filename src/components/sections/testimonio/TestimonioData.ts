import { User } from "@/interface/UserData";

interface Pilar {
  usuario?: User;
  opinion: string;
  roll: string;
}

export const Pilares: Pilar[] = [
  {
    usuario: {
      name: "Sauron",
      perfilIcon: "https://i.ibb.co/Zp9xvqZT/30-3.jpg",
    },
    opinion:
      "habiendo creado la comunidad original siento mucho cariño y un poco de orgullo ya que creo, fuimos (y tal vez seguimos siendo) la comunidad mas grande de latinoamerica. pienso que no podria haber mejor administracion que la actual para continuar con dicho legado. de corazon, les estoy muy agradecido a todos.",
    roll: "Administrador del servidor",
  },
  {
    usuario: {
      name: "Leforyer",
      perfilIcon: "https://i.ibb.co/SXGnv9QW/Leforyer.png",
    },
    opinion:
      "Recuerdo cuando encontré el canal de WOE: un fan del editor pidiendo que probaran su mapa lleno de bugs. Desde ese día supe que había hallado mi lugar en internet. En la comunidad encontré no solo conocimiento, sino también un grupo con quien compartir el día a día. WOE tiene mi eterno agradecimiento y cariño. Deseo que sigamos creciendo como editores y comunidad, llegando a más personas y disfrutando juntos de WC3.",
    roll: "Colaborador",
  },
  {
    usuario: {
      name: "Kadakash",
      perfilIcon: "https://i.imgur.com/mCGT9TR.jpeg",
    },
    opinion:
      "Siento orgullo por la comunidad que hemos logrado construir tras tantos años, destacando la paciencia y enfoque que tienen los colaboradores con quienes recién empiezan a diferencia de otras comunidades. Tanto así que cuando alguien logra terminar un mapa, modelo u otro aporte se siente como un logro colectivo.",
    roll: "Colaborador",
  },
  {
    usuario: {
      name: "",
      perfilIcon: "",
    },
    opinion: "",
    roll: "",
  },
  {
    usuario: {
      name: "Marcos_M",
      perfilIcon:
        "https://i.ibb.co/bjkdZp70/Captura-de-pantalla-2025-08-26-125716.png",
    },
    opinion:
      "La comunidad de editores latinoamericana existió desde siempre, en WorldEdit.com.ar me ayudaron a aprender. Fui aprendiendo la creación de hechizos, que sería mi foco de diversión a lo largo de todos los años, por entonces es que creamos WorldOfEditors, donde crecimos rápidamente hasta apagarnos por mucho tiempo, gracias a Zharko es que la comunidad ganó nueva vida y le estoy agradecido por ello",
    roll: "",
  },
  {
    usuario: {
      name: "",
      perfilIcon: "",
    },
    opinion: "",
    roll: "",
  },
];
