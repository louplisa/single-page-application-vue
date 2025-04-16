import { describe, it, expect, beforeEach } from "vitest";
import {flushPromises, mount} from "@vue/test-utils";
import Header from "@/components/Header.vue";
import {createMemoryHistory, createRouter} from "vue-router";
import {routes} from "@/routes.js";

describe('<Header>', () => {
    let router;

    beforeEach(async () => {
        router = createRouter({
            history: createMemoryHistory(),
            routes: routes
        })
        router.push("/");
        await router.isReady();
    });
    it("should render the correct HTML", async () => {
        const wrapper = mount(Header, {
            global: {
                plugins: [router]
            }
        });
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<header class="header"><a aria-current="page" href="/" class="router-link-active router-link-exact-active header__logo">Mon site</a>
            <nav><a href="/blog" class="">Blog</a><a href="/contact" class="">Contact</a></nav>
          </header>"
        `);
        router.push('/blog');
        await router.isReady();
        await flushPromises();
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<header class="header"><a href="/" class="header__logo">Mon site</a>
            <nav><a href="/blog" class="router-link-active router-link-exact-active" aria-current="page">Blog</a><a href="/contact" class="">Contact</a></nav>
          </header>"
        `);
    });
});