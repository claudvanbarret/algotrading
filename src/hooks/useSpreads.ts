import { useCallback, useEffect, useMemo, useState } from 'react';
import { SpreadConfiguration, SpreadType } from '../models/SpreadConfiguration';
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

  const workingHours = useMemo(() => data.filter((spread) => spread.spreadTypeId === SpreadType.WORKING_HOURS), [data]);
  const nightShift = useMemo(() => data.filter((spread) => spread.spreadTypeId === SpreadType.NIGHT_SHIFT), [data]);

  const updateData = useCallback((rowIndex: number, columnId: string, value: unknown) => {
    setData((rows) => rows.map((row, index) => (index === rowIndex ? { ...row, [columnId]: value } : row)));
  }, []);

  return {
    data,
    workingHours,
    nightShift,
    updateData,
  };
};

export default useSpreads;
