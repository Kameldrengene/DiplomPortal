const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/":"https://raw.githubusercontent.com/VolkanIsik86/dummydata/main/"; //Check if dev environment

export async function getKurser(){
    return await fetch(baseUrl+"courses.json").then(response=>response.json()).then(data=>console.log(data));
}