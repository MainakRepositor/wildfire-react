import {Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'


export const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> Wildfire Tracker</h1>
            <h3>Made by Mainak</h3>
        </header>
    )
}
export default Header