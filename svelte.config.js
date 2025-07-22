import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: '',
    },
    prerender: {
      default: true
    }
  }
};
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}
