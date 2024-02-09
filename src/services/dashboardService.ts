import { instance } from './requests';
import { ICourseDetailsResponseData } from '../types/types';

export const DashboardService = {
  async getProfile(): Promise<ICourseDetailsResponseData | undefined> {
    try {
      const { data } =
        await instance.get<ICourseDetailsResponseData>('course-details');
      return data;
    } catch (error) {
      console.error('Get course-detail error:', error);
      throw new Error('Failed to get course-detail');
    }
  },
};
