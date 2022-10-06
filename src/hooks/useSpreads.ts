import { useEffect, useState } from 'react';
import { SpreadConfiguration } from '../models/SpreadConfiguration';
import { fetchSpreadConfigurations } from '../services/spreadService';

const useSpreads = () => {
  const [data, setData] = useState<SpreadConfiguration[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data.length) return;

      const response = await fetchSpreadConfigurations();
      setData(response.data);
    };

    fetchData().catch(console.error);
  }, []);

  return {
    data,
  };
};

export default useSpreads;
