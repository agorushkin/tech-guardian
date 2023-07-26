import { Handler } from 'http';

export const handler: Handler = ({ respond }) => {
  const body = Deno.readTextFileSync('./client/pages/main.html');

  respond({
    body: body,
    headers: { 'content-type': 'text/html' },
  });
};