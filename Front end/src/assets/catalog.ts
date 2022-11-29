export interface Movie {
  id: string;
  title: string;
  year: number;
  description: string;
  trailerLink: string;
  cover: string;
  casting: string[];
}

export const billboard = [
  {
    id: 'starwars1999',
    title: 'Star Wars',
    year: 1999,
    description:
      'Obi-Wan Kenobi (Ewan McGregor) es un joven aprendiz caballero Jedi bajo la tutela de Qui-Gon Jinn (Liam Neeson) ; Anakin Skywalker (Jake Lloyd), quien después será padre de Luke Skywalker y se convertirá en Darth Vader, solamente es un niño de 9 años. Cuando la Federación de Comercio corta todas las rutas al planeta Naboo, Qui-Gon y Obi-Wan son asignados para solucionar el problema.',
    trailerLink: '',
    cover: 'starwars.jpg',
    casting: ['Ewan McGregor', 'Liam Neeson', 'Jake Lloyd'],
  },
  {
    id: 'wolfofwallstreet2013',
    title: 'The Wolf of Wall Street',
    year: 2013,
    description:
      "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador de la agencia bursátil Stratton Oakmont.",
    trailerLink: '',
    cover: 'wolfofwallst.jpg',
    casting: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie'],
  },
  {
    id: 'oceanseleven2001',
    title: "Ocean's eleven",
    year: 2001,
    description:
      'Justo después de salir de prisión en libertad condicional, Danny Ocean planea su próximo robo. En este caso, el carismático ladrón quiere robar 150 millones de dólares de tres casinos de Las Vegas. Para conseguir realizar el mayor atraco de casinos de la historia, necesitará un equipo de once hombres, cada uno el mejor en su campo. Sin embargo, surgirá un problema inesperado: el dueño de los casinos, Terry Benedic, está saliendo con Tess, la ex mujer de Danny.',
    trailerLink: 'https://www.youtube-nocookie.com/embed/imm6OR605UI',
    cover: 'oceanseleven.jpg',
    casting: [
      'George Clooney',
      'Matt Damon',
      'Brad Pitt',
      'Andy Garcia',
      'Julia Roberts',
    ],
  },
  {
    id: 'thebatman2020',
    title: "The Batman",
    year: 2020,
    description:
      'Justo después de salir de prisión en libertad condicional, Danny Ocean planea su próximo robo. En este caso, el carismático ladrón quiere robar 150 millones de dólares de tres casinos de Las Vegas. Para conseguir realizar el mayor atraco de casinos de la historia, necesitará un equipo de once hombres, cada uno el mejor en su campo. Sin embargo, surgirá un problema inesperado: el dueño de los casinos, Terry Benedic, está saliendo con Tess, la ex mujer de Danny.',
    trailerLink: '',
    cover: 'thebatman.jpg',
    casting: [
      'George Clooney',
      'Matt Damon',
    ],
  }
];
