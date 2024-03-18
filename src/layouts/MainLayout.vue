<template>
  <div class="wrapper">
    
    <Navbar/>

    <Sidebar/>

    <div class="content-wrapper">

      <router-view/>

    </div>

    <footer class="main-footer">
      <div class="float-right d-none d-sm-inline">Anything you want</div>

      <strong>Copyright &copy; 2014-2021
        <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
    </footer>
  </div>
</template>

<script>
import Navbar from "./custom/Navbar.vue";
import Sidebar from "./custom/Sidebar.vue";
export default {
    components: {
        Navbar,
        Sidebar
    }
}
</script>