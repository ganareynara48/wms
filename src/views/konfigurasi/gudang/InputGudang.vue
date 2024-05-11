<template>
    <content-header title="Input Gudang" />
    <content>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              
              <form action="" method="post">
                  <div class="row">
                      <div class="col-6">
                          <div class="form-group">
                              <label for="nama_gudang">Nama Gudang</label>
                              <input type="text" class="form-control" id="nama_gudang" placeholder="Masukan Nama Gudang (cont. gudang loram)" required>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="form-group">
                              <label for="alamat_gudang">Alamat Gudang</label>
                              <input type="text" class="form-control" id="alamat_gudang" placeholder="Masukan Alamat (cont. jl loram wetan)" required>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-12">
                          <div class="form-group">
                              <label for="urutan_gudang">Urutan Gudang</label>
                              <input type="number" class="form-control" id="urutan_gudang" placeholder="Masukan urutan (cont. 1)" required>
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