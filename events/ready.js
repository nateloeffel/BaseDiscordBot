module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log(`\n---------------------------\n${client.user.tag} is now online!\n---------------------------`)
    },
};