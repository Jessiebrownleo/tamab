// Sample products data
 const products = [{
    id: '1',
    name: 'Premium Portland Cement (50kg)',
    price: 12.99,
    image: 'https://buildwholesale.co.uk/wp-content/uploads/A253-Mannok-Premium-Grade-Bagged-Cement.jpg',
    rating: 4.5,
    reviewCount: 128,
    category: 'Cement'
}, {
    id: '2',
    name: 'Red Clay Bricks (Pack of 500)',
    price: 249.99,
    image: 'https://etbricks.co.uk/wp-content/uploads/2022/09/73mm-red-class-b.png',
    rating: 4.8,
    reviewCount: 94,
    category: 'Bricks'
}, {
    id: '3',
    name: 'Professional Cordless Drill Set',
    price: 189.99,
    image: 'https://www.bosch-pt.com.my/my/en/ocsmedia/363996-54/application-image/1434x828/cordless-impact-drill-drivers-gsb-185-li-06019k31l2.png',
    rating: 4.7,
    reviewCount: 215,
    category: 'Tools',
    isNew: true,
    discount: 15
}, {
    id: '4',
    name: 'Premium Interior Wall Paint (5L)',
    price: 45.99,
    image: 'https://www.builders.co.za/media/sys-master%2Froot%2Fh0c%2Fh12%2F14262603644958%2Flarge_null',
    rating: 4.6,
    reviewCount: 87,
    category: 'Paint'
}, {
    id: '5',
    name: 'Ceramic Floor Tiles (60x60cm, Pack of 10)',
    price: 89.99,
    image: 'https://tileshop.scene7.com/is/image/TileShop/682058_instb1?$PDPNormal$&fmt=webp',
    rating: 4.4,
    reviewCount: 56,
    category: 'Tiles'
}, {
    id: '6',
    name: 'Steel Reinforcement Bars (10mm, Bundle of 10)',
    price: 149.99,
    image: 'https://res.cloudinary.com/rpo/image/upload/c_lpad,dpr_2.0,f_auto,h_190,q_auto,w_250/v1/media/wysiwyg/steel-acc_1.png?_i=AB',
    rating: 4.9,
    reviewCount: 42,
    category: 'Steel'
}, {
    id: '7',
    name: 'PVC Pipes (2 inch, 10ft, Pack of 5)',
    price: 35.99,
    image: 'https://m.media-amazon.com/images/I/51LQ+ZU-7NL._AC_UF1000,1000_QL80_.jpg',
    rating: 4.3,
    reviewCount: 38,
    category: 'Plumbing'
}, {
    id: '8',
    name: 'Electric Circular Saw (1200W)',
    price: 129.99,
    image: 'https://cdn11.bigcommerce.com/s-k5143b1jn4/images/stencil/1280x1280/products/424/2138/21-CS1500_1__13049.1713351134.jpg?c=1',
    rating: 4.7,
    reviewCount: 76,
    category: 'Tools',
    discount: 10
}, {
    id: '9',
    name: 'Quick-Setting Concrete Mix (25kg)',
    price: 18.99,
    image: 'https://m.media-amazon.com/images/I/61eVqLOIASL._UF1000,1000_QL80_.jpg',
    rating: 4.6,
    reviewCount: 65,
    category: 'Concrete'
}, {
    id: '10',
    name: 'Asphalt Roof Shingles (Bundle)',
    price: 79.99,
    image: 'https://images.contentstack.io/v3/assets/blt3c7ac6c04d3e0bdf/blt25127b06d4d42d30/66a165087aaa2249ed5fefe0/4-1-12-ca1-types-of-asphalt-roof.webp',
    rating: 4.5,
    reviewCount: 48,
    category: 'Roofing'
}, {
    id: '11',
    name: 'Fiberglass Insulation Roll (15m²)',
    price: 39.99,
    image: 'https://www.smartclima.com/wp-content/uploads/2013/08/Fiberglass-insulation-roll.jpg',
    rating: 4.3,
    reviewCount: 37,
    category: 'Insulation'
}, {
    id: '12',
    name: 'Pressure-Treated Lumber (2x4, 8ft)',
    price: 8.99,
    image: 'https://mobileimages.lowes.com/productimages/34986064-2800-4c02-913b-8267694d0c87/09303436.jpg',
    rating: 4.4,
    reviewCount: 82,
    category: 'Lumber'
}, {
    id: '13',
    name: 'White Portland Cement (25kg)',
    price: 15.99,
    image: 'https://images.thdstatic.com/productImages/e754a3c4-3034-40c2-be8e-a1bb915bda33/svn/txi-cement-4613-64_600.jpg',
    rating: 4.2,
    reviewCount: 45,
    category: 'Cement'
}, {
    id: '14',
    name: 'Concrete Blocks (8x8x16, Pack of 50)',
    price: 119.99,
    image: 'https://almanaratain.com/wp-content/uploads/2017/12/8-RAK-HOLLOW-LINE-BLOCK.png.webp',
    rating: 4.7,
    reviewCount: 63,
    category: 'Bricks'
}, {
    id: '15',
    name: 'Exterior Acrylic Paint (10L)',
    price: 89.99,
    image: 'https://premiumpaints.co.uk/cdn/shop/products/Everest-AcrylicBarnPaint-NoOverlay-270939.png?v=1705781034&width=1214',
    rating: 4.8,
    reviewCount: 72,
    category: 'Paint',
    discount: 5
}, {
    id: '16',
    name: 'Copper Plumbing Pipes (15mm, 3m)',
    price: 29.99,
    image: 'https://www.wmhendersoninc.com/wp-content/uploads/2013/04/shutterstock_163177421-scaled.jpg',
    rating: 4.6,
    reviewCount: 41,
    category: 'Plumbing'
}, {
    id: '17',
    name: 'Structural Steel I-Beam (6m)',
    price: 199.99,
    image: 'https://alcoengineering.co.uk/media/catalog/product/cache/e352fd44564c7981a7705eb82ca25a57/b/e/beam.jpg',
    rating: 4.9,
    reviewCount: 28,
    category: 'Steel',
    isNew: true
}, {
    id: '18',
    name: 'Ceramic Wall Tiles (30x60cm, Pack of 10)',
    price: 69.99,
    image: 'https://image.made-in-china.com/2f0j00tSqbJIylSukA/Create-Affordable-Nano-Ceramic-Wall-Tiles-to-Make-Your-Home-More-Beautiful-and-Durable.webp',
    rating: 4.5,
    reviewCount: 52,
    category: 'Tiles'
}, {
    id: '19',
    name: 'Power Hammer Drill (1500W)',
    price: 159.99,
    image: 'https://www.bosch-pt.com.my/my/en/ocsmedia/5955-54/application-image/1434x828/rotary-hammer-with-sds-plus-gbh-2-26-dre-061125376c.png',
    rating: 4.8,
    reviewCount: 94,
    category: 'Tools',
    discount: 12
}, {
    id: '20',
    name: 'Ready-Mix Concrete (1 cubic yard)',
    price: 149.99,
    image: 'https://mudloads.com/wp-content/uploads/2022/05/concrete-1.jpg',
    rating: 4.7,
    reviewCount: 58,
    category: 'Concrete'
}, {
    id: '21',
    name: 'Metal Roofing Sheets (10ft, Pack of 5)',
    price: 189.99,
    image: 'https://www.tbkmetal.com/wp-content/uploads/2022/04/Corrugated-Stainless-Steel-Roofing-Sheet-Metal.jpg',
    rating: 4.6,
    reviewCount: 39,
    category: 'Roofing'
}, {
    id: '22',
    name: 'Spray Foam Insulation Kit (600 sq ft)',
    price: 249.99,
    image: 'https://tigerfoam.com/wp-content/uploads/2021/02/tiger_3kits.jpg',
    rating: 4.5,
    reviewCount: 47,
    category: 'Insulation',
    discount: 8
}, {
    id: '23',
    name: 'Cedar Wood Planks (1x6, 8ft)',
    price: 12.99,
    image: 'https://www.woodboardsandbeams.com/x/cdn/?https://storage.googleapis.com/production-homestead-v1-0-0/000/200000/t6TKsecn/843c282c9bb147cda59ae4e98263a241',
    rating: 4.4,
    reviewCount: 76,
    category: 'Lumber'
}, {
    id: '24',
    name: 'Masonry Cement (25kg)',
    price: 14.99,
    image: 'https://m.media-amazon.com/images/I/61MzPpgg1AL._UF894,1000_QL80_.jpg',
    rating: 4.3,
    reviewCount: 53,
    category: 'Cement'
}, {
    id: '25',
    name: 'Concrete Paving Blocks (Pack of 100)',
    price: 179.99,
    image: 'https://eu.evocdn.io/dealer/1791/catalog/product/images/d_d_e_a_ddea6eb14c5f86793ec8083c74ee5d6401c37691_teklite_100mm_medium_dense_solid.png',
    rating: 4.7,
    reviewCount: 68,
    category: 'Bricks',
    isNew: true
}];

export default products;