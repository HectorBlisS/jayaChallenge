import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from './Table'

const url = "http://jsonplaceholder.typicode.com/"

export default function Ajax() {
    let [comments, setComments] = useState([])
    let [users, setUsers] = useState([])
    let [posts, setPosts] = useState([])
    useEffect(getData, [])

    function getComments(postId) {
        axios.get(`${url}posts?postId=${postId}`)
            .then(res => {
                setComments(res.data)
            })
    }

    function getData() {
        axios.get(url + "users")
            .then(res => {
                setUsers(res.data)
            })
    }

    function getPosts(userId) {
        axios.get(`${url}posts?userId=${userId}`)
            .then(res => {
                setPosts(res.data)
            })
    }

    function renderRow(user, i) {
        return (
            <tr key={i}>
                <td onClick={() => getPosts(user.id)} >{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        )

    }

    function renderPost(post, i) {
        return (
            <tr key={i}>
                <td onClick={() => getComments(post.id)} style={styles.hand} >{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
            </tr>
        )
    }

    function renderComment(comment, i) {
        return (
            <tr key={i}>
                <td style={styles.hand} >{comment.id}</td>
                <td>{comment.userId}</td>
                <td>{comment.title}</td>
            </tr>
        )
    }

    return (
        <div>
            <h2>Users tables</h2>
            <div>
                <Table
                    renderFunc={renderRow}
                    rows={users}
                    columns={["id", "Name", "Email"]} />
            </div>
            <hr />
            {posts.length !== 0 && <Table
                renderFunc={renderPost}
                rows={posts}
                columns={["id", "userId", "Title"]} />}
            <hr />
            {comments.length !== 0 && <Table
                renderFunc={renderComment}
                rows={comments}
                columns={["id", "userId", "text"]} />}
        </div>
    )
}

const styles = {
    hand: {
        cursot: "pointer"
    }
}