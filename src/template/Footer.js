import getData from '../utils/getData'

const Footer = async () => {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var status = urlParams.get('status');
    var gender = urlParams.get('gender');
    var species = urlParams.get('species')

    console.log({status, gender, species})

    const data = await getData()
    let ancles = []
    for (let i = 1; i <= data.info.pages; i++){
        ancles.push(i)
    }

    let a = 0;


    const view = `
    <div class="Footer-pages">
        <h4> All Characters </h4>
        <div>
            ${ancles.map(() => 
                `<a href="?page=${++a}${species?`&species=${species}`:""}${status?`&status=${status}`:""}${gender?`&gender=${gender}`:""}">${a}</a>`
            ).join('')}
        </div>
        <h5> Hecho con 💚 by <a href="https://www.linkedin.com/in/analucia-echeverri/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"></a></h5>

    </div>
    `;
    return view
}

export default Footer