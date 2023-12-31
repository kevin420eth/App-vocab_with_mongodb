import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar_menu'>
                <li className='menu_item'>
                    <a className='menu_item_link' href="/">Add</a>
                </li>
                <li className='menu_item'>
                    <a className='menu_item_link' href="/review">Review</a>
                </li>
                <li className='menu_item'>
                    <a className='menu_item_link' href="/search">Search</a>
                </li>
                <li className='menu_item'>
                    <a className='menu_item_link' href="/dashboard">Dashboard</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar