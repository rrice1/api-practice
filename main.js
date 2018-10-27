

const loadBoards = () => {
    return new Promise((resolve,reject)  => {
        $.ajax('https://data.nashville.gov/resource/p4jz-kk7d.json')
        .done((data) =>{
            console.log(data);
            resolve(data)
        })
        .fail((error) => {
            reject(error);
        })
    });
}


loadBoards();