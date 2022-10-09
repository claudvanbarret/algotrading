import { useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { Endpoints } from '../config/endpoints';
import { SpreadConfiguration, SpreadType } from '../models/SpreadConfiguration';
import {
  createSpreadConfiguration,
  deleteSpreadConfiguration,
  fetchSpreadConfigurations,
  updateSpreadConfiguration,
} from '../services/spreadService';

const useSpreads = () => {
  const [spreadConfigurations, setSpreadConfigurations] = useState<SpreadConfiguration[]>([]);

  const workingHours = useMemo(
    () => spreadConfigurations.filter((spread) => spread.spreadTypeId === SpreadType.WORKING_HOURS),
    [spreadConfigurations]
  );
  const nightShift = useMemo(
    () => spreadConfigurations.filter((spread) => spread.spreadTypeId === SpreadType.NIGHT_SHIFT),
    [spreadConfigurations]
  );

  const { refetch: refetchSpreadConfigurations } = useQuery([Endpoints.SPREADS], fetchSpreadConfigurations, {
    onSuccess: (response) => {
      setSpreadConfigurations(response.data);
    },
  });

  const updateSpreadConfigurations = useCallback(
    (rowIndex: number, columnId: string, value: unknown) => {
      setSpreadConfigurations((rows) => rows.map((row, index) => (index === rowIndex ? { ...row, [columnId]: value } : row)));
    },
    [setSpreadConfigurations]
  );

  const createSpread = useCallback(
    async (spread: SpreadConfiguration) => {
      const response = await createSpreadConfiguration(spread);

      const rows = [response.data, ...spreadConfigurations];

      setSpreadConfigurations(rows);
    },
    [setSpreadConfigurations, spreadConfigurations]
  );

  const updateSpreadConfigurationById = useCallback(
    async (spreadConfiguration: SpreadConfiguration) => {
      await updateSpreadConfiguration(spreadConfiguration);

      setSpreadConfigurations((rows) => rows.map((row) => (row.id === spreadConfiguration.id ? spreadConfiguration : row)));
    },
    [setSpreadConfigurations]
  );

  const deleteSpreadConfigurationById = useCallback(
    async (spreadConfigurationId: number) => {
      await deleteSpreadConfiguration(spreadConfigurationId);

      setSpreadConfigurations((rows) => rows.filter((row) => row.id !== spreadConfigurationId));
    },
    [setSpreadConfigurations]
  );

  return {
    spreadConfigurations,
    workingHours,
    nightShift,
    createSpread,
    refetchSpreadConfigurations,
    updateSpreadConfigurations,
    updateSpreadConfigurationById,
    deleteSpreadConfigurationById,
  };
};

export default useSpreads;
