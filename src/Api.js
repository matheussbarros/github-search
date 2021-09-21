export const API_URL = 'https://api.github.com/users/';
export const client_id = '7e97489504ff70a2a99b'
export const client_secret = '8f17ef0153ce3bcc4ef5f113d52f2c22bd14b827'


export function USER_GET(request) {
  return {
    url: `${API_URL}${request}?client_id=${client_id}&client_secret=${client_secret}`,
    options: {
      method: 'GET',
    },
  };
}
