
const setHtmlFromArray = ($elemetToApplay, array = [], marcupCreater) => {
    $elemetToApplay.innerHTML = array.map(marcupCreater).join('');
}
export default setHtmlFromArray;