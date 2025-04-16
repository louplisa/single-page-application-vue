import { useFetch } from "@/composable/useFetch.js";
import BlogPage from "@/pages/BlogPage.vue";
import { routes } from "@/routes.js";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, beforeAll, beforeEach, it, expect, afterEach } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";

describe("<BlogPage>", () => {
    let router;

    beforeEach(async () => {
        router = createRouter({
            history: createMemoryHistory(),
            routes: routes,
        });
        router.push("/");
        await router.isReady();
    });

    afterEach(() => {
        useFetch.mock = {};
    });

    it("should render the right amount of articles", async () => {
        useFetch.mock = {
            "https://jsonplaceholder.typicode.com/posts?_limit=2&_page=1": () =>
                Promise.resolve([
                    {
                        userId: 1,
                        id: 1,
                        title:
                            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                    },
                    {
                        userId: 1,
                        id: 2,
                        title: "qui est esse",
                        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                    },
                    {
                        userId: 1,
                        id: 3,
                        title:
                            "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
                    },
                    {
                        userId: 1,
                        id: 4,
                        title: "eum et est occaecati",
                        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                    },
                ]),
        };
        const wrapper = mount(BlogPage, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        expect(wrapper.findAll("article")).toHaveLength(4);
    });

    it("should render the right amount of articles", async () => {
        useFetch.mock = {
            "https://jsonplaceholder.typicode.com/posts?_limit=2&_page=1": () =>
                Promise.reject(),
        };
        const wrapper = mount(BlogPage, {
            global: {
                plugins: [router],
            },
        });
        await flushPromises();
        expect(wrapper.text()).contains("Impossible de charger les articles");
    });
});
