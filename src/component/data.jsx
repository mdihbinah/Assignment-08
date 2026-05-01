
export const tiles = async() => {
    const res = await fetch('https://assignment-08-iota.vercel.app/data.json')
    const d = await res.json()
    // console.log(d);
    return d
}

