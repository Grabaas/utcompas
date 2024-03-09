import React from "react"
import {Link, Outlet} from "react-router-dom"

export default function Profile ( ) {
    const porfiles =[1,2,3,4,5]
    return(
        <div>
            {porfiles.map((profile) =>
                <Link
                    key={profile}
                    to={`/profiles/${profile}`}
                >
                    <h3>Profile number: {profile}</h3>
                </Link>
            )}
            <Outlet />
        </div>
    )
}