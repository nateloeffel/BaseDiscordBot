module.exports = {
    name: "ready",
    once: true,
    execute(client, commandss) {
        console.log(`\n---------------------------\n${client.user.tag} is now online!\n---------------------------`)
    },
};