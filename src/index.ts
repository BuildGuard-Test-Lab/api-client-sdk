import axios, { AxiosInstance } from 'axios';

interface ClientOptions {
  apiKey: string;
  baseUrl?: string;
}

export class ApiClient {
  private http: AxiosInstance;

  constructor(options: ClientOptions) {
    this.http = axios.create({
      baseURL: options.baseUrl || 'https://api.buildguard.dev',
      headers: { Authorization: `Bearer ${options.apiKey}` },
    });
  }

  async getUsers() {
    const { data } = await this.http.get('/api/v1/users');
    return data;
  }

  async getOrders() {
    const { data } = await this.http.get('/api/v1/orders');
    return data;
  }
}
