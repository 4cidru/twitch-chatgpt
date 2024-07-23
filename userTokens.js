class UserTokens {
    constructor() {
        this.tokens = [];
    }

    // Get user tokens
    getUserTokens(username) {
        const user = this.tokens.find(u => u.username === username);
        return user ? user.token : null;
    }

    // Deduct tokens from a user
    deductTokens(username, amount) {
        const user = this.tokens.find(u => u.username === username);
        if (user && user.token >= amount) {
            user.token -= amount;
            return true;
        }
        return false;
    }

    // Initialize/add user tokens
    addUser(username, tokenAmount) {
        this.tokens.push({ username, token: tokenAmount });
    }

    // Check if user exists
    userExists(username) {
        return this.tokens.some(u => u.username === username);
    }
}
