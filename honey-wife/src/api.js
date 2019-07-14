const BASE_URL = "http://localhost:3001";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();
  options.header = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  bodasTop: {
    list() {
      return callApi("/bodasTop");
    },
    create(boda) {
      return callApi(`/bodasTop`, {
        method: "POST",
        body: JSON.stringify(boda)
      });
    },
    read(bodaId) {
      return callApi(`/bodasTop/${bodaId}`);
    },
    update(bodaId, updates) {
      return callApi(`/bodasTop/${bodaId}`, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(bodaId) {
      return callApi(`/bodasTop/${bodaId}`, {
        method: "DELETE"
      });
    }
  },
  clipArt: {
    list() {
      return callApi("/clipArt");
    },
    create(clip) {
      return callApi(`/clipArt`, {
        method: "POST",
        body: JSON.stringify(clip)
      });
    },
    read(clipId) {
      return callApi(`/clipArt/${clipId}`);
    },
    update(clipId, updates) {
      return callApi(`/clipArt/${clipId}`, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(clipId) {
      return callApi(`/clipArt/${clipId}`, {
        method: "DELETE"
      });
    }
  }
};

export default api;
