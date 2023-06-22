const url = "https://b336-79-174-199-126.ngrok-free.app";

export const fetchData = async (path) => {
  let response = await fetch(url + path);
  return await response.json();
};

export const postData = async (path, body) => {
    let response = await fetch(url +path,{
        method:"POST",
        body :JSON.stringify(body),
    });
    return await response.json();
};