const path = require('path');
const Express = require('express');

const app = new Express();

app.use(Express.static(path.resolve(__dirname, 'dist')));
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
