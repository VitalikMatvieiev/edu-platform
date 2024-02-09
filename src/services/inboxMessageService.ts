import { MessageProps } from '../types/components/componentType';
import { instance } from './requests';

export const InboxMessageService = {
  async getMessage(): Promise<MessageProps | undefined> {
    try {
      const { data } = await instance.get<MessageProps>('massage-details');
      return data;
    } catch (error) {
      console.error('Get message-detail error:', error);
      throw new Error('Failed to get message-details');
    }
  },
};
