import React from 'react'

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("something went wrong");
    }
    return res.json()
}

const PostUser = async ({ userId }) => {
    const user = await getData(userId)
    return (
        <div className="detailText flex flex-col gap-[10px]">
            <span className="text-gray-500 font-[700]">Author</span>
            <span className="font-[500]">{user.name}</span>
        </div>
    )
}

export default PostUser