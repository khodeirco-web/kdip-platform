import { faker } from '@faker-js/faker';

export class UserFactory {
  private createdUsers: string[] = [];

  async createUser(overrides = {}) {
    const user = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password({ length: 12 }),
      ...overrides,
    };

    // Placeholder for API call to create user
    // Ideally this connects to the backend API
    // const response = await fetch(`${process.env.API_URL}/users`, ...);
    
    // Simulating creation for now since API might not be running
    const simulatedId = faker.string.uuid();
    this.createdUsers.push(simulatedId);
    
    return { id: simulatedId, ...user };
  }

  async cleanup() {
    // Delete all created users
    if (this.createdUsers.length > 0) {
      console.log(`Cleaning up ${this.createdUsers.length} test users...`);
      // for (const userId of this.createdUsers) {
      //   await fetch(`${process.env.API_URL}/users/${userId}`, { method: 'DELETE' });
      // }
    }
    this.createdUsers = [];
  }
}
