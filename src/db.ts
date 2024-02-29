export class Database {
  namespace: string;
  #db: Record<string, any>;

  /**
   * Create database instance
   *
   * @constructor
   * @param {string} namespace - The namespace
  */
  constructor(namespace?: string) {
    this.#db = {};
    this.namespace = namespace ?? '';
  }

  /**
   * Get value by key
   *
   * @function
   * @param {string} key - Key string to retrieve value from database
   * @return {any} data
  */
  get(key: string): any {
    return this.#db[`${this.namespace}_${key}`];
  }

  /**
   * Set key-value into database
   *
   * @function
   * @param {string} key - Key string to store
   * @param {any} value - Any value to be stored to database
  */
  set(key: string, value: any) {
    this.#db[`${this.namespace}_${key}`] = value;
  }

  /**
   * Clear the database
   *
   * @function
  */
  clear() {
    this.#db = {};
  }
}