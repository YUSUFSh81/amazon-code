import React, { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { StarIcon } from '@heroicons/react/24/solid';
import Currency from 'react-currency-format';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const [rating, setRating] = useState(1);

    const [hasPrime, setHasPrime] = useState(false);

    useEffect(() => {
        setRating(
            Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
        )
        setHasPrime(Math.random() < 0.5)
    }, []);

    const dispatch = useDispatch();


    const addItemsToBasket = () => {
        const product = {
            id, 
            title, 
            price,
            rating, 
            description, 
            category, 
            image,
            hasPrime
        }

        // Sending the product as an action to Redux Store... the basket slice
        dispatch(addToBasket(product));
    }

  return (
    <div className="relative flex flex-col m-5 bg-white p-10 z-30">
        <p className="absolute top-2 right-2 text-xs text-gray-400 italic">{category}</p>
        <Image src={image} height={200} width={200} className="ml-auto mr-auto" objectFit="contain" />      

        <h4 className="my-3">{title}</h4>

        <div className="flex">
            {Array(rating).fill().map((_, i) => (
                <StarIcon className="h-5 text-yellow-500 " />
            ))}  
        </div>

        {/* {hasPrime && <p>Has prime delivery</p>}  */}
        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <div>
            <CurrencyFormat className="mb-5" value={price} prefix='$' thousandSeparator={true} />
            {/* <Currency quantity={price} currency="INR"/> */}
        </div>

        {hasPrime && (
            <div className="flex items-center space-x-0 -mt-5 mb-3">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Mobile_750x220.jpg" className="w-16" alt="" />
                <p className="text-xs text-gray-500">Free Next-day delivery</p>
            </div>
        )}
         <button onClick={addItemsToBasket} className="mt-auto button">Add to basket</button>
    </div>
  );
}

export default Product;