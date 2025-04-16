import HomePage from "@/pages/HomePage.vue";
import BlogPage from "@/pages/BlogPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import SinglePage from "@/pages/SinglePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import BlogLayout from "@/components/BlogLayout.vue";
import RelativePosts from "@/components/RelativePosts.vue";

export const routes = [
    {path: '/', component: HomePage, name: 'home'},
    {
        path: '/blog', component: BlogLayout, children: [
            {path: '', component: BlogPage, name: 'posts.index'},
            {
                path: ':id(\\d+)',
                components: {
                    default: SinglePage,
                    sidebar: RelativePosts,
                },
                props: {
                    default: true,
                    sidebar: false
                },
                name: 'posts.show'
            },
        ]
    },
    {path: '/contact', component: ContactPage, name: 'contact'},
    {path: '/:pathMatch(.*)*', component: NotFoundPage},
]