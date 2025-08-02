import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCArA-M1kA28Zr-MfGA8AHrujVaJtBxkr0",
  authDomain: "tailsandtreats.firebaseapp.com",
  projectId: "tailsandtreats",
  storageBucket: "tailsandtreats.firebasestorage.app",
  messagingSenderId: "527033962954",
  appId: "1:527033962954:web:7e28cfc7505096487bff33"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Product list
const products = [
//   {
//     name: "Lamb & Rice Dog Kibble",
//     category: "Dog Food",
//     price: 18.29,
//     imageURL: "https://cdn.pixabay.com/photo/2016/11/23/15/42/dog-1851281_1280.jpg",
//     description: "Wholesome dry food made for your dog's daily needs."
//   },
//   {
//     name: "Grain-Free Chicken Dog Food",
//     category: "Dog Food",
//     price: 22.10,
//     imageURL: "https://cdn.pixabay.com/photo/2016/11/23/15/42/dog-1851281_1280.jpg",
//     description: "Wholesome dry food made for your dog's daily needs."
//   },
//   {
//     name: "Duck Delight Dry Food",
//     category: "Dog Food",
//     price: 25.40,
//     imageURL: "https://cdn.pixabay.com/photo/2016/11/23/15/42/dog-1851281_1280.jpg",
//     description: "Wholesome dry food made for your dog's daily needs."
//   },
//   {
//     name: "Chicken & Tuna Cat Mix",
//     category: "Cat Food",
//     price: 19.25,
//     imageURL: "https://cdn.pixabay.com/photo/2017/09/25/13/12/cat-2787381_1280.jpg",
//     description: "Delicious and nutritious meals your cat will love."
//   },
//   {
//     name: "Indoor Cat Nutrient Blend",
//     category: "Cat Food",
//     price: 23.15,
//     imageURL: "https://cdn.pixabay.com/photo/2017/09/25/13/12/cat-2787381_1280.jpg",
//     description: "Delicious and nutritious meals your cat will love."
//   },
//   {
//     name: "Feather Wand Teaser",
//     category: "Cat Toys",
//     price: 12.50,
//     imageURL: "https://cdn.pixabay.com/photo/2017/02/16/16/28/cat-2071237_1280.jpg",
//     description: "Interactive and fun toys for active cats."
//   },
//   {
//     name: "Squeaky Rubber Bone",
//     category: "Dog Toys",
//     price: 14.99,
//     imageURL: "https://cdn.pixabay.com/photo/2015/02/05/08/12/dog-624951_1280.jpg",
//     description: "Fun and durable toy designed for endless dog play."
//   },
//   {
//     name: "Premium Cat Food",
//     category: "Cat Food",
//     price: 24.99,
//     imageURL: "https://cdn.pixabay.com/photo/2017/09/25/13/12/cat-2787381_1280.jpg",
//     description: "Nutritious and tasty cat food for your feline friend."
//   },
//   {
//     name: "Organic Dry Dog Food",
//     category: "Dog Food",
//     price: 29.99,
//     imageURL: "https://cdn.pixabay.com/photo/2015/11/14/15/30/dog-food-1045958_1280.jpg",
//     description: "Healthy organic dry food for your dog."
//   },
//   {
//     name: "Catnip Mouse Toy",
//     category: "Cat Toys",
//     price: 9.99,
//     imageURL: "https://cdn.pixabay.com/photo/2016/03/27/18/03/cat-1285634_1280.jpg",
//     description: "Fun interactive toy filled with catnip."
//   },
//   {
//     name: "Chew Rope Toy",
//     category: "Dog Toys",
//     price: 12.99,
//     imageURL: "https://cdn.pixabay.com/photo/2019/09/27/18/56/dog-4509120_1280.jpg",
//     description: "Durable chew toy for active dogs."
//   },
//   {
//     name: "Gourmet Cat Treats",
//     category: "Cat Food",
//     price: 14.99,
//     imageURL: "https://cdn.pixabay.com/photo/2017/11/09/05/37/cat-2934720_1280.jpg",
//     description: "Delicious and healthy treats your cat will love."
//   }

 {
    name: "Beef Bites Dog Treats",
    category: "Dog Food",
    price: 15.99,
    imageURL: "https://cdn.pixabay.com/photo/2015/09/05/20/02/dog-924861_1280.jpg",
    description: "Tasty beef treats perfect for training and rewards."
  },
  {
    name: "Organic Salmon Cat Food",
    category: "Cat Food",
    price: 21.49,
    imageURL: "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_1280.jpg",
    description: "Premium wild salmon recipe for cats with sensitive stomachs."
  },
  {
    name: "Dental Care Dog Chews",
    category: "Dog Food",
    price: 13.25,
    imageURL: "https://cdn.pixabay.com/photo/2014/04/03/11/50/dog-312319_1280.png",
    description: "Cleans teeth while your dog enjoys a tasty treat."
  },
  {
    name: "Indoor Cat Dry Mix",
    category: "Cat Food",
    price: 18.95,
    imageURL: "https://cdn.pixabay.com/photo/2021/08/10/08/59/cat-6534512_1280.jpg",
    description: "Healthy dry food designed for indoor cats' activity level."
  },
  {
    name: "Crunchy Chicken Bites",
    category: "Dog Food",
    price: 19.80,
    imageURL: "https://cdn.pixabay.com/photo/2020/02/24/12/52/dog-4874790_1280.jpg",
    description: "Delicious protein-packed chicken treats for active dogs."
  },
  {
    name: "Catnip Mouse Toy Set",
    category: "Cat Toys",
    price: 9.49,
    imageURL: "https://cdn.pixabay.com/photo/2015/11/16/16/28/cat-1046544_1280.jpg",
    description: "Set of 3 soft catnip-filled mice for endless play."
  },
  {
    name: "Squeaky Plush Dog Toy",
    category: "Dog Toys",
    price: 11.75,
    imageURL: "https://cdn.pixabay.com/photo/2018/03/30/14/17/dog-3277416_1280.jpg",
    description: "Cuddly plush toy with built-in squeaker."
  },
  {
    name: "Multigrain Cat Kibble",
    category: "Cat Food",
    price: 16.95,
    imageURL: "https://cdn.pixabay.com/photo/2018/07/10/20/01/cat-3529809_1280.jpg",
    description: "A balanced diet of grains, protein and veggies for cats."
  },
  {
    name: "Tough Tug Rope",
    category: "Dog Toys",
    price: 13.40,
    imageURL: "https://cdn.pixabay.com/photo/2021/08/13/11/24/dog-6541860_1280.jpg",
    description: "Rope tug toy for bonding and tough chewers."
  },
  {
    name: "Cat Tower Ball Spinner",
    category: "Cat Toys",
    price: 17.25,
    imageURL: "https://cdn.pixabay.com/photo/2020/10/30/13/48/cat-5700031_1280.jpg",
    description: "Multi-level tower to keep cats chasing for hours."
  },
  {
    name: "Liver Bites Dog Treats",
    category: "Dog Food",
    price: 14.30,
    imageURL: "https://cdn.pixabay.com/photo/2020/11/09/13/44/dog-5728481_1280.jpg",
    description: "Irresistible freeze-dried liver snacks for pups."
  },
  {
    name: "Tuna Temptations Cat Treats",
    category: "Cat Food",
    price: 12.90,
    imageURL: "https://cdn.pixabay.com/photo/2021/11/01/17/36/cat-6760842_1280.jpg",
    description: "Savory tuna treats to reward your kitty’s best behavior."
  },
  {
    name: "Floating Fetch Toy",
    category: "Dog Toys",
    price: 10.85,
    imageURL: "https://cdn.pixabay.com/photo/2016/11/21/17/32/dog-1846380_1280.jpg",
    description: "Water-safe toy that’s perfect for fetch-loving dogs."
  },
  {
    name: "Hanging Feather Cat Toy",
    category: "Cat Toys",
    price: 13.90,
    imageURL: "https://cdn.pixabay.com/photo/2016/03/27/19/37/cat-1285634_1280.jpg",
    description: "A dangling toy that keeps cats jumping and chasing."
  },
  {
    name: "Salmon Snack Sticks",
    category: "Dog Food",
    price: 16.65,
    imageURL: "https://cdn.pixabay.com/photo/2017/05/16/17/31/puppy-2312447_1280.jpg",
    description: "Soft chewy sticks made with real salmon."
  },
  {
    name: "Tunnel Chase Cat Toy",
    category: "Cat Toys",
    price: 20.00,
    imageURL: "https://cdn.pixabay.com/photo/2017/06/20/22/59/cat-2421646_1280.jpg",
    description: "Collapsible play tunnel for hide-and-seek fun."
  }
];

async function uploadProducts() {
  for (const product of products) {
    try {
      await addDoc(collection(db, "products"), product);
      console.log(`✅ Added: ${product.name}`);
    } catch (err) {
      console.error("❌ Error adding product:", err);
    }
  }
}

// uploadProducts(); 
