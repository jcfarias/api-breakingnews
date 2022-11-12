const soma = (req, res) => {
  let soma = 100 + 1;

  res.json({ soma: soma });
};

module.exports = { soma };
