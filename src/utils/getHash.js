const getHash = () => location.search.slice(1).toLocaleLowerCase().split('?')[1] || '?';

export default getHash;