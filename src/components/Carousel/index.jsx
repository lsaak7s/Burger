import { useState, useEffect } from 'react';

import { api } from '../../services/api';
import { ContainerCarrocel } from './styles';

export function Carousel() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function loadCategoris() {
      const res = await api.get('/listCategories');
      console.log(res);
    }
    loadCategoris();
  }, []);

  return (
    <ContainerCarrocel>
      <h1>ContainerCarrocel</h1>
    </ContainerCarrocel>
  );
}
