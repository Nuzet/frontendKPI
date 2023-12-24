import { useEffect, useState } from 'react'
import GoodsCard from './GoodsCard';
import { Link } from 'react-router-dom';

const CardContainer = () => {
  const [chameleons, setChameleons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../data.json');
        const data = await response.json();
        setChameleons(Object.values(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='card__page'>
      <div className='items'>
        {chameleons.map((cham) => (
          <GoodsCard
            key={cham.id}
            image={cham.image}
            title={cham.title}
            price={cham.price}
            id={cham.id}
          />
        ))}
      </div>
      <Link to={'/'} className='go_back'>Go Back</Link>
    </div>
  )
}

export default CardContainer
