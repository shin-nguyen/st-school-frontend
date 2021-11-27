export const getAllBlogsByQuery = `
    {
        blogs {
            id
            title
            summary
            content
            status
            image
            topics {
                id
                name
            }
            createdTime
        }
    }
`;

export const getBlogByQuery = (id) => `
    {
        blog(id: ${id}) {
            id
            title
            summary
            content
            status
            image
            createdTime
            topics {
                id
                name
                description
            }
            user{
                email
            }
        }
    }
`;
