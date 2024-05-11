<template>
    <content-header title="Input Tipe Motor" />
    <content>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              
                <form action="" method="post">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_tipe_motor">Nama Tipe Motor</label>
                                <input type="text" class="form-control" id="nama_tipe_motor" placeholder="Masukan Nama Tipe Motor (cont. Mio)" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="nama_lain_tipe_motor">Nama Lain Tipe Motor</label>
                                <input type="text" class="form-control" id="nama_lain_tipe_motor" placeholder="Masukan Nama Lain Tipe Motor (cont. Mio Smile)">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label for="tahun_tipe_motor">Tahun Tipe Motor</label>
                                <input type="number" class="form-control" id="tahun_tipe_motor" placeholder="Masukan Tahun Tipe Motor (cont. 2010)" required>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="jenis_tipe_motor">Jenis Tipe Motor</label>
                                <select class="form-control" id="jenis_tipe_motor" required>
                                    <option selected>== Pilih Salah Satu ==</option>
                                    <option value="kopling">Motor Kopling</option>
                                    <option value="bebek">Motor Bebek</option>
                                    <option value="matik">Motor Matik</option>
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