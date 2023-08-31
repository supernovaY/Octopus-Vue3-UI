// shims-vue.d.ts
declare module '*.vue' {
    import { DefineComponent } from "vue";
    const componentOptions: DefineComponent<{}, {}, any>;
    export default componentOptions;
}
declare module '*.md' {
    const str: string;
    export default str;
}