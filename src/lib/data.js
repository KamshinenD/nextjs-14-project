const users= [
    {id:1, name: "John"},
    {id:2, name: "Jane"}
]
const posts= [
    {id:1, title: "Post 1", body: "......", userId:1},
    {id:2, title: "Post 2", body: "......", userId:2},
]
export const getUsers= async(id)=>{
    return users.find((user)=>user.id===id); 
}
export const getPosts= async()=>{
    return posts; 
}
export const getPost= async(id)=>{
    return posts.find((post)=>post.id===id); 
}