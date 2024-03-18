<template>

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" class="brand-link">
        <img src="templates/dist/img/logo_wms.png"
                class="brand-image img-circle elevation-3" style="opacity: 0.8" />
            <span class="brand-text font-weight-light">WMS | Online</span>
        </a>

        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                    <img src="templates/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                </div>
                <div class="info">
                    <a href="#" class="d-block">Alexander Pierce</a>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    
                    <nav-item icon="fas fa-home" link="/">
                        Beranda
                    </nav-item>

                    <nav-item icon="fas fa-info-circle" link="/about">
                        Tentang
                    </nav-item>

                </ul>
            </nav>
        </div>
    </aside>

</template>

<script>
import NavItem from "./Navitem.vue"

export default {
    components : {
        NavItem
    }
}
</script>