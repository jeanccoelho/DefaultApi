import { registerUser, loginUser } from '../src/services/authService';
import database from '../src/utils/database';

describe('AuthService', () => {
  beforeAll(async () => {
    await database.user.deleteMany({
      where: { email: 'test@example.com' }
    });
    await database.$disconnect();
  });

  it('should register a new user', async () => {
    const user = await registerUser('test@example.com', 'password123', 'Test User', 'USER');
    expect(user).toHaveProperty('id');
  });

  it('should login an existing user', async () => {
    const { token, user } = await loginUser('test@example.com', 'password123');
    expect(token).toBeTruthy();
    expect(user).toHaveProperty('id');
  });
});
