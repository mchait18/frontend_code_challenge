import React, { useState, useEffect } from "react";
import UserApi from "./UserApi";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserCard from "./UserCard";
import Card from 'react-bootstrap/Card';

function AdminPage() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function getUsersOnMount() {
            setUsers(await UserApi.getUsers())
        }
        getUsersOnMount()
    }, [])
    console.log("users is ", users)

    if (!users) {
        return <p>Loading &hellip;</p>;
    }
    return (
        <div >
            <Container className="col-12 offset-5">
                <Row xs={2} md={3} xxl={12} className="g-4" style={{ padding: '2rem', paddingTop: '2rem' }}>
                    <Card>
                        <Card.Title><h2><u>Yodlr Admin Page</u></h2></Card.Title>
                        {users.map(user => (
                            <Col key={user.id}>
                                <UserCard user={user} />
                            </Col>
                        ))}
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default AdminPage