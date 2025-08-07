export const  route = [
    {
        path: '/init',
        name: 'init',
        component: () => import('@/views/init/init.vue')
    },
     {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: () => import('@/views/HelloWorld.vue')
    }
]
