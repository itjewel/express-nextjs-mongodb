// app.js

const express = require('express');
const app = express();
const useRouters = require('./routes')
app.use('/api',useRouters)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
