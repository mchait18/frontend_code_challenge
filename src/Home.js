import React from "react";
import { Link } from "react-router-dom";
/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Home
 */

function Home() {

    return (
        <div className="Homepage">
            <div className="container text-center">
                <h1 className="mb-4 font-weight-bold">Yodlr Design Challenge</h1>
                <div>
                    <Link to={`/signup`} >Registration Page</Link>
                </div><div>
                    <Link to={`/admin`} >Admin Page</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;