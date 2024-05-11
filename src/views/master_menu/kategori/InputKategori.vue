<template>
    <content-header title="Input Kategori Sparepart" />
    <content>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              
                <form action="" method="post">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_kategori">Nama Kategori</label>
                                <input type="text" class="form-control" id="nama_kategori" placeholder="Masukan Nama Kategori (cont. Mesin)" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_lain_kategori">Nama Lain Kategori</label>
                                <input type="text" class="form-control" id="nama_lain_kategori" placeholder="Masukan Nama Kategori (cont. Engine)">
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