import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const SwitchTheme = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="cursor-pointer inline-flex items-center" onClick={(e) => {
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        }}>
            {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-5" />}
        </div>
    );
};

export default SwitchTheme;