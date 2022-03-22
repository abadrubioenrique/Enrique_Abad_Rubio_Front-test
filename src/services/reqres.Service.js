
export const getAllImages = (setCards,setLoading) => {
    fetch('http://localhost:3100/images').then(response=>{
        if(response.ok){
            return response.json();
        }
        throw response;
    })
    .then(data=>{
        setCards(data);
        console.log(data);

    })
    .catch(error=>{
        console.error("Error al realizar la petición Http :", error);

    })
    .finally(()=>{
        setLoading(false);
    })
    ;
}