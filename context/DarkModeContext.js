import { createContext , useState} from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props){
    const [ darkMode, setDarkmode] = useState(false);
    const toggleDarkMode = () => {
        setDarkmode(true);
    }
    const toggleLightMode = () => {
        setDarkmode(false);
    }
    return(
        <div>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode, toggleLightMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </div>

    )
}

export {DarkModeContext, DarkModeProvider};