import { instance } from './requests';
import { IMessageResponseData } from '../types/types';

export const InboxMessageService = {
  
    async getMessage(): Promise<IMessageResponseData | undefined> {
      try {
        const { data } = await instance.get<IMessageResponseData>('massage-details');
        return data;
      } catch (error) {
        console.error('Get message-detail error:', error);
        throw new Error('Failed to get message-details');
      }
    },
  };
  