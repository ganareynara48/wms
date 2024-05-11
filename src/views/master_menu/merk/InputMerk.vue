<template>
    <content-header title="Input Merk Sparepart" />
    <content>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              
                <form action="" method="post">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_merk">Nama Merk</label>
                                <input type="text" class="form-control" id="nama_merk" placeholder="Masukan Nama Merk (cont. YSS)" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_jenis_merk">Nama Jenis Merk</label>
                                <select class="form-control" id="nama_jenis_merk" required>
                                    <option selected>== Pilih Salah Satu ==</option>
                                    <option value="ori">ORI</option>
                                    <option value="oem">OEM</option>
                                    <option value="after_market">AFTER MARKET</option>
                                    <option value="lainnya">LAINNYA</option>
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