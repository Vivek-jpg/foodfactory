import React, { useLayoutEffect, useState } from "react";
import "./styles.css";

var image = "🍔";

var Indian = [
  "Poori: Poori are flat circles of dough that have been deep fried in ghee or oil until they puff and become slightly crispy on the outside. Typically served with aloo ki sazi (stir-fried potatoes), this is a beloved comfort food in northern India:⭐⭐⭐⭐",
  "Tikka Masala: Tikka is the Hindi term for “small chunks,” and masala means a spice blend. So when small chunks of anything: ⭐⭐⭐",
  "Dum-Aloo Lakhwani: About Dum Aloo Lakhnavi Recipe: Fried potatoes stuffed with paneer, dizzled in a rich, spiced and tangy onion and tomato gravy. Rating: ⭐⭐⭐⭐",
  "Choley-Bhature: Chole bhature is a combination of chana masala (spicy white chickpeas) and bhatura/puri, a fried bread made from maida. Rating: ⭐⭐⭐⭐⭐",
  "Chana (Chole) Masala: Chana or Chole is the Hindi name for chickpeas. Chana masala is simply chickpeas cooked in an onion, ginger, and garlic-based sauce with garam masala added to it:⭐⭐⭐"
];

var Chinese = [
  "Dim Sums :Dim sums are a large range of small Chinese dishes that are traditionally enjoyed in restaurants for breakfast and lunch. Rating:⭐⭐⭐ ",
  "Sping Rolls: A blend of fresh cabbage, carrots, and onions with a hint of seasoning, wrapped in a deliciously flaky and crispy spring wrap. Rating: ⭐⭐⭐⭐⭐",
  "Singaporian Noodles: The Singapore Noodles are bursting with sweet-savory curry powder, aromatic garlic, ginger and onions along with a tantalizing sauce of chicken broth, soy sauce, oyster sauce, fish sauce, sesame oil, etc. Rating: ⭐⭐⭐⭐",
  "Szechwan Chilli Noodles:  Schezwan noodles is an immensely popular Indo chinese dish served in Indian Chinese restaurants. These are the most flavorful, spicy & hot. Rating: ⭐⭐⭐"
];

var German = [
  "Labskaus is not the most visually appealing dish, but a delectable mess that represents the seafaring traditions of northern Germany like no other. In the 18th and 19th centuries, ship provisions were mostly preserved fare, and the pink slop of labskaus was a delicious way of preparing them:⭐⭐⭐⭐",
 "Rouladenis a delicious blend of bacon, onions, mustard and pickles wrapped together in sliced beef or veal:⭐⭐⭐⭐"
];
var Italian = [
  "Pasta:Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes. Rating: ⭐⭐⭐⭐⭐",
  "Gelato: Gelato is a frozen dessert of Italian origin. It is made with a base of 3.25% butterfat whole milk and sugar. It is generally lower in fat than other styles. Rating: ⭐⭐⭐",
  "Lasagna: Lasagne, or the singular lasagna, is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù. Rating: ⭐⭐⭐⭐",
  "Pizza: Pizza is a large circle of flat bread baked with cheese, tomatoes, and sometimes meat and vegetables. Rating: ⭐⭐⭐⭐⭐"

];


export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function indianClickHandler() {
    var meaning = Indian.map((item) => {
      return (
        <ul>
          <li> {item}</li>
        </ul>
      );
    });
    setMeaning(meaning);
  }

  function chineseClickHandler() {
    var meaning = Chinese.map((item) => {
      return (
        <ul>
          <li> {item}</li>
        </ul>
      );
    });
    setMeaning(meaning);
  }
  function germanClickHandler() {
    var meaning = German.map((item) => {
      return (
        <ul>
          <li> {item}</li>
        </ul>
      );
    });
    setMeaning(meaning);
  }
  function italianClickHandler() {
    var meaning = Italian.map((item) => {
      return (
        <ul>
          <li style={{ maxWidth: "70%" }}>{item}</li>
        </ul>
      );
    });
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> {image} Food Mania</h1>
      <p>
        Are you a foodie? Check out my recommendations on food. Select your
        favourite cuisine and get started.{" "}
      </p>
      <button onClick={indianClickHandler}>Indian</button>
      <button onClick={chineseClickHandler}>Chinese</button>
      <button onClick={germanClickHandler}>German</button>
      <button onClick={italianClickHandler}>Italian</button>
      <hr></hr>
      <div>{meaning}</div>
    </div>
  );
}
