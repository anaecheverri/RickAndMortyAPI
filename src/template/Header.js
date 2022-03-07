const header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
          <a href="/"> <img src="./src/images/logo.png" alt="logo"></a>
      </div>
      <div class="Header-nav">
        <h1>
          <a href="/about"> About </a>
        </h1>
        <h1>
          <a href="https://rickandmortyapi.com/" target="_blank"> API </a>
        </h1>
      </div>
    </div>`;
    return view;
}

export default header;