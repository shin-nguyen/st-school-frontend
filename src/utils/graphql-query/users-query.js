export const usersByQuery = `
    {
        users {
            id
            email
            firstName
            lastName
            avatar
            birthday
            address
            phone
            activationCode
            passwordResetCode
            active
            provider
            roles
        }
    }
`;

export const userByQuery = (id) => `
    {
        user(id: ${id}) {
            id
            email
            firstName
            lastName
            avatar
            birthday
            address
            phone
            activationCode
            passwordResetCode
            active
            provider
            roles
        }
    }
`;
