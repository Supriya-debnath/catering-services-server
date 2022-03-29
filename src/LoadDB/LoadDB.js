import React, { useEffect, useState } from 'react';

const LoadDB = () => {
    const [menus, setMenus] = useState()
    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(data => setMenus(data))
    }, [])
    return [menus, setMenus]
};

export default LoadDB;