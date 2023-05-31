import React, { useEffect, useState } from "react";

export default function Headline() {
  const [words] = useState([
    "Delicious food at unbeatable prices. Enjoy a wide range of mouthwatering dishes prepared by our expert chefs, all at affordable prices!",
    "Save big on your favorite meals. Discover amazing deals and discounts on the dishes you love the most. Don't miss out on the opportunity to save!",
    "Exclusive discounts for food lovers. As a valued customer, you'll have access to exclusive discounts and special offers that are tailored just for you!",
    "Treat yourself with our amazing offers. Indulge in a culinary experience like no other with our irresistible offers and promotions. You deserve it!",
    "Earn rewards while enjoying tasty dishes. With our rewards program, you can earn points for every meal you enjoy and redeem them for exciting rewards!",
    "Discover mouthwatering deals and promotions. Explore a world of flavors and discover incredible deals and promotions on a wide variety of dishes!",
    "Savor the flavors without breaking the bank. Our budget-friendly options allow you to savor delicious flavors without worrying about your wallet!",
    "Get more value with our food rewards program. Join our rewards program and unlock a world of benefits, including exclusive discounts and special perks!",
    "Indulge in culinary delights with great savings. Indulge in a gastronomic journey while enjoying great savings on your favorite dishes!",
    "Enjoy special offers from top restaurants. We partner with the best restaurants in town to bring you exclusive offers and unforgettable dining experiences!",
  ]);

  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [len] = useState(words.length);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [skipDelay] = useState(15);
  const [speed] = useState(40);

  useEffect(() => {
    const wordFlickInterval = setInterval(wordFlick, speed);
    return () => clearInterval(wordFlickInterval);
  }, [i, offset, forwards, skipCount]); // Add the dependencies here

  const wordFlick = () => {
    if (forwards) {
      if (offset >= words[i].length) {
        setSkipCount((prevCount) => prevCount + 1);

        if (skipCount === skipDelay) {
          setForwards(false);
          setSkipCount(0);
        }
      }
    } else {
      if (offset === 0) {
        setForwards(true);
        setI((prevI) => (prevI + 1 >= len ? 0 : prevI + 1));
        setOffset(0);
      }
    }

    const part = words[i].substr(0, offset);

    if (skipCount === 0) {
      if (forwards) {
        setOffset((prevOffset) => prevOffset + 1);
      } else {
        setOffset((prevOffset) => prevOffset - 1);
      }
    }

    setPart(part);
  };

  return (
    <div className="word w-full bg-red-800 text-yellow-300  font-semibold text-center text-xl h-6">
      {part}
    </div>
  );
}
