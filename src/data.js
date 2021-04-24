/**
 * @typedef Person
 * @type {Object}
 * @property {string} id - an ID.
 * @property {string} name - nome
 */

/** @type {[Person]}*/
export const data = [
  { id: 1, name: "omar" },
  { id: 2, name: "tazio" },
  { id: 3, name: "gianluca" },
  { id: 4, name: "anna" },
];

/**
 * @typedef Mobile
 * @type {Object}
 * @property {string} id - an ID.
 * @property {object} image - nome
 * @property {string} name - nome
 * @property {number} prezzo - prezzo
 */

/** @type {[Mobile]} */
export const datiIncompleti = [
  {
    id: "attcvDDMikF6G2iNi",
    image: {
      url:
        "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg",
    },
    nome: "divano bello",
    prezzo: 50.45,
  },
  {
    id: "attP2cUyxU35M1zbw",
    image: {
      url:
        "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    },
    name: "cosa carina",
    prezzo: 70.45,
  },
  {
    id: "attIieysyB9zQmQo9",
    image: {
      url:
        "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg",
    },
    nome: "cosa brutta",
    prezzo: 99.99,
  },
  {
    id: "attcvDDMikF6G2ifi",
    nome: "divano bello",
  },
];
