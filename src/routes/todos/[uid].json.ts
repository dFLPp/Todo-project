import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const del: RequestHandler = (request) => {
  return api(request);
}
export const patch: RequestHandler<{}, FormData> = (request) => {
  return api(request, {
    content: request.body.get("content"),
    done: request.body.has("check-state") ? !!request.body.get("check-state") : undefined
  });
} 
