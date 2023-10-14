import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, deleteRedux } from '../action/actions';
const TableUser = (props) => {
    const dispatch = useDispatch();

    const listUser = useSelector((state) => state.user.listUsers)
    const isLoading = useSelector((state) => state.user.isLoading)
    const isError = useSelector((state) => state.user.isError)

    const handleDelete = (user) => {
        console.log("Delete Click")
        dispatch(deleteRedux(user.id))
    }

    const handleEdit = (user) => {
        console.log("Edit")
        console.log(user)
    }

    // const [listUser, setListUser] = useState();

    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/users/all")
    //     const data = res.data && res ? res.data : []
    //     //Sau khi có được data thì ta hứng data vào state
    //     setListUser(data);
    // }

    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>User Name</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === true ?
                        <><div>Something wrong @_@</div></>
                        :
                        <>
                            {isLoading === true ? <><div>Hold up ! I'm bout ta PLOW</div></>
                                :
                                <>
                                    {listUser && listUser.length > 0 && listUser.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.email}</td>
                                                <td>{user.username}</td>
                                                <td>{user.password}</td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => handleDelete(user)}>Delete</button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-success' onClick={() => handleEdit(user)}>Edit</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>
                            }
                        </>
                    }



                </tbody>
            </Table>
        </Container>
    )
}
export default TableUser
