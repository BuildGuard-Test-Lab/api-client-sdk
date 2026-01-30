import { describe, it, expect } from 'vitest';
import { ApiClient } from './index';

describe('ApiClient', () => {
  it('can be instantiated with apiKey', () => {
    const client = new ApiClient({ apiKey: 'test-key' });
    expect(client).toBeDefined();
  });

  it('can be instantiated with custom baseUrl', () => {
    const client = new ApiClient({
      apiKey: 'test-key',
      baseUrl: 'https://custom.api.dev',
    });
    expect(client).toBeDefined();
  });

  it('has getUsers method', () => {
    const client = new ApiClient({ apiKey: 'test-key' });
    expect(typeof client.getUsers).toBe('function');
  });

  it('has getOrders method', () => {
    const client = new ApiClient({ apiKey: 'test-key' });
    expect(typeof client.getOrders).toBe('function');
  });
});
