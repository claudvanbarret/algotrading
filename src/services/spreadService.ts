import { Endpoints } from '../config/endpoints';
import { Spread } from '../models/Spread';
import RequestService, { RequestConfig } from './RequestService';

/**
 * Fetch and returns spread configurations
 */
export const fetchSpreadConfigurations = () => {
  return RequestService.get<Spread[]>(Endpoints.SPREADS);
};

/**
 * Create spread configuration
 */
export const createSpreadConfiguration = (spread: Spread) => {
  return RequestService.post<Spread>(Endpoints.SPREADS, spread);
};

/**
 * Update spread configurations
 */
export const updateSpreadConfiguration = (spreadConfiguration: Spread) => {
  const endpoint = `${Endpoints.SPREADS}/${spreadConfiguration.id}`;
  return RequestService.put<Spread>(endpoint, spreadConfiguration);
};

/**
 * Delete spread configuration
 */
export const deleteSpreadConfiguration = (spreadConfigurationId: number, config?: RequestConfig) => {
  const endpoint = `${Endpoints.SPREADS}/${spreadConfigurationId}`;
  return RequestService.delete<Spread>(endpoint, config);
};
