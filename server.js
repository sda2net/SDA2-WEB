const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// publicから取得にゃん
app.use(express.static(path.join(__dirname, 'public')));

// INDEX.HTMLを持ってくるにゃん
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// EXPRESS STARTにゃん
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
