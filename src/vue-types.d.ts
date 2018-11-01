declare module "vue/types/vue" {
  export interface Component {
    asyncData?: number
  }
  export interface VueConstructor<Vue> {
    asyncData?: number
  }
}
