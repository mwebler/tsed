import {PlatformContext} from "../domain/PlatformContext";

function toHeaders(headers: {[key: string]: any}) {
  return Object.entries(headers).reduce((headers, [key, item]) => {
    return {
      ...headers,
      [key]: String(item.example)
    };
  }, {});
}

export function setResponseHeaders(ctx: PlatformContext) {
  const {response, endpoint} = ctx;
  const {operation} = endpoint;

  if (response.isDone()) {
    return;
  }

  if (response.statusCode === 200) {
    // apply status only if the isn't already modified
    response.status(operation.getStatus());
  }

  const headers = operation.getHeadersOf(response.statusCode);
  response.setHeaders(toHeaders(headers));

  if (endpoint.redirect) {
    response.redirect(endpoint.redirect.status || 302, endpoint.redirect.url);
  }

  if (endpoint.location) {
    response.location(endpoint.location);
  }
}