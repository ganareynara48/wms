<template>
    <content-header title="Input Jenis Sparepart" />
    <content>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              
              <form action="" method="post">
                  <div class="row">
                      <div class="col-6">
                          <div class="form-group">
                              <label for="nama_jenis">Nama Jenis</label>
                              <input type="text" class="form-control" id="nama_jenis" placeholder="Masukan Nama Jenis (cont. Piston)" required>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="form-group">
                              <label for="nama_lain_jenis">Nama Lain Jenis</label>
                              <input type="text" class="form-control" id="nama_lain_jenis" placeholder="Masukan Nama Jenis (cont. Seher)">
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-12 text-right">
                          <button class="btn btn-primary mr-3">Input</button>
                          <button class="btn btn-danger">Reset</button>
                      </div>
                  </div>
              </form>
                
            </div>
          </div>
        </div>
      </div>
    </content>
  </template>