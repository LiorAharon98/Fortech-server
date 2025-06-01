const app = require("express")();
const server = require("http").createServer(app);
server.listen(3000);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (client) => {
  client.on("chat message received", (data) => {
    client.broadcast.emit("send message to client", data);
  });
});
