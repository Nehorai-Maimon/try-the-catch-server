const express = require('express'),
app = express(),
PORT = 4000,
cors = require('cors'),
files = require("./try/files");

app.use(cors())
app.use(express.json())

app.use("/files",files)


app.listen(PORT, () => console.log(`server listening on ${PORT}`))