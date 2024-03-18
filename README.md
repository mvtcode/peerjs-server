peerjs-server

run:

```
docker run --rm --network=host -e PORT=9000 -e  PEERPATH=/myapp -e KEY=peerjs  tanmv/peerjs-server
```
Option enviroments `.env`:
```
PORT=9000
PEERPATH=/myapp
KEY=peerjs
```
Use env file

```
docker run --restart=always --name peerjs-server --network=host --env-file=.env -d tanmv/peerjs-server
```
