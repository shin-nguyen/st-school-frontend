export const getAllBlogsByQuery = (data) => `
{
    blogs(type: "${data}") {
        id
        title
        summary
        content
        status
        image
        view
        topics {
            id
            name
        }
        createdTime
    }
}
`;

export const getAllBlogsByMe = (data) => `
{
    blogsOfMe(email: "${data}") {
        id
        title
        view
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
            view
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
