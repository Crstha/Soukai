import React from 'react'

const Footer = () => {
    return (
        <footer className="m-2 w-full  bottom-0  left-0 p-2 text-center text-black">
            <p>&copy; {new Date().getFullYear()} Soukai. All rights reserved.</p>
            {/* <p className="text-sm mt-2">Delivering quality goods to restaurants across the city.</p> */}
        </footer>
    )
}

export default Footer