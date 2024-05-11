<template>
  <content-header title="List Merk Sparepart" />
  <content>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            
            <div class="table-responsive">
              <table
                id="myTable"
                class="table table-bordered table-striped"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {

      $("#myTable").DataTable({
        data        : response.data,
        paging      : true,
        lengthChange: false,
        searching   : true,
        ordering    : false,
        info        : true,
        autoWidth   : false,
        responsive  : true,
        language: {
          search: '',
          searchPlaceholder: 'Cari Sesuatu..'
        },
        dom: 'frtipb',
        pageLength: 50,
        columns: [
            { data: "id" },
            { data: "name" },
            { data: "username" },
            { data: "email" },
            { data: "phone" },
            { data: "website" },
        ]
      });
    });
  },
};
</script>
