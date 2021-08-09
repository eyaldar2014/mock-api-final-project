const app = require('./app')
const port = process.env.PORT || 5000

const path = require('path');
const os = require('os');

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port , () => {
  console.log('listnening on port', port)
})
