import config from '/config.json' assert { type: 'json' };
import rules  from '/static.json' assert { type: 'json' };

import { HttpServer } from 'http';
import { serve, file } from 'http-utils';

const { port } = config;

const server = new HttpServer();

server.route('/public/*')(serve('./public', rules));

server.route('/{home}?{/}?')(async ({ respond }) => respond(await file('./public/pages/home.html')));
server.route('/gaming{/}?' )(async ({ respond }) => respond(await file('./public/pages/gaming.html')));
server.route('/security{/}?')(async ({ respond }) => respond(await file('./public/pages/security.html')));
server.route('/privacy{/}?')(async ({ respond }) => respond(await file('./public/pages/privacy.html')));
server.route('/robots.txt' )(async ({ respond }) => respond(await file('./public/robots.txt')));

server.route('/*')(({ redirect }) => redirect('/'));

server.listen(port);
console.log(`Server running on port :${ port }`);