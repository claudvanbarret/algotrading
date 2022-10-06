import { Endpoints } from '../config/endpoints';
import { SpreadConfiguration } from '../models/SpreadConfiguration';
import RequestService from './RequestService';

/**
 * Fetch and returns spread configurations
 */
export const fetchSpreadConfigurations = () => {
  return RequestService.get<SpreadConfiguration>(Endpoints.SPREADS);
};
