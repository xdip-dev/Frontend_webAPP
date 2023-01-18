import {createRouter, createWebHistory} from "vue-router";

import Home from "./pages/Home.vue";
import Nomenclature from "./pages/Nomenclature.vue";
import LastQuantity from "./pages/LastQuantity.vue";
import Goodtable from "./pages/Goodtable.vue";
import UpdateGoogleSheet from "./pages/UpdateGoogleSheet.vue";

const router =  createRouter(
    {
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            component : Home,
        },
        {
            path:'/nomenclature',
            component : Nomenclature,
        },
        
        {
            path:'/last_stock_state',
            component : LastQuantity,
        },
        
        {
            path:'/test',
            component : Goodtable,
        },
        
        {
            path:'/updategooglesheet',
            component : UpdateGoogleSheet,
        }
    ]
    }
)

export default router;