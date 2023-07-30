export const termesEmploiLoader = async () => {
    const res = await fetch('http://localhost:8000/api/termesEmploi/')

    // if(!res.ok) {
    //     throw Error('Erreur')
    // }

    return res.json()
}