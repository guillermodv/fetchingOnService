const urlPost = "https://jsonplaceholder.typicode.com/posts";

export function getData() {
  return fetch(urlPost).then((response) => response.data);
}
