import { useCallback, useEffect, useMemo, useState } from 'react';

import { SpreadConfiguration, SpreadType } from '../models/SpreadConfiguration';
import { fetchSpreadConfigurations, updateSpreadConfiguration, deleteSpreadConfiguration } from '../services/spreadService';

const useSpreads = () => {
  const [spreadConfigurations, setSpreadConfigurations] = useState<SpreadConfiguration[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (spreadConfigurations.length) return;

      const response = await fetchSpreadConfigurations();
      setSpreadConfigurations(response.data);
    };

    fetchData().catch(console.error);
  }, []);

  const workingHours = useMemo(
    () => spreadConfigurations.filter((spread) => spread.spreadTypeId === SpreadType.WORKING_HOURS),
    [spreadConfigurations]
  );
  const nightShift = useMemo(
    () => spreadConfigurations.filter((spread) => spread.spreadTypeId === SpreadType.NIGHT_SHIFT),
    [spreadConfigurations]
  );

  const updateSpreadConfigurations = useCallback((rowIndex: number, columnId: string, value: unknown) => {
    setSpreadConfigurations((rows) => rows.map((row, index) => (index === rowIndex ? { ...row, [columnId]: value } : row)));
  }, []);

  const updateSpreadConfigurationById = useCallback(async (spreadConfiguration: SpreadConfiguration) => {
    const response = await updateSpreadConfiguration(spreadConfiguration);

    return response.data;
  }, []);

  const deleteSpreadConfigurationById = useCallback(async (spreadConfigurationId: number) => {
    const response = await deleteSpreadConfiguration(spreadConfigurationId);

    setSpreadConfigurations((rows) => rows.filter((row) => row.id !== spreadConfigurationId));

    return response.data;
  }, []);

  return {
    spreadConfigurations,
    workingHours,
    nightShift,
    updateSpreadConfigurations,
    updateSpreadConfigurationById,
    deleteSpreadConfigurationById,
  };
};

export default useSpreads;
