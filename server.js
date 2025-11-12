const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GET /hello endpoint - returns "hello world" in JSON
app.get('/hello', (req, res) => {
  res.json({ message: 'hello world' });
});

// Root endpoint for testing
app.get('/', (req, res) => {
  res.json({
    status: 'Server is running',
    endpoints: {
      hello: '/hello'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
