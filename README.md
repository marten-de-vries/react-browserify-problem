Errors
======

- "Warning: Failed Context Types: Required context `baseURL` was not specified in `App`."
- "Warning: owner-based and parent-based contexts differ (values: `undefined` vs `/some/base/url`) for key (baseURL) while mounting App (see: http://fb.me/react-context-by-parent)"

How to reproduce:
=================

``
npm install -g browserify
cd app
./build.sh
firefox index.html #or whatever browser you prefer.
``

Workaround
==========

When I move ``container/index.js`` to ``app/container.js`` and change
the require statement in ``app/index.js`` from ``container`` to
``./container``, the errors disappear. But that defeats the purpose of
separating the modules in the first place.
