export const getAllBlogsByQuery = `
{
    orders {
        id
        createdTime
        course{
            id
            price
        }
        user{
            firstName,
            lastName
        }
    }
}
`;
