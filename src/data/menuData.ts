export interface MenuItem {
  nameKey: string;
  price: string;
  descriptionKey?: string;
  popular?: boolean;
  vegetarian?: boolean;
}

export interface MenuCategory {
  id: string;
  nameKey: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "friet",
    nameKey: "cat.friet",
    items: [
      { nameKey: "menu.friet.klein", price: "€3,00" },
      { nameKey: "menu.friet.middel", price: "€4,00" },
      { nameKey: "menu.friet.groot", price: "€5,00" },
      { nameKey: "menu.friet.speciaal", price: "€5,50", descriptionKey: "menu.desc.speciaal", popular: true },
      { nameKey: "menu.friet.oorlog", price: "€5,50", descriptionKey: "menu.desc.oorlog" },
      { nameKey: "menu.friet.joppie", price: "€5,00", descriptionKey: "menu.desc.joppie" },
      { nameKey: "menu.friet.stoofvlees", price: "€8,50", descriptionKey: "menu.desc.stoofvlees", popular: true },
      { nameKey: "menu.friet.ketchup", price: "€4,50" },
      { nameKey: "menu.friet.loaded", price: "€9,00", descriptionKey: "menu.desc.loaded" },
    ],
  },
  {
    id: "snacks",
    nameKey: "cat.snacks",
    items: [
      { nameKey: "menu.snack.frikandel", price: "€2,50" },
      { nameKey: "menu.snack.kroket", price: "€2,50", popular: true },
      { nameKey: "menu.snack.kaassoufle", price: "€2,50", vegetarian: true },
      { nameKey: "menu.snack.bamischijf", price: "€2,50" },
      { nameKey: "menu.snack.nasischijf", price: "€2,50" },
      { nameKey: "menu.snack.mexicano", price: "€2,75" },
      { nameKey: "menu.snack.kipcorn", price: "€2,75" },
      { nameKey: "menu.snack.loempia", price: "€3,00" },
      { nameKey: "menu.snack.frikandelspeciaal", price: "€3,50", descriptionKey: "menu.desc.speciaal" }, // Reusing speciaal for frikandel speciaal
      { nameKey: "menu.snack.gehaktbal", price: "€3,00" },
      { nameKey: "menu.snack.viandel", price: "€2,75" },
      { nameKey: "menu.snack.berenhap", price: "€3,50" },
    ],
  },
  {
    id: "kapsalon",
    nameKey: "cat.kapsalon",
    items: [
      { nameKey: "menu.kapsalon.shoarma", price: "€10,50", descriptionKey: "menu.desc.kapsalon.std", popular: true },
      { nameKey: "menu.kapsalon.kip", price: "€10,50", descriptionKey: "menu.desc.kapsalon.std" },
      { nameKey: "menu.kapsalon.doner", price: "€11,00", descriptionKey: "menu.desc.kapsalon.std" },
      { nameKey: "menu.kapsalon.calzone", price: "€12,50", descriptionKey: "menu.desc.calzone", popular: true },
      { nameKey: "menu.kapsalon.falafel", price: "€10,50", descriptionKey: "menu.desc.kapsalon.std", vegetarian: true },
    ],
  },
  {
    id: "pizza",
    nameKey: "cat.pizza",
    items: [
      { nameKey: "menu.pizza.margherita", price: "€8,50", descriptionKey: "menu.pizza.margherita.desc", vegetarian: true },
      { nameKey: "menu.pizza.hawaii", price: "€10,00", descriptionKey: "menu.pizza.hawaii.desc" },
      { nameKey: "menu.pizza.pepperoni", price: "€10,50", descriptionKey: "menu.pizza.pepperoni.desc" },
      { nameKey: "menu.pizza.shoarma", price: "€11,00", descriptionKey: "menu.pizza.shoarma.desc", popular: true },
      { nameKey: "menu.pizza.tonno", price: "€10,50", descriptionKey: "menu.pizza.tonno.desc" },
      { nameKey: "menu.pizza.quattro", price: "€11,00", descriptionKey: "menu.pizza.quattro.desc", vegetarian: true },
      { nameKey: "menu.pizza.calzone", price: "€11,50", descriptionKey: "menu.pizza.calzone.desc" },
      { nameKey: "menu.pizza.special", price: "€12,50", descriptionKey: "menu.pizza.special.desc", popular: true },
    ],
  },
  {
    id: "burgers",
    nameKey: "cat.burgers",
    items: [
      { nameKey: "menu.burger.hamburger", price: "€5,50" },
      { nameKey: "menu.burger.cheeseburger", price: "€6,50" },
      { nameKey: "menu.burger.kipburger", price: "€6,50" },
      { nameKey: "menu.burger.defest", price: "€9,50", descriptionKey: "menu.burger.defest.desc", popular: true },
      { nameKey: "menu.burger.shoarma", price: "€7,00" },
      { nameKey: "menu.burger.doner", price: "€7,50" },
      { nameKey: "menu.burger.falafel", price: "€6,50", vegetarian: true },
    ],
  },
  {
    id: "schotels",
    nameKey: "cat.schotels",
    items: [
      { nameKey: "menu.schotel.shoarma", price: "€12,00", descriptionKey: "menu.schotel.shoarma.desc" },
      { nameKey: "menu.schotel.kip", price: "€12,00", descriptionKey: "menu.schotel.kip.desc" },
      { nameKey: "menu.schotel.doner", price: "€12,50", descriptionKey: "menu.schotel.doner.desc" },
      { nameKey: "menu.schotel.mix", price: "€13,50", descriptionKey: "menu.schotel.mix.desc", popular: true },
    ],
  },
  {
    id: "dranken",
    nameKey: "cat.dranken",
    items: [
      { nameKey: "menu.drink.cola", price: "€2,00" },
      { nameKey: "menu.drink.fanta", price: "€2,00" },
      { nameKey: "menu.drink.sprite", price: "€2,00" },
      { nameKey: "menu.drink.icetea", price: "€2,00" },
      { nameKey: "menu.drink.water", price: "€1,50" },
      { nameKey: "menu.drink.chocomel", price: "€2,50" },
      { nameKey: "menu.drink.milkshake", price: "€4,00", descriptionKey: "menu.desc.milkshake" },
      { nameKey: "menu.drink.ayran", price: "€2,00" },
    ],
  },
  {
    id: "desserts",
    nameKey: "cat.desserts",
    items: [
      { nameKey: "menu.dessert.softijst", price: "€2,50", popular: true },
      { nameKey: "menu.dessert.sorbet", price: "€4,50", descriptionKey: "menu.desc.sorbet" },
      { nameKey: "menu.dessert.vlaflip", price: "€3,50" },
      { nameKey: "menu.dessert.ijshoorn", price: "€1,50" },
    ],
  },
];
