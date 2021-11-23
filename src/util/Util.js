import data from '../data/card.json'

// const json_data = data['cards'];

// function filterById(jsonObject, id) {
//     return jsonObject.filter(function(jsonObject) {
//         return (jsonObject['id'] === id);
//     })[0];
// }


function Util() {
    const json_data = data['cards'];

    function filterById(jsonObject, id) {
        return jsonObject.filter(function(jsonObject) {
            return (jsonObject['id'] == id);
        })[0];
    }
    const a = filterById(json_data,1);
    console.log(a);
    console.log(a.id)
    console.log(a.title)

    return (
        <div>
            
        </div>
    )
}

export default Util
