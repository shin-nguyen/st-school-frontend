export const getAllBlogsByQuery = `
    {
        blogs {
            id
            title
            description
            content
            status
            topics {
                id
                name
                description
            }
        }
    }
`;

export const getBlogByQuery = (id) => `
    {
        blog(id: ${id}) {
            id
            title
            description
            content
            status
            topics {
                id
                name
                description
            }
        }
    }
`;

export const getBlogsByIdsQuery = (ids) => `
    {
        blogsIds(ids: [${ids}]) {
            id
            title
            description
            content
            status
        }
    }
`;
