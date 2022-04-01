import { useEffect, useState } from 'react';

const LoadDB = () => {
    const [items, setItems] = useState()
    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return [items, setItems]
};

export default LoadDB;







// import { useEffect, useState } from 'react';

// const LoadDB = () => {
//     const [menus, setMenus] = useState()
//     useEffect(() => {
//         fetch('/db.json')
//             .then(res => res.json())
//             .then(data => setMenus(data))
//     }, [])
//     return [menus, setMenus]
// };

// export default LoadDB;