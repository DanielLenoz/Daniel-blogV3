import React, { useState } from "react";

function useBlog() {

    const [menuActive, setMenuActive] = useState(false)


    const state = {
        menuActive
    };
    const stateUpdaters = {
      setMenuActive,
    };

    return {state, stateUpdaters}
}

export {useBlog}