const getAnak = (template) => {
  const temp = [];
  function diveTree(data) {
    data.map((d) => {
      if (d.children) {
        diveTree(d.children);
      } else {
        temp.push(d.id);
      }
    });
  }
  diveTree(template);
  return temp;
};

module.exports = {
  getAnak,
};
