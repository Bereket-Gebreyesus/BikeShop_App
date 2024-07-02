const data = [
    {
        "id": "1",
        "image": "https://ridersinc.in/wp-content/uploads/2023/03/EMotorad-X1-Blue1-2.jpg",
        "name": "Mountain Bike X1",
        "description": "A sturdy and reliable mountain bike designed for tough terrains and adventurous rides.",
        "category": "Mountain",
        "rating": 4,
        "price": 500,
        "createdAt": "2024-06-07"
    },
    {
        "id": "2",
        "image": "https://th.bing.com/th/id/OIP.xktuKbOBg6JUtOewL6RxoQHaHa?rs=1&pid=ImgDetMain",
        "name": "Road Bike Pro",
        "description": "A high-performance road bike perfect for long-distance rides and competitive cycling.",
        "category": "Road",
        "rating": 5,
        "price": 1200,
        "createdAt": "2024-05-10"
    },
    {
        "id": "3",
        "image": "https://www.balfesbikes.co.uk/images/products/F/FX/FXSport4Carbon_22_35785_C_Primary.jpg?width=480&height=480&format=webp&quality=70&scale=both",
        "name": "Hybrid Commuter",
        "description": "A versatile hybrid bike ideal for both city commuting and light trail rides.",
        "category": "Hybrid",
        "rating": 4,
        "price": 750,
        "createdAt": "2024-05-30"
    },
    {
        "id": "4",
        "image": "https://cdn.shopify.com/s/files/1/1367/1549/products/3_1600x_9d876cab-5841-4ddb-a716-7107847c1558.jpg?v=1549494518",
        "name": "Electric Cruiser",
        "description": "An electric bike that offers a comfortable and eco-friendly way to get around town.",
        "category": "Electric",
        "rating": 5,
        "price": 1500,
        "createdAt": "2024-06-10"
    },
    {
        "id": "5",
        "image": "https://cdn.shoplightspeed.com/shops/610051/files/59397732/fatboy-bmx-fatboy-bmx-stunt-10-mini-bmx.jpg",
        "name": "BMX Stunt Bike",
        "description": "A robust BMX bike designed for tricks and stunts at the skatepark.",
        "category": "BMX",
        "rating": 3,
        "price": 300,
        "createdAt": "2024-05-11"
    },
    {
        "id": "6",
        "image": "https://www.forall.com.gr/image/cache/catalog/podhlata%20new/mini-1602/mini-cooper-1602-black-bike-for-kids-15-1500x1500.jpg",
        "name": "Kids Bike Mini",
        "description": "A safe and fun bike designed specifically for young children.",
        "category": "Kids",
        "rating": 4,
        "price": 200,
        "upcoming": true
    },
    {
        "id": "7",
        "image": "https://i5.walmartimages.com/asr/1fd4d456-4cc8-43ca-a684-45ff83ba4787.b8929d0bd7a98e75f6d95aa97f5efc93.jpeg",
        "name": "BMX Racing Bike",
        "description": "A lightweight and agile BMX bike optimized for racing.",
        "category": "BMX",
        "rating": 4,
        "price": 450,
        "createdAt": "2024-05-15"
    },
    {
        "id": "8",
        "image": "https://i5.walmartimages.com/asr/04d59c06-2512-4969-bddc-958093cac5a0.7c5a1c1f4cf503f1129c8e6badcfa23e.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
        "name": "Fat Tire Bike",
        "description": "A mountain bike with extra-wide tires for better traction and stability on rough trails.",
        "category": "Mountain",
        "rating": 4,
        "price": 800,
        "createdAt": "2024-06-12"
    },
    {
        "id": "9",
        "image": "https://th.bing.com/th/id/R.304c5f265e385cccb8b56e1a908066c1?rik=xOC6%2fSuR7WdyuA&pid=ImgRaw&r=0",
        "name": "Carbon Fiber Bike",
        "description": "A lightweight mountain bike with a carbon fiber frame for enhanced durability and performance.",
        "category": "Mountain",
        "rating": 5,
        "price": 1800,
        "upcoming": true
    },
    {
        "id": "10",
        "image": "https://i.pinimg.com/originals/aa/00/a6/aa00a67fef7c089020619777dedc9251.jpg",
        "name": "Stealth Electric Bike",
        "description": "A powerful electric bike designed for off-road adventures and extreme terrain.",
        "category": "Electric",
        "rating": 5,
        "price": 2500,
        "createdAt": "2024-06-01"
    },
    {
        "id": "11",
        "image": "https://dbyvw4eroffpi.cloudfront.net/product-media/ZAB/1000/1000/Trek-Silque-SLX-Womens-Road-Bike-2016.jpg",
        "name": "Road Bike SLX",
        "description": "A high-end road bike engineered for speed and performance in road races.",
        "category": "Road",
        "rating": 5,
        "price": 2800,
        "createdAt": "2024-07-05"
    },
    {
        "id": "12",
        "image": "https://th.bing.com/th/id/OIP.O-dswsxdnpfCKFbusA-3vAHaGp?rs=1&pid=ImgDetMain",
        "name": "Carbon Hybrid Bike",
        "description": "A hybrid bike with a carbon frame for urban commuting and light trail riding.",
        "category": "Hybrid",
        "rating": 4,
        "price": 1200,
        "createdAt": "2024-06-10"
    },
    {
        "id": "13",
        "image": "https://th.bing.com/th/id/OIP.Vxodd8O0dGAWdoMxU2P2OQHaHa?rs=1&pid=ImgDetMain",
        "name": "Dual Sport Bike",
        "description": "A versatile bike suitable for both city commuting and trail adventures.",
        "category": "Hybrid",
        "rating": 4,
        "price": 950,
        "createdAt": "2024-06-15"
    },
    {
        "id": "14",
        "image": "https://th.bing.com/th/id/R.48671b58a9b096ab7fbc053f7e7403ab?rik=gKf7cXeV%2ban%2bQQ&riu=http%3a%2f%2fwww.american-vintage-bicycles.com%2fwp-content%2fuploads%2fWomens-Urban-Lady-Beach-Cruiser-Bike.jpg&ehk=q%2be7IxqbvJtbP%2fAMqIVICfNKpqvxlKleAhUv%2b%2bIqrkk%3d&risl=&pid=ImgRaw&r=0",
        "name": "Custom Cruiser Bike",
        "description": "A stylish cruiser bike customized for comfort and leisurely rides.",
        "category": "Cruiser",
        "rating": 3,
        "price": 600,
        "createdAt": "2024-06-20"
    },
    {
        "id": "15",
        "image": "https://cdn03.plentymarkets.com/5efrsgo5j3zq/item/images/106521/full/BB12215-Grau-02.jpg",
        "name": "Urban City Bike",
        "description": "A practical and lightweight bike designed for daily commuting in urban environments.",
        "category": "Urban",
        "rating": 4,
        "price": 400,
        "createdAt": "2024-06-02"
    },
    {
        "id": "16",
        "image": "https://theshardbike.com/wp-content/uploads/2020/06/012-scaled.jpg",
        "name": "Foldable Bike",
        "description": "A compact bike that folds for easy storage and transportation.",
        "category": "Urban",
        "rating": 3,
        "price": 350,
        "createdAt": "2024-06-01"
    },
    {
        "id": "17",
        "image": "https://th.bing.com/th/id/OIP.F16GDR2vYzIcAG3zy2an6gHaHa?rs=1&pid=ImgDetMain",
        "name": "Vintage Cruiser",
        "description": "A classic cruiser bike with vintage aesthetics and modern comfort features.",
        "category": "Cruiser",
        "rating": 4,
        "price": 700,
        "createdAt": "2024-06-25"
    },
    {
        "id": "18",
        "image": "https://bikeera.com/wp-content/uploads/2022/10/Bend-R5-RF-768x576-1.png",
        "name": "Touring Bike",
        "description": "A durable touring bike built for long-distance journeys and cycling adventures.",
        "category": "Touring",
        "rating": 5,
        "price": 2000,
        "createdAt": "2024-06-25"
    },
    {
        "id": "19",
        "image": "https://th.bing.com/th/id/OIP.toqHgI21BFjaUfO0kh7NfQAAAA?rs=1&pid=ImgDetMain",
        "name": "Cargo Bike",
        "description": "A sturdy bike with cargo capacity, ideal for transporting goods or children.",
        "category": "Utility",
        "rating": 4,
        "price": 1200,
        "createdAt": "2024-06-25"
    },
    {
        "id": "20",
        "image": "https://th.bing.com/th/id/OIP.hiavgPMdGl-oLWKuCrYBcgAAAA?w=440&h=440&rs=1&pid=ImgDetMain",
        "name": "Triathlon Bike",
        "description": "A specialized bike designed for triathlon competitions, optimized for speed and aerodynamics.",
        "category": "Triathlon",
        "rating": 5,
        "price": 3000,
        "createdAt": "2024-06-24"
    }
];



function getBikesByPage(page, bikesPerPage) {
    const startIndex = (page - 1) * bikesPerPage;
    const endIndex = startIndex + bikesPerPage;
    return data.slice(startIndex, endIndex);
}

function getTotalBikeCount() {
    return data.length;
}

function getAllBikes() {
    return data;
}

export { getBikesByPage, getTotalBikeCount, getAllBikes };
