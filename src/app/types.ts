type User = {
    id: string;
    namaLengkap: string;
    email: string;
    username: string;
    password: string;
    role: string;
    posts: Post[]; // Define posts as an array of Post objects
  };
  
  type Post = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    subject: string;
    description?: string | null;
    published: boolean;
    authorId: string;
  };
  