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
            summary
            content
            status
            image
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
            image
            summary
            content
            status
        }
    }
`;
