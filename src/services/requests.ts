import axios, { AxiosResponse } from 'axios';

export abstract class ApiBase<T> {
  protected readonly baseUrl: string;
  protected readonly httpOptions: { headers: { [key: string]: string } };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    const jwtToken = localStorage.getItem('jwtToken');
    this.httpOptions = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    };
  }

  abstract getBaseUrl(): string;

  async getAll(): Promise<T[]> {
    const response: AxiosResponse = await axios.get(
      this.getBaseUrl(),
      this.httpOptions,
    );
    return response.data;
  }

  async getById(id: number): Promise<T> {
    const response: AxiosResponse = await axios.get(
      `${this.getBaseUrl()}/${id}`,
      this.httpOptions,
    );
    return response.data;
  }

  async create(entity: T): Promise<T> {
    const response: AxiosResponse = await axios.post(
      this.getBaseUrl(),
      entity,
      this.httpOptions,
    );
    return response.data;
  }

  async update(entity: T & { id: number }): Promise<T> {
    const response: AxiosResponse = await axios.put(
      `${this.getBaseUrl()}/${entity.id}`,
      entity,
      this.httpOptions,
    );
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`${this.getBaseUrl()}/${id}`, this.httpOptions);
  }
}
