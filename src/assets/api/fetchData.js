import {I18nManager} from 'react-native';
var global = require('./Api.json');
// Lib

async function fetchData(url, method, body) {
  try {
    const data = fetch(global.apiLink + url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : '',
    })
      .then(response => response.json())
      .then(async res => await res);

    return data;
  } catch (error) {
    return error;
  }
}

export {fetchData};
