import { hashSync } from 'bcrypt'
import { RoleEnum } from '../../constants'

export const seedUsers = [
  {
    fullName: 'John Doe',
    email: 'john.doe@gmail.com',
    password: hashSync('111111', 10),
    verified: new Date(),
    role: RoleEnum.user,
  },
  {
    fullName: 'Admin Admin',
    email: 'admin@gmail.com',
    password: hashSync('111111', 10),
    verified: new Date(),
    role: RoleEnum.admin,
  },
]

export const seedCategories = [
  {
    name: 'Pizzas',
  },
  {
    name: 'Breakfast',
  },
  {
    name: 'Snacks',
  },
  {
    name: 'Cocktails',
  },
  {
    name: 'Drinks',
  },
]

export const seedIngredients = [
  {
    name: 'Cheese Crust',
    price: 2.5,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
  },
  {
    name: 'Creamy Mozzarella',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Cheddar and Parmesan Cheese',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Spicy Jalapeño',
    price: 0.8,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Tender Chicken',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Mushrooms',
    price: 0.8,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Ham',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Spicy Pepperoni',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Spicy Chorizo',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Pickled Cucumbers',
    price: 0.8,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Fresh Tomatoes',
    price: 0.8,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Red Onion',
    price: 0.8,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Juicy Pineapples',
    price: 0.8,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Italian Herbs',
    price: 0.5,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Sweet Pepper',
    price: 0.8,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Feta Cheese Cubes',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Meatballs',
    price: 1,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }))

export const seedProducts = [
  {
    name: 'Omelette with ham and mushrooms',
    imageUrl: '/images/breakfast/0194b1f77c5670dca7df6e7b702d8db8.avif',
    categoryId: 2,
  },
  {
    name: 'Omelette with pepperoni',
    imageUrl: '/images/breakfast/0194b1f9d2e974849200ae997ed56dea.avif',
    categoryId: 2,
  },
  {
    name: 'Sandwich ham and cheese',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
    categoryId: 3,
  },
  {
    name: 'Chicken nuggets',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
    categoryId: 3,
  },
  {
    name: 'Oven baked potatoes with sauce 🌱',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
    categoryId: 3,
  },
  {
    name: 'Dodster',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
    categoryId: 3,
  },
  {
    name: 'Spicy Dodster 🌶️🌶️',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
    categoryId: 3,
  },
  {
    name: 'Banana milkshake',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp',
    categoryId: 4,
  },
  {
    name: 'Caramel apple milkshake',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp',
    categoryId: 4,
  },
  {
    name: 'Oreo cookie milkshake',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp',
    categoryId: 4,
  },
  {
    name: 'Classic milkshake 👶',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp',
    categoryId: 4,
  },
  {
    name: 'Coffee Caramel Cappuccino',
    imageUrl: '/images/drinks/11ee7d61aed6b6d4bfdad4e58d76cf56.avif',
    categoryId: 5,
  },
  {
    name: 'Coffee Coconut Latte',
    imageUrl: '/images/drinks/11ee7d61b19fa07090ee88b0ed347f42.avif',
    categoryId: 5,
  },
  {
    name: 'Coffee Americano',
    imageUrl: '/images/drinks/11ee7d61b02b810b8767d5ff70d15897.avif',
    categoryId: 5,
  },
  {
    name: 'Coffee Latte',
    imageUrl: '/images/drinks/11ee7d61b0c26a3f85d97a78feee00ad.avif',
    categoryId: 5,
  },
]

export const seedPizzas = [
  {
    name: 'Pepperoni fresh',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
    categoryId: 1,
    ingredients: {
      connect: seedIngredients.slice(0, 5),
    },
  },
  {
    name: 'Cheese',
    imageUrl:
      'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
    categoryId: 1,
    ingredients: {
      connect: seedIngredients.slice(5, 10),
    },
  },
  {
    name: 'Chorizo ​​fresh',
    imageUrl:
      'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
    categoryId: 1,
    ingredients: {
      connect: seedIngredients.slice(10, 40),
    },
  },
]
