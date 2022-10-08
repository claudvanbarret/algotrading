import { Endpoints } from '../config/endpoints';
import { SpreadConfiguration } from '../models/SpreadConfiguration';
import RequestService from './RequestService';

/**
 * Fetch and returns spread configurations
 */
export const fetchSpreadConfigurations = () => {
  return RequestService.get<SpreadConfiguration[]>(Endpoints.SPREADS);
};

/**
 * Update spread configurations
 */
export const updateSpreadConfiguration = (spreadConfiguration: SpreadConfiguration) => {
  const endpoint = `${Endpoints.SPREADS}/${spreadConfiguration.id}`;
  return RequestService.put<SpreadConfiguration[]>(endpoint, spreadConfiguration);
};
