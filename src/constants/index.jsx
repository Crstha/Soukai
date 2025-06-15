
import {
  customized, deliverytruck, freshsupp,
  vegecat, winecat, fruitcat,
  juicecat
} from "../utils";


export const servicess = [
  {
    id: 1,
    titleKey: "services.customized.title",
    descriptionKey: "services.customized.desc",
    imgKey: customized,
  },
  {
    id: 2,
    titleKey: "services.farmFresh.title",
    descriptionKey: "services.farmFresh.desc",
    imgKey: freshsupp,
  },
  {
    id: 3,
    titleKey: "services.reliableDelivery.title",
    descriptionKey: "services.reliableDelivery.desc",
    imgKey: deliverytruck,
  }
];


export const ProductsCategory = [
  {
    id: 1,
    titleKey: "Juices",
    imgKey: juicecat
  },
  {
    id: 2,
    titleKey: "Vegetables",
    imgKey: vegecat
  },
  {
    id: 3,
    titleKey: "Fruits",
    imgKey: fruitcat
  },
  {
    id: 4,
    titleKey: "Wines",
    imgKey: winecat
  }
]

// export const ProductsList = [
//   {
//     category:"Vegetables",
//     name:"Kauli",
//     image:"ABC",
//     price:"$1"
//   },
//    {
//     category:"Fruits",
//     name:"MAngo",
//     image:"ABC",
//     price:"$1"
//   },
//    {
//     category:"Fruits",
//     name:"Orange",
//     image:"ABC",
//     price:"$1"
//   },
//    {
//     category:"Juices",
//     name:"Coca",
//     image:"ABC",
//     price:"$1"
//   },
//    {
//     category:"Wines",
//     name:"Red Label",
//     image:"ABC",
//     price:"$1"
//   }
// ]
export const TestimonialsData = [
  {
    restaurantId: 1,
    restaurantName: "Green Kitchen",
    representerName: "Sita Shrestha",
    representerPost: "Head Chef",
    profileImg: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
    testimonial: "Soukai always delivers fresh ingredients right on time. Their service has streamlined our kitchen workflow!"
  },
  {
    restaurantId: 2,
    restaurantName: "The Urban Fork",
    representerName: "Ramesh Khatri",
    representerPost: "Restaurant Manager",
    profileImg: "data:image/jpeg;base64,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",
    testimonial: "Working with Soukai has been a game-changer. We no longer worry about inventory — it's always taken care of."
  },
  {
    restaurantId: 3,
    restaurantName: "Harvest Lounge",
    representerName: "Aarati Lama",
    representerPost: "Purchasing Head",
    profileImg: "https://wallpapers.com/images/hd/pretty-profile-pictures-2tkqwa8t2rolierf.jpg",
    testimonial: "Their organic juice and wine selection is top-notch. Highly reliable for custom orders too."
  },
  {
    restaurantId: 4,
    restaurantName: "Spice Villa",
    representerName: "Dipen Maharjan",
    representerPost: "Executive Chef",
    profileImg: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg",
    testimonial: "Fresh vegetables, no delays, and excellent customer support — Soukai is our first choice."
  }
];


export const ProductsList = [
  // Vegetables
  {
    category: "Vegetables",
    name: "Broccoli",
    image: "https://cdn.pixabay.com/photo/2017/01/21/15/06/broccoli-1995056_1280.jpg",
    price: "$2.99"
  },
  {
    category: "Vegetables",
    name: "Carrot",
    image: "https://cdn.pixabay.com/photo/2018/03/05/21/26/carrots-3209613_1280.jpg",
    price: "$1.49"
  },
  {
    category: "Vegetables",
    name: "Cauliflower",
    image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/cauliflower-1866836_1280.jpg",
    price: "$3.25"
  },
  {
    category: "Vegetables",
    name: "Spinach",
    image: "https://cdn.pixabay.com/photo/2017/06/20/22/26/spinach-2426779_1280.jpg",
    price: "$1.99"
  },
  {
    category: "Vegetables",
    name: "Tomato",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238251_1280.jpg",
    price: "$2.20"
  },

  // Fruits
  {
    category: "Fruits",
    name: "Banana",
    image: "https://cdn.pixabay.com/photo/2018/05/23/20/35/bananas-3425336_1280.jpg",
    price: "$1.20"
  },
  {
    category: "Fruits",
    name: "Apple",
    image: "https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256262_1280.jpg",
    price: "$1.99"
  },
  {
    category: "Fruits",
    name: "Orange",
    image: "https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995057_1280.jpg",
    price: "$2.50"
  },
  {
    category: "Fruits",
    name: "Strawberries",
    image: "https://cdn.pixabay.com/photo/2017/01/20/15/06/strawberries-1995063_1280.jpg",
    price: "$3.00"
  },
  {
    category: "Fruits",
    name: "Pineapple",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/pineapple-1238284_1280.jpg",
    price: "$3.75"
  },

  // Juices
  {
    category: "Juices",
    name: "Orange Juice",
    image: "https://cdn.pixabay.com/photo/2017/09/05/21/51/glass-of-juice-2710991_1280.jpg",
    price: "$3.99"
  },
  {
    category: "Juices",
    name: "Apple Juice",
    image: "https://cdn.pixabay.com/photo/2017/01/20/15/06/apple-juice-1995058_1280.jpg",
    price: "$3.49"
  },
  {
    category: "Juices",
    name: "Carrot Juice",
    image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/carrot-1866828_1280.jpg",
    price: "$4.20"
  },
  {
    category: "Juices",
    name: "Grape Juice",
    image: "https://cdn.pixabay.com/photo/2016/12/06/18/27/grapes-1881635_1280.jpg",
    price: "$4.50"
  },
  {
    category: "Juices",
    name: "Pomegranate Juice",
    image: "https://cdn.pixabay.com/photo/2017/07/18/19/18/pomegranate-2512400_1280.jpg",
    price: "$5.00"
  },

  // Wines
  {
    category: "Wines",
    name: "Red Label Wine",
    image: "https://cdn.pixabay.com/photo/2017/06/20/18/29/wine-2426454_1280.jpg",
    price: "$9.99"
  },
  {
    category: "Wines",
    name: "White Label Wine",
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/03/wine-1841114_1280.jpg",
    price: "$11.50"
  },
  {
    category: "Wines",
    name: "Sparkling Wine",
    image: "https://cdn.pixabay.com/photo/2017/01/14/12/59/wine-1979573_1280.jpg",
    price: "$15.00"
  },
  {
    category: "Wines",
    name: "Rosé Wine",
    image: "https://cdn.pixabay.com/photo/2017/01/30/14/00/rose-2120439_1280.jpg",
    price: "$12.00"
  },
  {
    category: "Wines",
    name: "Dessert Wine",
    image: "https://cdn.pixabay.com/photo/2017/07/10/23/29/wine-2497695_1280.jpg",
    price: "$14.25"
  },

  // Dairy
  {
    category: "Dairy",
    name: "Milk",
    image: "https://cdn.pixabay.com/photo/2014/12/15/13/40/milk-569022_1280.jpg",
    price: "$2.50"
  },
  {
    category: "Dairy",
    name: "Cheddar Cheese",
    image: "https://cdn.pixabay.com/photo/2018/06/06/10/37/cheese-3452876_1280.jpg",
    price: "$4.99"
  },
  {
    category: "Dairy",
    name: "Butter",
    image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/butter-3004945_1280.jpg",
    price: "$3.49"
  },
  {
    category: "Dairy",
    name: "Yogurt",
    image: "https://cdn.pixabay.com/photo/2016/04/08/18/15/greek-yogurt-1310551_1280.jpg",
    price: "$2.75"
  },
  {
    category: "Dairy",
    name: "Mozzarella Cheese",
    image: "https://cdn.pixabay.com/photo/2016/03/05/22/43/cheese-1238697_1280.jpg",
    price: "$5.00"
  },

  // Grains
  {
    category: "Grains",
    name: "Rice",
    image: "https://cdn.pixabay.com/photo/2017/01/23/15/51/rice-2008796_1280.jpg",
    price: "$2.25"
  },
  {
    category: "Grains",
    name: "Wheat",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/wheat-1867352_1280.jpg",
    price: "$3.00"
  },
  {
    category: "Grains",
    name: "Oats",
    image: "https://cdn.pixabay.com/photo/2018/04/01/20/16/oats-3281848_1280.jpg",
    price: "$2.75"
  },
  {
    category: "Grains",
    name: "Quinoa",
    image: "https://cdn.pixabay.com/photo/2016/11/29/03/14/quinoa-1866769_1280.jpg",
    price: "$4.00"
  },
  {
    category: "Grains",
    name: "Barley",
    image: "https://cdn.pixabay.com/photo/2015/10/01/16/54/barley-967328_1280.jpg",
    price: "$3.50"
  },

  // Snacks
  {
    category: "Snacks",
    name: "Almonds",
    image: "https://cdn.pixabay.com/photo/2017/12/29/21/49/almonds-3045487_1280.jpg",
    price: "$6.99"
  },
  {
    category: "Snacks",
    name: "Cashews",
    image: "https://cdn.pixabay.com/photo/2017/02/20/15/23/cashew-nuts-2087800_1280.jpg",
    price: "$7.50"
  },
  {
    category: "Snacks",
    name: "Peanuts",
    image: "https://cdn.pixabay.com/photo/2016/04/22/19/29/peanuts-1344370_1280.jpg",
    price: "$3.99"
  },
  {
    category: "Snacks",
    name: "Popcorn",
    image: "https://cdn.pixabay.com/photo/2017/05/23/22/40/popcorn-2332107_1280.jpg",
    price: "$2.50"
  },
  {
    category: "Snacks",
    name: "Chocolate",
    image: "https://cdn.pixabay.com/photo/2017/02/18/20/09/chocolate-2079674_1280.jpg",
    price: "$4.50"
  },

  // Bakery
  {
    category: "Bakery",
    name: "Baguette",
    image: "https://cdn.pixabay.com/photo/2016/11/29/06/15/bread-1866538_1280.jpg",
    price: "$2.50"
  },
  {
    category: "Bakery",
    name: "Croissant",
    image: "https://cdn.pixabay.com/photo/2017/02/16/12/39/croissant-2070910_1280.jpg",
    price: "$3.25"
  },
  {
    category: "Bakery",
    name: "Muffin",
    image: "https://cdn.pixabay.com/photo/2016/11/29/13/29/muffin-1869241_1280.jpg",
    price: "$2.75"
  },
  {
    category: "Bakery",
    name: "Donut",
    image: "https://cdn.pixabay.com/photo/2017/06/16/11/40/donut-2411793_1280.jpg",
    price: "$1.50"
  },
  {
    category: "Bakery",
    name: "Bagel",
    image: "https://cdn.pixabay.com/photo/2017/03/10/11/25/bagels-2138038_1280.jpg",
    price: "$2.00"
  },

  // Beverages
  {
    category: "Beverages",
    name: "Coffee",
    image: "https://cdn.pixabay.com/photo/2016/11/21/15/03/coffee-1841059_1280.jpg",
    price: "$3.00"
  },
  {
    category: "Beverages",
    name: "Tea",
    image: "https://cdn.pixabay.com/photo/2017/01/14/12/59/tea-1979568_1280.jpg",
    price: "$2.75"
  },
  {
    category: "Beverages",
    name: "Soda",
    image: "https://cdn.pixabay.com/photo/2017/02/01/12/00/coca-cola-2027724_1280.jpg",
    price: "$1.50"
  },
  {
    category: "Beverages",
    name: "Energy Drink",
    image: "https://cdn.pixabay.com/photo/2016/03/05/22/07/energy-drink-1238298_1280.jpg",
    price: "$2.99"
  },
  {
    category: "Beverages",
    name: "Water Bottle",
    image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/water-1951843_1280.jpg",
    price: "$1.00"
  },

  // Meat
  {
    category: "Meat",
    name: "Chicken Breast",
    image: "https://cdn.pixabay.com/photo/2016/03/05/22/07/chicken-1238272_1280.jpg",
    price: "$5.50"
  },
  {
    category: "Meat",
    name: "Beef Steak",
    image: "https://cdn.pixabay.com/photo/2015/03/26/09/54/steak-690128_1280.jpg",
    price: "$10.00"
  },
  {
    category: "Meat",
    name: "Pork Chops",
    image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/pork-1866833_1280.jpg",
    price: "$7.00"
  },
  {
    category: "Meat",
    name: "Salmon Fillet",
    image: "https://cdn.pixabay.com/photo/2017/05/06/11/01/salmon-2293104_1280.jpg",
    price: "$9.25"
  }];