
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

export const TestimonialsData = [
  {
    restaurantId: 1,
    restaurantName: "testies.sita.restaurant",
    representerName: "testies.sita.name",
    representerPost: "testies.sita.post",
    profileImg: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
    testimonial: "testies.sita.saying"
  },
  {
    restaurantId: 2,
    restaurantName: "testies.ramesh.restaurant",
    representerName: "testies.ramesh.name",
    representerPost: "testies.ramesh.post",
    profileImg: "data:image/jpeg;base64,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",
    testimonial: "testies.ramesh.saying"
  },
  {
    restaurantId: 3,
    restaurantName: "testies.aarati.restaurant",
    representerName: "testies.aarati.name",
    representerPost: "testies.aarati.post",
    profileImg: "https://wallpapers.com/images/hd/pretty-profile-pictures-2tkqwa8t2rolierf.jpg",
    testimonial: "testies.aarati.saying"
  },
  {
    restaurantId: 4,
    restaurantName: "testies.dipen.restaurant",
    representerName: "testies.dipen.name",
    representerPost: "testies.dipen.post",
    profileImg: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg",
    testimonial: "testies.dipen.saying"
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


  //customers

  export const partners = [
    {
      id:1,
      restaurantName:"Suranje",
      restaurantLogo:"data:image/png;base64,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"
    },
    {
      id:2,
      restaurantName:"Bamboo Chee",
      restaurantLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwpOstcRbWy8TvgsAjbMvNjg5adLb2xJmTPw&s"
    },
    {
      id:3,
      restaurantName:"Hongdae Pocha",
      restaurantLogo:"https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/3252b040ea3bed662a9769fb087aaf3f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=b91f34e4&x-expires=1750597200&x-signature=tG9j8TCO1N4EVOVwGN9ahSUiIag%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
    },
     {
      id:4,
      restaurantName:"Hongdae Pocha",
      restaurantLogo:"https://hongdaepocha.com/wp-content/uploads/2023/05/HPLOGOb.png"
    },
     {
      id:5,
      restaurantName:"Itchidoru",
      restaurantLogo:"data:image/jpeg;base64,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iKofUSdRX3W1gWNFQ7XczIXKQp14K8fw9vLqkgHanaO/fOB3qbS9a37TT9sjaqjwHpUp9SHWralfDasBte9whCcL8pCj2UDkYOQkNltmnen9nbhNSG4cZ+ScOSnQC46rsNxxzhOB8hXvE1M1Mv79oYgTCuM4puS8UAIaOxK0EnPIWFHH05AyKrfqreJd+6UN3CdbXLepy5JDbThypTY37VHgYyP9+xqV6S1DIkaSmxbxZptuXaICUPOS+W3gGzylf5uE5P8AzCgmolRzKMQPt/EhsOFneN4QTgKx3xkEZr2qidDXFVhkaGkagmBll+BNAcluhIaayC2MnsCEjA+YAq6bTdIl4hpmW9anIyyQ26UFIcA4ynPcex7H04oMfVFkY1HYZdolOKbZlJCVLQASMKB4z68VptGdOrBo59cm2NvuS1t+GqRIc3K25BIAAAHYelS6lArQa61I1pTTMu7OteMpsBLbROA4tRwAT7ep+Qrf18UlK0lK0hSSMEEZBoOVbh1IenKcWrSulEOrJy9+ywtf6qJBP1FRpmfHl3P4q+oefaxy3EKGc47AeXakfRNdfOaesjqtztnt61e6oqCf9K81aX08r8VitZ+sNv8A2oKS0/1jtOm4LcCyaPTGjBW5f9eypZ9VElGVH6n5dqtfp9rdnW0GTKYt0qGlhYQS7goWSPyqHfHr9R71nDRelg6h1OnLSlaDlJTCbGP4VvG0IbQENpCUJGAlIwAKD9UpSgUpSgUpSgUpSgUpSgUpSgUpSgx1QYipqZyorJloQW0vlseIlJ7pCu+PlWHaLBb7PMuMm3tKaVcHvHfRuJSXPVQHoT61tKUGuataRfHrs854jxZEdhOMBlvO5QHzUrBJ9kpHpktQWaLf7U9bZxcDLpSdzStq0KSoKSoH3BANbGlBqNS6btup7ai33htx2MlxLm1KygqIBAyR9ay59tjXCF8FKQVxTgLaz5VpH5Ve6e2R69jwSKzKUEU1L0+sOp7tEuN4Q+6qK34aWEu7WlJyTyAM+voRUpabQ02htpCUNoSEpSkYCQOwFfqlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB//Z"
    },
     
  ]