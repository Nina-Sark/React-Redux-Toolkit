import axios from "axios";

export const getPostsData = async title => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?title=${title}`);

    return data;
}