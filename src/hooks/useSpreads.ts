import { useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { Endpoints } from '../config/endpoints';
import { Spread, SpreadType } from '../models/Spread';
import {
  createSpreadConfiguration,
  deleteSpreadConfiguration,
  fetchSpreadConfigurations,
  updateSpreadConfiguration,
} from '../services/spreadService';

const useSpreads = () => {
  const [spreads, setSpreads] = useState<Spread[]>([]);

  const workingHours = useMemo(() => spreads.filter((spread) => spread.spreadTypeId === SpreadType.WORKING_HOURS), [spreads]);
  const nightShift = useMemo(() => spreads.filter((spread) => spread.spreadTypeId === SpreadType.NIGHT_SHIFT), [spreads]);

  const { refetch: refetchSpreads } = useQuery([Endpoints.SPREADS], fetchSpreadConfigurations, {
    onSuccess: (response) => {
      setSpreads(response.data);
    },
  });

  const updateSpreads = useCallback(
    (rowIndex: number, columnId: string, value: unknown) => {
      setSpreads((rows) => rows.map((row, index) => (index === rowIndex ? { ...row, [columnId]: value } : row)));
    },
    [setSpreads]
  );

  const createSpread = useCallback(
    async (spread: Spread) => {
      const response = await createSpreadConfiguration(spread);

      const rows = [response.data, ...spreads];

      setSpreads(rows);
    },
    [setSpreads, spreads]
  );

  const updateSpread = useCallback(
    async (spread: Spread) => {
      await updateSpreadConfiguration(spread);

      setSpreads((rows) => rows.map((row) => (row.id === spread.id ? spread : row)));
    },
    [setSpreads]
  );

  const deleteSpread = useCallback(
    async (spreadId: number) => {
      await deleteSpreadConfiguration(spreadId);

      setSpreads((rows) => rows.filter((row) => row.id !== spreadId));
    },
    [setSpreads]
  );

  return {
    spreads,
    workingHours,
    nightShift,
    refetchSpreads,
    updateSpreads,
    createSpread,
    updateSpread,
    deleteSpread,
  };
};

export default useSpreads;
