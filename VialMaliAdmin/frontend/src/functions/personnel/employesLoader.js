export const employesLoader = async () => {
    const res = await fetch('http://localhost:8000/api/employe/')

    // if(!res.ok) {
    //     throw Error('Erreur')
    // }

    return res.json()
}