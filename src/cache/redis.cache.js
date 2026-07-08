class RedisCache {
  constructor(client) {
    this.client = client;
  }

  async get(key) {
    return this.client.get(key);
  }

  async set(key, value, ttl) {
    return this.client.set(key, value, { EX: ttl });
  }

  async del(key) {
    return this.client.del(key);
  }
}

export default RedisCache;
