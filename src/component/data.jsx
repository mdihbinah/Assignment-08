
export const tiles = async() => {
    const res = await fetch('http://localhost:5000/tiles')
    const d = await res.json()
    // console.log(d);
    return d
}

