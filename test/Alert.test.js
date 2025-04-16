import { describe, it, expect} from "vitest";
import { mount } from "@vue/test-utils";
import Alert from "@/components/Alert.vue";

describe('<Alert>', () => {
    it("should render the correct HTML", () => {
        const wrapper = mount(Alert, {
            props: {
                type: "danger",
            },
            slots: {
                default: 'Bonjour'
            }
        });
        expect(wrapper.html()).toMatchInlineSnapshot(`"<div class="alert alert-danger">Bonjour<button aria-label="Close">×</button></div>"`)
    });
    it('should emit close when closing', async () => {
        const wrapper = mount(Alert, {
            props: {
                type: "danger",
            },
            slots: {
                default: 'Bonjour'
            }
        });
        await wrapper.get('[aria-label="Close"]').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('close');
        expect(wrapper.emitted().close).toHaveLength(1);
    });
});