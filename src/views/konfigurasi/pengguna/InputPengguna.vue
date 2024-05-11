<template>
    <content-header title="Input Pengguna Gudang" />
    <content>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              
              <form action="" method="post">
                  <div class="row">
                      <div class="col-6">
                          <div class="form-group">
                              <label for="username_user">Username</label>
                              <input type="text" class="form-control" id="username_user" placeholder="Masukan Username (cont. ganareynara)" required>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="form-group">
                              <label for="nama_user">Nama</label>
                              <input type="text" class="form-control" id="nama_user" placeholder="Masukan Nama (cont. Gana Aditya Reynara)" required>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-6">
                          <div class="form-group">
                              <label for="lokasi_gudang_user">Petugas Gudang</label>
                                <select class="form-control" id="lokasi_gudang_user" required>
                                    <option selected>== Pilih Salah Satu ==</option>
                                    <option value="g1">Gudang 1</option>
                                    <option value="g2">Gudang 2</option>
                                    <option value="g3">Gudang 3</option>
                                    <option value="lainnya">Lainnya</option>
                                </select>
                          </div>
                      </div>
                      <div class="col-6">
                          <div class="form-group">
                              <label for="jabatan_user">Jabatan Petugas</label>
                                <select class="form-control" id="jabatan_user" required>
                                    <option selected>== Pilih Salah Satu ==</option>
                                    <option value="superuser">Superuser</option>
                                    <option value="admin">Admin</option>
                                    <option value="prepare">Prepare</option>
                                    <option value="checking">Checking</option>
                                    <option value="packing">Packing</option>
                                </select>
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