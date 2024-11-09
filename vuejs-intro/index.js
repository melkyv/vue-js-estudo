const app = Vue.createApp({
    data() {
        return {
            name: "Melky",
            login: "melkyv",
            bio: "...",
            company: "Acme Inc.",
            avatar_url: "https://avatar.iran.liara.run/public",
            searchInput: ''
        }
    },
    methods: {
        async fetchGithubUser() {
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`);

            const { login, name, bio, company, avatar_url } = await res.json();

            this.login = login;
            this.name = name;
            this.bio = bio;
            this.company = company;
            this.avatar_url = avatar_url;
        }
    }
})

app.mount('#app')
