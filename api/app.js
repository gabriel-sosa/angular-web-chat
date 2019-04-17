const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("web chat api");
});

io.on("connection", socket => {
  const id = socket.handshake.query.id;
  const user = socket.handshake.query.user;

  function getSockets() {
    if (io.sockets.adapter.rooms[id])
      return Object.keys(io.sockets.adapter.rooms[id].sockets).map(val => {
        return { name: io.sockets.connected[val].handshake.query.user };
      });
  }

  socket.join(id, err => {
    console.log(`user ${user} joined room ${id}, error?`, err);
    io.of("/")
      .to(id)
      .emit("user joined", user, {
        type: "users update",
        content: getSockets()
      });
  });

  socket.on("chat message", (id, msg) => {
    console.log(msg);
    io.of("/")
      .to(id)
      .emit("chat message", { type: "message", content: msg });
  });

  socket.on("disconnect", () => {
    console.log(`user ${user} disconnected`);
    io.of("/")
      .to(id)
      .emit("user left", user, { type: "users update", content: getSockets() });
  });
});

http.listen(3000, () => {
  console.log("server started");
});
