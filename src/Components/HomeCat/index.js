import React, { useState } from "react";
import "../../Components/HomeCat/HomeCat.css"; // Import your CSS file

const HomeCat = () => {
  const cards = [
    { 
      id: 1, 
      title: "Lace Knit Sweater ", 
       
      img: "https://m.media-amazon.com/images/I/71vpMVzDHeL._AC_UL480_FMwebp_QL65_.jpg",
      description: "A cozy intricately designed sweater with delicate lace knit patterns" 
    },
    { 
      id: 2, 
      title: "Wide-Leg Jeans ", 
     
      img: "https://shop.simon.com/cdn/shop/files/dd02328c48504858aaa1e2b075ccd432_360x.jpg?v=1736986755", 
      description: "Trendy high-waisted jeans with a relaxed, cropped wide-leg fit" 
    },
    { 
      id: 3, 
      title: "Oversized Sweater", 
       
      img: "https://m.media-amazon.com/images/I/71NQoj51TjL._AC_UL480_FMwebp_QL65_.jpg",
      description: "A warm and stylish oversized sweater with a classic cable knit texture" 
    },
    { 
      id: 4, 
      title: "High-Waist Jeans ", 
       
      img: "https://shop.simon.com/cdn/shop/files/ab66362739ec4b409e4dd858b38aa170_360x.jpg?v=1738976379", 
      description: "Edgy high-rise jeans featuring distressed details for a casual-chic look" 
    },
    { 
      id: 5, 
      title: "Fitted Crop Top", 
      
      img: "https://shop.simon.com/cdn/shop/files/56c715bdf1524617b6990d88376129f0_5bdc43d7-b728-4538-bf7c-1b0c1f4db692_360x.jpg?v=1723890956",
      description: "A sleek, modern co-ord set with a fitted top and flared bottoms" 
    },
    
   
    { 
      id: 6, 
      title: "Washed Denim Jeans", 
      
      img: "https://shop.simon.com/cdn/shop/files/b2b4463412954fbcbed6ff42fac5447d_360x.jpg?v=1736992462", 
      description: "Classic straight-leg jeans with a vintage-inspired washed denim finish" 
    },
    { 
      id: 7, 
      title: "Classic Denim Jacket", 
      img: "https://m.media-amazon.com/images/I/91cSZAc9RNL._AC_UL480_FMwebp_QL65_.jpg", 
      description: "A timeless, versatile denim jacket perfect for layering" 
    },
    { 
      id: 8, 
      title: "White Flared Pants", 
      
      img: "https://m.media-amazon.com/images/I/61mj3-lPlxL._AC_UL480_FMwebp_QL65_.jpg", 
      description: "Elegant high-rise white pants with a flattering flared silhouette" 
    },
    { 
      id: 9, 
      title: "Long-Sleeve Top", 
      
      img: "https://shop.simon.com/cdn/shop/files/fbea434ad25a49c4a93da6c1441fae8e_360x.jpg?v=1737152330", 
      description: "A chic wrap-style top with a soft ribbed texture" 
    },
    { 
      id: 10, 
      title: "Flare Pants", 
      
      img: "https://shop.simon.com/cdn/shop/files/adb06ce27d6d4af980b44dafee049c37_360x.jpg?v=1736898281", 
      description: "Vintage-style corduroy pants with a stylish flared leg" 
    },
   
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <section className="homeCat">
      <div className="wrapper12">
        <h1 className="h1">Exclusive Selections</h1>
        <div className="cols1">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`col1 ${hovered === card.id ? "hover" : ""}`}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="container1">
                <div
                  className="front"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="inner">
                    <p>{card.title}</p>
                    <span className="subtitle">{card.subtitle}</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCat;
