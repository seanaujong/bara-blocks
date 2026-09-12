# Container

An application or a data store — something that needs to be running on its own for the software
system to work. Not a Docker container; C4 borrowed the word before Docker made it ambiguous. A
web app, a mobile app, a serverless function, a database, and a file store are all containers.

A software system is made of one or more containers running as separate processes, usually
talking to each other over a network (JSON/HTTPS, a queue, a driver connection). If a server-side
app ships a meaningful client-side app to the browser, that's two containers, not one — they run
in separate process spaces.

Appears as the thing being decomposed in a Container diagram, as a supporting element in a
Component diagram (the container the components live inside, plus sibling containers it talks
to), and as the thing being placed on infrastructure in a Deployment diagram.

> "Self-Checkout Kiosk App" (client-side)
> "Checkout API" (server-side)
> "Catalog Database"
