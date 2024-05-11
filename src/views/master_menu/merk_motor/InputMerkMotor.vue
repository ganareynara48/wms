<template>
    <content-header title="Input Merk Motor" />
    <content>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              
                <form action="" method="post">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_merk_motor">Nama Merk Motor</label>
                                <input type="text" class="form-control" id="nama_merk_motor" placeholder="Masukan Nama Merk Motor (cont. Yamaha)" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_lain_merk_motor">Nama Lain Merk Motor</label>
                                <input type="text" class="form-control" id="nama_lain_merk_motor" placeholder="Masukan Nama Lain Merk Motor (cont. YMH)">
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