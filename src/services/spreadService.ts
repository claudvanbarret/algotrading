import { Endpoints } from '../config/endpoints';
import { SpreadConfiguration } from '../models/SpreadConfiguration';
import RequestService, { RequestConfig } from './RequestService';

/**
 * Fetch and returns spread configurations
 */
export const fetchSpreadConfigurations = () => {
  return RequestService.get<SpreadConfiguration[]>(Endpoints.SPREADS);
};

/**
 * Create spread configuration
 */
export const createSpreadConfiguration = (spread: SpreadConfiguration) => {
  return RequestService.post<SpreadConfiguration>(Endpoints.SPREADS, spread);
};

/**
 * Update spread configurations
 */
export const updateSpreadConfiguration = (spreadConfiguration: SpreadConfiguration) => {
  const endpoint = `${Endpoints.SPREADS}/${spreadConfiguration.id}`;
  return RequestService.put<SpreadConfiguration>(endpoint, spreadConfiguration);
};

/**
 * Delete spread configuration
 */
export const deleteSpreadConfiguration = (spreadConfigurationId: number, config?: RequestConfig) => {
  const endpoint = `${Endpoints.SPREADS}/${spreadConfigurationId}`;
  return RequestService.delete<SpreadConfiguration>(endpoint, config);
};
