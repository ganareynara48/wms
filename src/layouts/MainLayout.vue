<template>
  <div class="wrapper">
    
    <Navbar/>

    <Sidebar/>

    <div class="content-wrapper">

      <router-view/>

    </div>

    <footer class="main-footer">
      Warehouse Management Systems.
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