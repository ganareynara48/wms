<template>

    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <router-link to="/" class="brand-link">
            <img src="templates/dist/img/logo_wms.png"
                class="brand-image img-circle elevation-3" style="opacity: 0.8" />
            <span class="brand-text font-weight-light">WMS | Online</span>
        </router-link>

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

                    <!-- master menu -->
                    <li class="nav-header">MASTER BARANG</li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fas fa-cubes"></i>
                            <p>
                                Kategori SparePart
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/kategori/input">
                                Input Kategori
                            </nav-item>
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/kategori/list">
                                List Kategori
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fas fa-wrench"></i>
                            <p>
                                Jenis SparePart
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/jenis/input">
                                Input Jenis
                            </nav-item>
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/jenis/list">
                                List Jenis
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fas fa-hdd"></i>
                            <p>
                                Merk SparePart
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/merk/input">
                                Input Merk
                            </nav-item>
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/merk/list">
                                List Merk
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fas fa-motorcycle"></i>
                            <p>
                                Merk Motor
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/merk_motor/input">
                                Input Merk Motor
                            </nav-item>
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/merk_motor/list">
                                List Merk Motor
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fas fa-motorcycle"></i>
                            <p>
                                Tipe Motor
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/tipe_motor/input">
                                Input Tipe Motor
                            </nav-item>
                            <nav-item icon="fas fa-chevron-circle-right" link="/master/tipe_motor/list">
                                List Tipe Motor
                            </nav-item>
                        </ul>
                    </li>
                    <!-- end master menu -->

                    <!-- pengaturan -->
                    <li class="nav-header">MASTER KONFIGURASI</li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fas fa-users"></i>
                            <p>
                                Pengguna Sistem
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-chevron-circle-right" link="/konfigurasi/pengguna/input">
                                Input Pengguna
                            </nav-item>
                            <nav-item icon="fas fa-chevron-circle-right" link="/konfigurasi/pengguna/list">
                                List Pengguna
                            </nav-item>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="nav-icon far fas fa-warehouse"></i>
                            <p>
                                Gudang
                                <i class="fas fa-angle-left right"></i>
                            </p>
                        </a>

                        <ul class="nav nav-treeview">
                            <nav-item icon="fas fa-chevron-circle-right" link="/konfigurasi/gudang/input">
                                Input Gudang
                            </nav-item>
                            <nav-item icon="fas fa-chevron-circle-right" link="/konfigurasi/gudang/list">
                                List Gudang
                            </nav-item>
                        </ul>
                    </li>

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