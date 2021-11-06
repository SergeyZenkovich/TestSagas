import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
  });
  
export const getAllUsers = async (): Promise<UserType[]> => {
    const result = await axiosInstance.get('users');
    return result.data;
};
export const getPosts = async (queryString: string): Promise<PostType[]> => {
    const result = await axiosInstance.get(`posts?${queryString}`);
    return result.data;
};
export const getComments = async (postNumber: number): Promise<CommentType[]> => {
    const result = await axiosInstance.get(`posts/${postNumber}/comments`);
    return result.data;
};