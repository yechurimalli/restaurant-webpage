import React,{ useState } from 'react'
import Dish from './Dish'
const allDishes = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "/img1.avif",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "dinner",
      price: 13.99,
      img: "/img1.avif",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "/img1.avif",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "/img1.avif",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "/img1.avif",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "/img1.avif",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "/img1.avif",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "/img1.avif",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "/img1.avif",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
function DisplayDetails() {
    const [SelectDishtype,setSelectDishtype] =useState("all");
    function Selectbutton(category)
    {
        setSelectDishtype(category)
    }
    return (  
        <>
        <div className="head">
        <h1><i>Malli<span>49</span>Restaurant and beverages</i></h1>
        </div>
        <div className="main-Menu">
            <section className="button-type">
            <button onClick={()=>Selectbutton("all")}>ALL</button>
            <button onClick={()=>Selectbutton("breakfast")}>Breakfast</button>
            <button onClick={()=>Selectbutton("lunch")}>LUNCH</button>
            <button onClick={()=>Selectbutton("dinner")}>Dinner</button>
            </section>
        </div>
        <div className="dishtype" >
            
        {(allDishes).map(
            (dish,index)=>
            (SelectDishtype==="all" || SelectDishtype===dish.category)&&(
                <Dish
                img={dish.img}
                price={dish.price}
                title={dish.title}
                desc={dish.desc}/>
            )
                
            
        )

        }
            </div> 
        </>
    
    );
   
}

export default DisplayDetails;