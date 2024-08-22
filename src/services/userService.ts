import redis from '../utils/redis';
import database from '../utils/database';

export const getAllUsers = async () => {
  const cachedUsers = await redis.get('all_users');
  if (cachedUsers) return JSON.parse(cachedUsers);
  
  const users = await database.user.findMany();
  
  await redis.set('all_users', JSON.stringify(users), 'EX', 60 * 60);
  
  return users;
};

export const getUserById = async (id: string) => {
  return database.user.findUnique({ where: { id } });
};
