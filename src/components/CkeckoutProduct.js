import { addToBasket, removeFromBasket } from '@/slices/basketSlice';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/legacy/image';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';

function CkeckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime
}) {

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
        dispatch(addToBasket(product));
    }

    const removeItemsFromBasket = () => {
        // Remove the item from redux
        dispatch(removeFromBasket({ id }))
    }
  return (
    <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain"/>
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs line-clamp-3 my-2">{description}</p>
            <CurrencyFormat value={price} prefix='$' thousandSeparator={true} />

            {hasPrime && (
                <div className="flex items-center space-x-0">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Mobile_750x220.jpg" loading="lazy" className="w-16" alt="" />
                    <p className="text-xs text-gray-500">Free One-day Delivery</p>
                </div>
            )}
        </div>

        {/* Right add/remove buttons */}
        <div className="flex flex-col space-y-2 justify-self-end my-auto ">
            <button className="button" onClick={addItemsToBasket}>Add to Basket</button>
            <button className="button" onClick={removeItemsFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CkeckoutProduct;