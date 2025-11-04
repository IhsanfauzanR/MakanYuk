const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // kamu bisa ubah kalau perlu

// Middleware
app.use(cors());
app.use(express.json());

// Routing contoh
app.get('/', (req, res) => {
  res.send('Server backend MAKANYUK berjalan!');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
