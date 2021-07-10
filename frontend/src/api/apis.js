export function cls(data) {
  return fetch("http://localhost:3000/process/cls", {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }).then(res => {
    return res.json();
  });
}

export function download(filename) {
  window.location.href = `http://localhost:3000/multer/download?filename=${filename}`;
}
