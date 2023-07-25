const notFound = (req, res) => {
  res.status(404).send("Route Doesn't exists");
};

module.exports = notFound;
