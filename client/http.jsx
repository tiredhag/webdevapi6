export class HttpError extends Error {
  constructor(status, statusText) {
    super("Custom Exception Handling: " + statusText);
    this.status = status;
  }
}

export async function fetchJSON(url) {
  const res = await fetch(url);
  if (res.status === 204) {
    return null;
  } else if (res.ok) {
    //checking if we're getting ok back
    return await res.json();
  } else {
    throw new HttpError(res.status, res.statusText);
  }
}
