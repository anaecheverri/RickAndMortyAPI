const Filter = () => {
  const view = `
  <div class="Filter-status">
    <h3>Status</h3>
      <a href="/?status=alive" id="alive"> Alive </a>
      <a href="/?status=dead" id="dead"> Dead </a>
      <a href="/?status=unknown" id="unknown"> Unknown </a>
    </div>
  <div class="Filter-gender">
    <h3>Gender</h3>
      <a href="/?gender=male"> Male </a>
      <a href="/?gender=female"> Female </a>
    </div>
  <div class="Filter-specie">
    <h3>Specie</h3>
      <a href="/?species=Human"> Human </a>
      <a href="/?species=alien"> Alien </a>
      <a href="/?species=unknown"> Unknown </a>
    </div>


  `;
  return view;
}

export default Filter;