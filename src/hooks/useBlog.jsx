import React, { useState } from "react";

function useBlog() {

    const [menuActive, setMenuActive] = useState(false)


    const state = {
        menuActive
    }
    const setState = {
        setMenuActive
    }

    return(state, setState)
}

export {useBlog}