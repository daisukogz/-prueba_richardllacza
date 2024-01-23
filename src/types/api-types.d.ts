interface User {
    id: number;
    name: string;
    email: string;
}

interface Post {
    id: number;
    title: string;
    content: string;
}

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'options' | 'patch' | 'trace';