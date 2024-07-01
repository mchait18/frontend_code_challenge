import React from "react";
import Card from 'react-bootstrap/Card';
// import CardImgOverlay from 'react-bootstrap/CardImgOverlay';
// import "bootstrap-icons/font/bootstrap-icons.css";



/** Show limited information about a user
 *
 */

const UserCard = ({ user }) => {
    return (
        <Card border="white" >
            <Card.Body>
                <Card.Text>{user.lastName}, {user.firstName}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard;

