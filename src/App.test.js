import { USER_GET } from './Api'



describe('user data request', () => {
  it('should return user', async () => {
    const { url, options } = USER_GET('matheussbarros');
    const response = await fetch(url, options);
    const user = await response.json();
    expect(user).toHaveProperty('name');
  });
});

describe('user repos request', () => {
  it('should return repos', async () => {
    const { url, options } = USER_GET('matheussbarros/repos');
    const response = await fetch(url, options);
    const repos = await response.json();
    expect(repos[0]).toHaveProperty('name');
  });
});

describe('user starred list request', () => {
  it('should return starred list', async () => {
    const { url, options } = USER_GET('matheussbarros/starred');
    const response = await fetch(url, options);
    const starred = await response.json();
    expect(starred[0]).toHaveProperty('name');
  });
});



