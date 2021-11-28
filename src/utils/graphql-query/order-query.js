export const getOrderDashboardsByQuery = `
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
