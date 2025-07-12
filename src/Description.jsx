// @ts-check
import { useState } from 'react';
import DogImage from './DogImage';

/**
 * @type {() => JSX.Element}
 */
export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/setter-irish/n02100877_7943.jpg');
  const updateimage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setDogUrl(data.message));
  };

  return (
    <>
      <DogImage imageUrl={dogUrl} />
      <p className="description">これは犬です</p>
      <button className="button" onClick={updateimage}>
        犬画像を更新
      </button>
    </>
  )
}

export default Description
