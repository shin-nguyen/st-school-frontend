export const getOrderDashboardsByQuery = `
{
    orders {
        id
        createdTime
        course{
            id
            name
            price
        }
        user{
            firstName,
            lastName
        }
    }
}
`;
