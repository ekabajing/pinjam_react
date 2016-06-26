var homapge = React.createClass({
    render: function () {
        return (
        	<section>
	        	<div id="content" class="homepage">
					<div class="container">
	                    <div class="taksiran-form">
	                        <!-- Nav tabs -->
	                        <ul class="nav nav-tabs row" role="tablist" id="insideTab">
	                            <li role="presentation" class="col-xs-12 col-sm-4 tabone active">
	                                <a href="#langkah1" aria-controls="langkah1" role="tab" data-toggle="tab" class="tab-langkah1"><span class="nomor">1</span>Pilih Kategori<span class="collapsed-btn"></span></a>
	                            </li>
	                            <li role="presentation" class="col-xs-12 col-sm-4 tabtwo">
	                                <a href="#langkah2" aria-controls="langkah2" role="tab" data-toggle="" class="tab-langkah2"><span class="nomor">2</span>Keterangan Barang<span class="collapsed-btn"></span></a>
	                            </li>
	                            <li role="presentation" class="col-xs-12 col-sm-4 tabthree">
	                            <a href="#langkah3" aria-controls="langkah3" role="tab" data-toggle="" class="tab-langkah3"><span class="nomor">3</span>Hasil Taksiran<span class="collapsed-btn"></span></a>
	                            </li>
	                        </ul>

	                        <!-- Tab panes -->
	                        <div class="tab-content" id="insideTabContent">
	                            <div role="tabpanel" class="tab-pane active" id="langkah1">
	                                <div class="tab-title">PILIH KATEGORI BARANG JAMINAN ANDA</div>
	                                    <ul class="taksiranform-menu">
	                                        <li class="mtr"><a href="" page="1" data="1"><span class="icon kendaraan motor"></span>Sepeda Motor</a></li>
	                                        <li><a href="" page="10" data="2"><span class="icon kendaraan mobil"></span>Mobil</a></li>
	                                        <li><a href="" page="2" data="3"><span class="icon laptop"></span>Laptop</a></li>
	                                        <li><a href="" page="3" data="4"><span class="icon hp handphone"></span>Handphone</a></li>
	                                        <li><a href="" page="4" data="5"><span class="icon hp tablet"></span>Tablet PC</a></li>
	                                        <li><a href="" page="5" data="6"><span class="icon kamera"></span>Kamera</a></li>
	                                        <li><a href="" page="7" data="7"><span class="icon perhiasan"></span>Perhiasan Emas</a></li>
	                                    </ul>
	                                </div>
	                                <div role="tabpanel" class="tab-pane" id="langkah2">
	                                    <!-- Motor alert-->
	                                    <div class="moto" style="display:none;">
	                                        <div class="tab-title">JELASKAN KONDISI KENDARAAN JAMINAN ANDA</div>
	                                        <div class="taksiran-kondisi">
	                                            <div class="taksiran-formkondisi" id="form_kendaraan">
	                                                <div class="row">
	                                                    <div class="alert-motor" style="display:none;">
	                                                        <div class="col-xs-12" style="text-align:center;">
	                                                            <img src="images/kredit.png" alt="" />
	                                                            <br><br>
	                                                            <p>Mohon maaf, pinjam.co.id tidak menerima kendaraan yang sedang dalam masa cicilan atau dalam pembiayaan pihak lain. Silahkan melanjutkan taksiran jika kendaraan Anda tidak dalam pembiayaan pihak lain.</p>
	                                                            <br><br>
	                                                            <input type="hidden" id="kendaraan_jenis">
	                                                            <button class="pbutton lanjut">Lanjutkan   <i class="fa fa-play"></i></button>
	                                                        </div>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                            <div class="clear"></div>
	                                        </div>
	                                    </div>
	                                    <div class="moto2" style="display:none;">
	                                        <div class="tab-title">JELASKAN KONDISI SEPEDA MOTOR JAMINAN ANDA</div>
	                                        <div class="taksiran-kondisi">
	                                            <div class="taksiran-formkondisi motor" id="form_kendaraan">
	                                                <div class="row">
	                                                    <div id="form_kendaraan">
	                                                        <div class="col-xs-12 col-sm-2">
	                                                            <div class="taksiran-barang">
	                                                                <div><span class="icon motor"></span>Kendaraan (Sepeda Motor)</div>
	                                                            </div>
	                                                        </div>
	                                                        <div class="col-xs-12 col-sm-3">
	                                                            <div>
	                                                                <select class="textfield select_kendaraan" id="select_kendaraan">
	                                                                    <option>Pilih Merek</option>
	                                                                    <option value="Honda">Honda</option>
	                                                                    <option value="Kawasaki">Kawasaki</option>
	                                                                    <option value="Suzuki">Suzuki</option>
	                                                                    <option value="Yamaha">Yamaha</option>
	                                                                    <option value="Piaggio">Piaggio</option>
	                                                                    <option value="Bajaj">Bajaj</option>
	                                                                    <option value="Jialing">Jialing</option>
	                                                                    <option value="Outlet Kebab Turki B">Outlet Kebab Turki B</option>
	                                                                    <option>OTHER</option>
	                                                                </select>
	                                                            </div>
	                                                            <div>
	                                                                <select class="textfield" id="tipeKendaraan">
	                                                                    <option>Pilih Tipe</option>
	                                                                </select>
	                                                            </div>
	                                                            <div>
	                                                                <input type="text" id="kapasitasMesin"  name="kapasitasMesin" placeholder="Kapasitas Mesin (cc)" class="textfield" />
	                                                            </div>
	                                                            <div>
	                                                                <select class="textfield" name="warnaKendaraan" id="warnaKendaraan">
	                                                                    <option>Pilih Warna</option>
	                                                                    <option value="Abu-abu">Abu-abu</option>
	                                                                    <option value="Biru">Biru</option>
	                                                                    <option value="Cokelat">Cokelat</option>
	                                                                    <option value="Hijau">Hijau</option>
	                                                                    <option value="Hitam">Hitam</option>
	                                                                    <option value="Kuning">Kuning</option>
	                                                                    <option value="Merah">Merah</option>
	                                                                    <option value="Orange">Orange</option>
	                                                                    <option value="Pink">Pink</option>
	                                                                    <option value="Putih">Putih</option>
	                                                                    <option value="Silver">Silver</option>
	                                                                    <option value="Ungu">Ungu</option>                                                            
	                                                                </select>
	                                                            </div>
	                                                        </div>

	                                                        <div class="col-xs-12 col-sm-3">
	                                                            <div>
	                                                                <input type="text" id="tahunPembuatan"  name="tahunPembuatan" placeholder="Tahun Pembuatan" class="textfield tahunPembuatan" />
	                                                            </div>
	                                                            <div>
	                                                                <input type="text" id="masaBerlakuSTNK" name="masaBerlakuSTNK" placeholder="Masa berlaku STNK" class="textfield masaBerlakuSTNK" />
	                                                            </div>
	                                                            <div>
	                                                                <input type="text" id="hargaBeli" name="hargaBeli" placeholder="Harga Beli" class="textfield price" />
	                                                            </div>
	                                                        </div>
	                                                        <div class="col-xs-12 col-sm-4">
	                                                            <div class="form-data">
	                                                            <div>
	                                                                <input type="text" name="namaLengkap" value="" id="namaLengkap" placeholder="Nama Lengkap" class="textfield  input-signup" />
	                                                            </div>
	                                                            <div>
	                                                                <input type="text" name="nomorTelp" value="" id="nomorTelp" placeholder="Nomor Telepon" onkeypress="return isNumber(event)" class="number-only textfield input-signup" />
	                                                            </div>
	                                                            <div>
	                                                                <input type="text" name="email" value="" id="email" placeholder="Email" class="textfield  input-signup" />
	                                                            </div>
	                                                            <div >
	                                                                <input type="hidden" name="password" value="123" id="password" placeholder="Password" class="textfield  input-signup" />
	                                                            </div>
	                                                            <div>
	                                                                <button class="pbutton simpan_lanjut">Lanjutkan  <i class="fa fa-play"></i></button>
	                                                            </div>
	                                                                <div class="clear"></div>
	                                                            </div>
	                                                        </div>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                            <div class="clear"></div>
	                                        </div>
	                                    </div>

	                                    <!-- Mobil -->
	                                    <div class="mobi" style="display:none;">
	                                        <div class="tab-title">JELASKAN KONDISI MOBIL JAMINAN ANDA</div>
	                                        <div class="taksiran-kondisi">
	                                            <div class="taksiran-formkondisi mobil" id="form_kendaraan_mob">
	                                                <div class="row">
	                                                        <div id="form_kendaraan_mob">
	                                                            <div class="col-xs-12 col-sm-2">
	                                                                <div class="taksiran-barang">
	                                                                    <div><span class="icon mobil"></span>Kendaraan (Mobil)</div>
	                                                                </div>
	                                                            </div>
	                                                            <div class="col-xs-12 col-sm-3">
	                                                                <div>
	                                                                    <select class="textfield select_kendaraan" id="select_kendaraan">
	                                                                        <option>Pilih Merek</option>
	                                                                        <option value="TOYOTA">TOYOTA</option>
	                                                                        <option value="DAIHATSU">DAIHATSU</option>
	                                                                        <option value="HONDA">HONDA</option>
	                                                                        <option value="SUZUKI">SUZUKI</option>
	                                                                        <option value="NISSAN">NISSAN</option>
	                                                                        <option value="KIA">KIA</option>
	                                                                        <option value="CHEVROLET">CHEVROLET</option>
	                                                                        <option value="FORD">FORD</option>
	                                                                        <option value="ISUZU">ISUZU</option>
	                                                                        <option value="MAZDA">MAZDA</option>
	                                                                        <option value="BMW">BMW</option>
	                                                                        <option value="MITSUBISHI">MITSUBISHI</option>                              
	                                                                        <option>OTHER</option>
	                                                                    </select>
	                                                                </div>
	                                                                <div>
	                                                                    <select class="textfield" id="tipeKendaraan">
	                                                                        <option>Pilih Tipe</option>
	                                                                    </select>
	                                                                </div>
	                                                                <div>
	                                                                    <input type="text" id="kapasitasMesin"  name="kapasitasMesin" placeholder="Kapasitas Mesin (cc)" class="textfield" />
	                                                                </div>
	                                                                <div>
	                                                                    <select class="textfield" name="warnaKendaraan" id="warnaKendaraan">
	                                                                        <option>Pilih Warna</option>
	                                                                        <option value="Abu-abu">Abu-abu</option>
	                                                                        <option value="Biru">Biru</option>
	                                                                        <option value="Cokelat">Cokelat</option>
	                                                                        <option value="Hijau">Hijau</option>
	                                                                        <option value="Hitam">Hitam</option>
	                                                                        <option value="Kuning">Kuning</option>
	                                                                        <option value="Merah">Merah</option>
	                                                                        <option value="Orange">Orange</option>
	                                                                        <option value="Pink">Pink</option>
	                                                                        <option value="Putih">Putih</option>
	                                                                        <option value="Silver">Silver</option>
	                                                                        <option value="Ungu">Ungu</option>                                                        
	                                                                    </select>
	                                                                </div>
	                                                            </div>

	                                                            <div class="col-xs-12 col-sm-3">
	                                                                <div>
	                                                                    <input type="text" id="tahunPembuatan"  name="tahunPembuatan" placeholder="Tahun Pembuatan" class="textfield tahunPembuatan" />
	                                                                </div>
	                                                                <div>
	                                                                    <input type="text" id="masaBerlakuSTNK" name="masaBerlakuSTNK" placeholder="Masa berlaku STNK" class="textfield masaBerlakuSTNK" />
	                                                                </div>
	                                                                <div>
	                                                                    <input type="text" id="hargaBeli" name="hargaBeli" placeholder="Harga Beli" class="textfield price" />
	                                                                </div>
	                                                            </div>

	                                                            <div class="col-xs-12 col-sm-4">
	                                                                    <div class="form-data">
	                                                                    <div>
	                                                                        <input type="text"  name="namaLengkap" value="" id="namaLengkap" placeholder="Nama Lengkap" class="textfield input-signup" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" name="nomorTelp" value="" id="nomorTelp" placeholder="Nomor Telepon" onkeypress="return isNumber(event)" class="number-only textfield input-signup" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" name="email" value="" id="email" placeholder="Email" class="textfield input-signup" />
	                                                                    </div>
	                                                                    <div >
	        	                                                            <input type="hidden" name="password" value="123" id="password" placeholder="Password" class="textfield  input-signup" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <button class="pbutton simpan_lanjut">Lanjutkan  <i class="fa fa-play"></i></button>
	                                                                    </div>
	                                                                    <div class="clear"></div>
	                                                                </div>
	                                                            </div>
	                                                        </div>
	                                                    </div>
	                                                </div>
	                                                <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                                <div class="clear"></div>
	                                            </div>
	                                        </div>

	                                        <!-- Laptop -->
	                                        <div class="lap" style="display:none;">
	                                            <div class="tab-title">JELASKAN KONDISI LAPTOP JAMINAN ANDA</div>
	                                            <div class="taksiran-kondisi">
	                                                <div class="taksiran-formkondisi laptop">
	                                                    <div class="row">
	                                                        <div class="info-laptop">
	                                                            <div id="validasi_laptop">
	                                                                <div class="col-xs-12 col-sm-2">
	                                                                    <div class="taksiran-barang">
	                                                                        <div><span class="icon laptop"></span>Laptop</div>
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-3">
	                                                                   <div>
	                                                                        <select id="select_laptop" class="textfield input-laptop select_merk" name="merkLaptop" >
	                                                                            <option>Pilih Merek </option>
	                                                                            <option value="Acer Laptop">Acer Laptop</option>
	                                                                            <option value="Apple Laptop">Apple Laptop</option>
	                                                                            <option value="Asus Laptop">Asus Laptop</option>
	                                                                            <option value="Axioo Laptop">Axioo Laptop</option>
	                                                                            <option value="HP Laptop">HP Laptop</option>
	                                                                            <option value="Dell Laptop">Dell Laptop</option>
	                                                                            <option value="Lenovo Laptop">Lenovo Laptop</option>
	                                                                            <option value="Samsung Laptop">Samsung Laptop</option>
	                                                                            <option value="Sony Laptop">Sony Laptop</option>
	                                                                            <option value="Toshiba">Toshiba</option>
	                                                                            <option value="lenovo Ideapad S100">lenovo Ideapad S100</option>
	                                                                            <option value="other">OTHER </option>
	                                                                        </select>
	                                                                    </div>

	                                                                    <div>
	                                                                        <select id="tipeLaptop" class="textfield input-laptop select_tipe" name="tipeLaptop" >
	                                                                            <option value="">Pilih Type</option>
	                                                                            <option value="other">OTHER</option>
	                                                                        </select>
	                                                                    </div>

	                                                                    <div>
	                                                                        <select id="sistemOperasi" name="sistemOperasi" class="textfield input-laptop">
	                                                                            <option value="">- Sistem Operasi -</option>
	                                                                            <option>Windows 8</option>
	                                                                            <option>Windows 7</option>
	                                                                            <option>Windows Vista</option>
	                                                                            <option>Windows XP</option>
	                                                                            <option>Apple MacOS</option>
	                                                                            <option>Linux</option>
	                                                                        </select>
	                                                                    </div>

	                                                                    <div>
	                                                                        <input type="text" id="kapasitasHarddisk" name="kapasitasHarddisk" placeholder="Kapasitas Hard Disk" class="textfield input-laptop" />
	                                                                    </div>
	                                                                </div>

	                                                                <div class="col-xs-12 col-sm-3">
	                                                                    <div>
	                                                                        <select id="warnaLaptop" class="textfield input-laptop" name="warnaLaptop"  >
	                                                                            <option value="">Pilih Warna</option>
	                                                                            <option value="Abu-abu">Abu-abu</option>
	                                                                            <option value="Biru">Biru</option>
	                                                                            <option value="Cokelat">Cokelat</option>
	                                                                            <option value="Hijau">Hijau</option>
	                                                                            <option value="Hitam">Hitam</option>
	                                                                            <option value="Kuning">Kuning</option>
	                                                                            <option value="Merah">Merah</option>
	                                                                            <option value="Orange">Orange</option>
	                                                                            <option value="Pink">Pink</option>
	                                                                            <option value="Putih">Putih</option>
	                                                                            <option value="Silver">Silver</option>
	                                                                            <option value="Ungu">Ungu</option>
	                                                                        </select>
	                                                                    </div>

	                                                                    <div>
	                                                                        <input type="text" id="hargaBeli_laptop" name="hargaBeli_laptop" placeholder="Harga Beli" class="textfield price input-laptop" />
	                                                                    </div>

	                                                                    <div>
	                                                                        <input type="text" id="tahun_beli_laptop" name="tahun_beli_laptop" placeholder="Tahun Pembelian" class="textfield input-laptop" />
	                                                                    </div>
	                                                                </div>

	                                                                <div class="col-xs-12 col-sm-4">
	                                                                    <div class="form-data">
	                                                                        <div>
	                                                                            <input type="text" name="namaLengkap" value="" id="namaLengkap" placeholder="Nama Lengkap" class="textfield  input-signup" />
	                                                                        </div>
	                                                                        <div>
	                                                                            <input type="text" name="nomorTelp" value="" id="nomorTelp" placeholder="Nomor Telepon" onkeypress="return isNumber(event)" class="number-only textfield input-signup" />
	                                                                        </div>
	                                                                        <div>
	                                                                            <input type="text" name="email" value="" id="email" placeholder="Email" class="textfield  input-signup" />
	                                                                        </div>
	                                                                        <div >
	                	                                                        <input type="hidden" name="password" value="123" id="password" placeholder="Password" class="textfield  input-signup" />
	                                                                        </div>

	                	                                                        <div>
	                                                                            <button class="pbutton simpan_lanjut">Lanjutkan  <i class="fa fa-play"></i></button>
	                                                                        </div>
	                                                                    </div>
	                                                                </div>
	                                                            </div>
	                                                        </div> 
	                                                    </div>
	                                                </div>
	                                                <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                                <div class="clear"></div>
	                                            </div>
	                                        </div>

	                                        <!-- Handphone -->
	                                        <div class="hand" style="display:none;">
	                                            <div class="tab-title">JELASKAN KONDISI HANDPHONE JAMINAN ANDA</div>
	                                            <div class="taksiran-kondisi">
	                                                <div class="taksiran-formkondisi handphone">
	                                                    <div class="row">
	                                                        <div class="info-hand">
	                                                            <div id="validasi_hand">
	                                                                <div class="col-xs-12 col-sm-2">
	                                                                    <div class="taksiran-barang">
	                                                                        <div><span class="icon handphone"></span>Handphone</div>
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-3">
	                                                                    <div>
	                                                                        <select id="select_hp" class="textfield input-hp select_merk" name="merkHandphone" >
	                                                                            <option>Pilih Merek </option>
	                                                                            <option value="Apple HP">Apple HP</option>
	                                                                            <option value="Asus HP">Asus HP</option>
	                                                                            <option value="Blackberry HP">Blackberry HP</option>
	                                                                            <option value="HTC HP">HTC HP</option>
	                                                                            <option value="Lenovo HP">Lenovo HP</option>
	                                                                            <option value="LG HP">LG HP</option>
	                                                                            <option value="Nokia HP">Nokia HP</option>
	                                                                            <option value="OPPO HP">OPPO HP</option>
	                                                                            <option value="Samsung HP">Samsung HP</option>
	                                                                            <option value="Smartfren HP">Smartfren HP</option>
	                                                                            <option value="Sony HP">Sony HP</option>                           
	                                                                            <option value="other">OTHER </option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div>
	                                                                        <select id="tipeHandphone" class="textfield input-hp select_tipe" name="tipeHandphone" >
	                                                                            <option value="">Pilih Type</option>
	                                                                            <option value="other">OTHER</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" id="kapasitasMemoriInternalHP" name="kapasitasMemoriInternalHP" placeholder="Kapasitas Memori Internal" class="textfield input-hp" />
	                                                                    </div>
	                                                                </div>

	                                                                <div class="col-xs-12 col-sm-3">
	                                                                   <div>
	                                                                        <select id="WarnaHp" class="textfield input-hp" name="WarnaHp"  >
	                                                                            <option value="">Pilih Warna</option>
	                                                                            <option value="Abu-abu">Abu-abu</option>
	                                                                            <option value="Biru">Biru</option>
	                                                                            <option value="Cokelat">Cokelat</option>
	                                                                            <option value="Hijau">Hijau</option>
	                                                                            <option value="Hitam">Hitam</option>
	                                                                            <option value="Kuning">Kuning</option>
	                                                                            <option value="Merah">Merah</option>
	                                                                            <option value="Orange">Orange</option>
	                                                                            <option value="Pink">Pink</option>
	                                                                            <option value="Putih">Putih</option>
	                                                                            <option value="Silver">Silver</option>
	                                                                            <option value="Ungu">Ungu</option>                                           
	                                                                        </select>
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" id="hargaBelihp" name="hargaBelihp" placeholder="Harga Beli" class="textfield price input-hp" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" id="tahun_beli_hp" name="tahun_beli_hp" placeholder="Tahun Pembelian" class="textfield input-hp" />
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-4">
	                                                                    <div class="form-data">
	                                                                    <div>
	                                                                        <input type="text" name="namaLengkap" value="" id="namaLengkap" placeholder="Nama Lengkap" class="textfield input-signup" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" name="nomorTelp" value="" id="nomorTelp" placeholder="Nomor Telepon" onkeypress="return isNumber(event)" class="number-only textfield input-signup" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" name="email" value="" id="email" placeholder="Email" class="textfield input-signup" />
	                                                                    </div>
	                                                                    <div >
	            	                                                        <input type="hidden" name="password" value="123" id="password" placeholder="Password" class="textfield  input-signup" />
	                                                                    </div>

	            	                                                        <div>
	                                                                        <button class="pbutton simpan_lanjut">Lanjutkan  <i class="fa fa-play"></i></button>
	                                                                    </div>
	                                                                    </div>
	                                                                </div>
	                                                            </div>
	                                                        </div> 
	                                                    </div>
	                                                </div>
	                                                <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                                <div class="clear"></div>
	                                            </div>
	                                        </div>

	                                        <!--  Tablet PC -->
	                                        <div class="pc" style="display:none;">
	                                            <div class="tab-title">JELASKAN KONDISI TABLET PC JAMINAN ANDA</div>
	                                            <div class="taksiran-kondisi tablet">
	                                                <div class="taksiran-formkondisi" id="form_pc">
	                                                    <div class="row">
	                                                        <div class="info-pc">
	                                                            <div id="validasi_mobil">
	                                                                <div class="col-xs-12 col-sm-2">
	                                                                    <div class="taksiran-barang">
	                                                                        <div><span class="icon tablet"></span>Tablet PC</div>
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-3">
	                                                                    <div>
	                                                                        <select id="select_tablet" class="textfield input-tablet select_merk" name="merkTabletPC" >
	                                                                            <option>Pilih Merek </option>
	                                                                            <option value="Apple Tablet">Apple Tablet</option>
	                                                                            <option value="Asus Tablet">Asus Tablet</option>
	                                                                            <option value="Blackberry Tablet">Blackberry Tablet</option>
	                                                                            <option value="Lenovo Tablet">Lenovo Tablet</option>
	                                                                            <option value="Samsung Tablet">Samsung Tablet</option>
	                                                                            <option value="Smartfren Tablet">Smartfren Tablet</option>
	                                                                            <option value="Advance Tablet">Advance Tablet</option>
	                                                                            <option value="ACER Tablet">ACER Tablet</option>                             
	                                                                            <option value="other">OTHER </option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div>
	                                                                        <select id="tipeTabletPC" class="textfield input-tablet select_tipe" name="tipeTabletPC" >
	                                                                            <option value="">Pilih Type</option>
	                                                                            <option value="other">OTHER</option>
	                                                                        </select>
	                                                                    </div> 
	                                                                    <div>
	                                                                        <input type="text" id="kapasitasMemoriInternalTablet" name="kapasitasMemoriInternalTablet" placeholder="Kapasitas Memori Internal" class="textfield input-tablet" />
	                                                                    </div>                                                     
	                                                                </div>

	                                                                <div class="col-xs-12 col-sm-3">
	                                                                    <div>
	                                                                        <select id="warnaTabletPC" class="textfield input-tablet" name="warnaTabletPC"  >
	                                                                            <option value="">Pilih Warna</option>
	                                                                            <option value="Abu-abu">Abu-abu</option>
	                                                                            <option value="Biru">Biru</option>
	                                                                            <option value="Cokelat">Cokelat</option>
	                                                                            <option value="Hijau">Hijau</option>
	                                                                            <option value="Hitam">Hitam</option>
	                                                                            <option value="Kuning">Kuning</option>
	                                                                            <option value="Merah">Merah</option>
	                                                                            <option value="Orange">Orange</option>
	                                                                            <option value="Pink">Pink</option>
	                                                                            <option value="Putih">Putih</option>
	                                                                            <option value="Silver">Silver</option>
	                                                                            <option value="Ungu">Ungu</option>                                           
	                                                                        </select>
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" id="hargaBeliTablet" name="hargaBeliTablet" placeholder="Harga Beli" class="textfield price input-tablet"  />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" id="tahun_beli_tablet" name="tahun_beli_tablet" placeholder="Tahun Pembelian" class="textfield input-tablet" />
	                                                                    </div>                                                       
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-4">
	                                                                    <div class="form-data">
	                                                                    <div>
	                                                                        <input type="text" name="namaLengkap" value="" id="namaLengkap" placeholder="Nama Lengkap" class="textfield  input-signup" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" name="nomorTelp" value="" id="nomorTelp" placeholder="Nomor Telepon" onkeypress="return isNumber(event)" class="number-only textfield input-signup" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" name="email" value="" id="email" placeholder="Email" class="textfield  input-signup" />
	                                                                    </div>
	                                                                    <div >
	            	                                                        <input type="hidden" name="password" value="123" id="password" placeholder="Password" class="textfield  input-signup" />
	                                                                    </div>

	                                                                    <div>
	                                                                        <button class="pbutton simpan_lanjut">Lanjutkan  <i class="fa fa-play"></i></button>
	                                                                    </div>
	                                                                    </div>
	                                                                </div>
	                                                            </div>
	                                                        </div>
	                                                    </div>
	                                                </div>
	                                                <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                                <div class="clear"></div>
	                                            </div>
	                                        </div>

	                                        <!-- Kamera -->
	                                        <div class="cam" style="display:none;">
	                                            <div class="tab-title">JELASKAN KONDISI KAMERA JAMINAN ANDA</div>
	                                            <div class="taksiran-kondisi">
	                                                <div class="taksiran-formkondisi kamera" id="form_cam">
	                                                    <div class="row">                                            
	                                                        <div class="info-cam">
	                                                            <div id="validasi_cam">
	                                                                <div class="col-xs-12 col-sm-2">
	                                                                    <div class="taksiran-barang">
	                                                                        <div><span class="icon kamera"></span>Kamera</div>
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-3">
	                                                                    <div>
	                                                                        <select id="select_kamera" class="textfield input-kamera select_merk" name="select_kamera" >
	                                                                            <option>Pilih Merk</option>
	                                                                            <option value="Sony Kamera">Sony Kamera</option>
	                                                                            <option value="Olympus Kamera">Olympus Kamera</option>
	                                                                            <option value="Canon Kamera">Canon Kamera</option>
	                                                                            <option value="Samsung Kamera">Samsung Kamera</option>
	                                                                            <option value="Fujifilm Kamera">Fujifilm Kamera</option>
	                                                                            <option value="Nikon Kamera">Nikon Kamera</option>
	                                                                            <option value="Kodak Kamera">Kodak Kamera</option>
	                                                                            <option value="Go Pro Kamera">Go Pro Kamera</option>
	                                                                            <option value="other">OTHER</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div>
	                                                                        <select id="tipeKamera" class="textfield input-kamera select_tipe" name="tipeKamera" >
	                                                                            <option value="">Pilih Type</option>
	                                                                            <option value="other">OTHER</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" id="kelengkapanLain" name="kelengkapanLain" placeholder="Kelengkapan Lain (Lensa, Flash, dll...)" class="textfield input-kamera" />
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-3">
	                                                                    <div>
	                                                                        <input type="text" id="hargaBeliKamera" name="hargaBeliKamera" placeholder="Harga Beli" class="textfield price input-kamera" />
	                                                                    </div>
	                                                                    <div>
	                                                                        <input type="text" id="tahun_beli_kamera" name="tahun_beli_kamera" placeholder="Tahun Pembelian" class="textfield input-kamera" />
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-4">
	                                                                    <div class="form-data">
	                                                                        <div>
	                                                                            <input type="text" name="namaLengkap" value="" id="namaLengkap" placeholder="Nama Lengkap" class="textfield  input-signup" />
	                                                                        </div>
	                                                                        <div>
	                                                                            <input type="text" name="nomorTelp" value="" id="nomorTelp" placeholder="Nomor Telepon" onkeypress="return isNumber(event)" class="number-only textfield input-signup" />
	                                                                        </div>
	                                                                        <div>
	                                                                            <input type="text" name="email" value="" id="email" placeholder="Email" class="textfield  input-signup" />
	                                                                        </div>
	                                                                        <div >
	                	                                                        <input type="hidden" name="password" value="123" id="password" placeholder="Password" class="textfield  input-signup" />
	                                                                        </div>

	                                                                        <div>
	                                                                            <button class="pbutton simpan_lanjut">Lanjutkan  <i class="fa fa-play"></i></button>
	                                                                        </div>
	                                                                    </div>
	                                                                </div>
	                                                            </div>
	                                                        </div>
	                                                    </div>
	                                                </div>
	                                                <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                                <div class="clear"></div>
	                                            </div>
	                                        </div>

	                                        <!-- perhiasan -->
	                                        <div class="emas" style="display:none;">
	                                            <div class="tab-title">JELASKAN KONDISI PERHIASAN EMAS JAMINAN ANDA</div>
	                                            <div class="taksiran-kondisi">
	                                                <div class="taksiran-formkondisi emas" id="form_emas">
	                                                    <div class="row">
	                                                        <div class="info-emas">
	                                                            <div id="validasi_emas">
	                                                                <div class="col-xs-12 col-sm-2">
	                                                                    <div class="taksiran-barang">
	                                                                        <div><span class="icon perhiasan"></span>Perhiasan Emas</div>
	                                                                    </div>
	                                                                </div>
	                                                                <div class="col-xs-12 col-sm-7 col-md-6">
	                                                                    <div class="col-xs-12">
	                                                                        <select name="tipeEmas" class="textfield">
	                                                                            <option id="lm" value="logam_mulia">Logam Mulia (Emas)</option>
	                                                                            <option id="perhiasan" value="perhiasan">Perhiasan Emas</option>
	                                                                            <option id="berlian" value="berlian">Perhiasan dengan Berlian</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <!-- perhiasan -->
	                                                                    <div class="col-xs-12">
	                                                                        <input type="text" name="berat_kotor" id="berat_kotor" placeholder="Berat Kotor (gram)" class="inp-perhiasan textfield" />
	                                                                    </div>
	                                                                    <div class="col-xs-12">
	                                                                        <input type="text" name="berat_bersih" id="berat_bersih" placeholder="Berat Bersih (gram)" class="inp-perhiasan textfield" />
	                                                                    </div>
	                                                                    <div class="col-xs-12">
	                                                                        <select name="kadar" id="kadar" class="inp-perhiasan textfield" >
	                                                                            <option value="">Kadar</option>
	                                                                            <option value="16">&nbsp; 16 karat</option>
	                                                                            <option value="17">&nbsp; 17 karat</option>
	                                                                            <option value="18">&nbsp; 18 karat</option>
	                                                                            <option value="19">&nbsp; 19 karat</option>
	                                                                            <option value="20">&nbsp; 20 karat</option>
	                                                                            <option value="21">&nbsp; 21 karat</option>
	                                                                            <option value="22">&nbsp; 22 karat</option>
	                                                                            <option value="23">&nbsp; 23 karat</option>
	                                                                            <option value="24">&nbsp; 24 karat</option>
	                                                                        </select>
	                                                                    </div>

	                                                                    <!-- logam mulia -->
	                                                                    <div class="col-xs-12">
	                                                                        <select name="jumlah" class="inp-logam-mulia textfield">
	                                                                            <option value="" id="lm_jumlah_null">Jumlah Keping</option>
	                                                                            <option value="1" id="lm_jumlah_1">&nbsp; 1 Keping</option>
	                                                                            <option value="2" id="lm_jumlah_2">&nbsp; 2 Keping</option>
	                                                                            <option value="3" id="lm_jumlah_3">&nbsp; 3 Keping</option>
	                                                                            <option value="4" id="lm_jumlah_4">&nbsp; 4 Keping</option>
	                                                                            <option value="5" id="lm_jumlah_5">&nbsp; 5 Keping</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div class="col-xs-12">
	                                                                        <input type="text" name="lm_berat_1" id="lm_berat_1" placeholder="Berat 1 (gram)" class="textfield" />
	                                                                        <input type="text" name="lm_berat_2" id="lm_berat_2" placeholder="Berat 2 (gram)" class="textfield" />
	                                                                        <input type="text" name="lm_berat_3" id="lm_berat_3" placeholder="Berat 3 (gram)" class="textfield" />
	                                                                        <input type="text" name="lm_berat_4" id="lm_berat_4" placeholder="Berat 4 (gram)" class="textfield" />
	                                                                        <input type="text" name="lm_berat_5" id="lm_berat_5" placeholder="Berat 5 (gram)" class="textfield" />
	                                                                    </div>

	                                                                    <!-- berlian -->
	                                                                    <div class="col-xs-6">
	                                                                        <input id="berlian_berat_kotor" class="inp-berlian textfield" type="text" placeholder="Berat Kotor (gram)" name="berlian_berat_kotor" autocomplete="off" style="display: inline;">
	                                                                    </div>
	                                                                    <div class="col-xs-6">
	                                                                        <input id="berlian_berat_bersih" class="inp-berlian textfield" type="text" placeholder="Berat Bersih (gram)" name="berlian_berat_bersih" autocomplete="off" style="display: inline;">
	                                                                    </div>
	                                                                    <div class="col-xs-6">
	                                                                        <select name="berlian_kadar" id="berlian_kadar" class="inp-berlian textfield" >
	                                                                            <option value="">Kadar</option>
	                                                                            <option value="16">&nbsp; 16 karat</option>
	                                                                            <option value="17">&nbsp; 17 karat</option>
	                                                                            <option value="18">&nbsp; 18 karat</option>
	                                                                            <option value="19">&nbsp; 19 karat</option>
	                                                                            <option value="20">&nbsp; 20 karat</option>
	                                                                            <option value="21">&nbsp; 21 karat</option>
	                                                                            <option value="22">&nbsp; 22 karat</option>
	                                                                            <option value="23">&nbsp; 23 karat</option>
	                                                                            <option value="24">&nbsp; 24 karat</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div class="col-xs-6">
	                                                                        <input type="text" name="berlian_jumlah" id="berlian_jumlah" placeholder="Jumlah Berlian" class="inp-berlian textfield" />
	                                                                    </div>
	                                                                    <div class="col-xs-6">
	                                                                        <select name="berlianShape" class="textfield inp-berlian">
	                                                                            <option value="">Bentuk Berlian</option>
	                                                                            <option value="Round">Round</option>
	                                                                            <option value="Heart">Heart</option>
	                                                                            <option value="Oval">Oval</option>
	                                                                            <option value="Pear">Pear</option>
	                                                                            <option value="Marquise">Marquise</option>
	                                                                            <option value="Emerard">Emerard</option>
	                                                                            <option value="Square">Square</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div class="col-xs-6">
	                                                                        <select name="berlianCarat" class="textfield inp-berlian">
	                                                                            <option value="">Pilih carat</option>
	                                                                            <option>0.05</option>
	                                                                            <option>0.06</option>
	                                                                            <option>0.07</option>
	                                                                            <option>0.08</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div class="col-xs-12">
	                                                                        <div><img src="images/colorscale.gif" width="100%" class="inp-berlian" value="1" /></div>
	                                                                    </div>
	                                                                    <div class="col-xs-12">
	                                                                        <select name="berlianColor" class="textfield inp-berlian">
	                                                                            <option value="">Warna Berlian</option>
	                                                                            <option value="DEF - Colorless">DEF - Colorless</option>
	                                                                            <option value="GHIJ - Near Colorless">GHIJ - Near Colorless</option>
	                                                                            <option value="KLM - Faint Yellow">KLM - Faint Yellow</option>
	                                                                            <option value="NOPQR - Very Light Yellow">NOPQR - Very Light Yellow</option>
	                                                                            <option value="STUV - Light Yellow">STUV - Light Yellow</option>
	                                                                            <option value="Z - Yellow">Z - Yellow</option>
	                                                                            <option value=" - Fancy Yellow"> - Fancy Yellow</option>
	                                                                        </select>
	                                                                    </div>
	                                                                    <div class="col-xs-12">
	                                                                        <div><img src="images/clarityscale.gif" width="100%" class="inp-berlian" value="1" /></div>
	                                                                    </div><br>
	                                                        <div class="col-xs-12">
	                                                            <select name="berlianClarity" class="textfield inp-berlian">
	                                                                <option value="">Clarity</option>
	                                                                                                                                <option value="FL - Flawless">FL - Flawless</option><option value="VS - Very Slightly Imperfect">VS - Very Slightly Imperfect</option><option value="SI - Slightly Imperfect">SI - Slightly Imperfect</option><option value="I1 - Imperfect 1">I1 - Imperfect 1</option><option value="I2 - Imperfect 2">I2 - Imperfect 2</option><option value="I3 - Imperfect 3">I3 - Imperfect 3</option>                                                            </select>
	                                                        </div>
	                                                        <div class="col-xs-6">
	                                                            <select name="berlianCutScale" class="textfield inp-berlian">
	                                                                <option value="">Cut Scale</option>
	                                                                                                                                <option value="VG - Very Good">VG - Very Good</option><option value="G - Good">G - Good</option><option value="M - Fair (medium)">M - Fair (medium)</option><option value="P - Poor">P - Poor</option>                                                            </select>
	                                                        </div>
	                                                        <div class="col-xs-6">
	                                                            <select name="berlianSertifikat" class="textfield inp-berlian">
	                                                                <option value="">Sertifikat</option>
	                                                                                                                        <option value="Tidak ada sertifikat">Tidak ada sertifikat</option><option value="GIA Lab (USA)">GIA Lab (USA)</option><option value="AIGS Lab (Thailand)">AIGS Lab (Thailand)</option><option value="GRS Lab (Swiss)">GRS Lab (Swiss)</option><option value="GIT Lab (Thailand)">GIT Lab (Thailand)</option><option value="AGL Lab (Indonesia)">AGL Lab (Indonesia)</option>                                                            </select>
	                                                        </div>
	                                                    </div>
	                                                    <div class="col-xs-12 col-sm-4">
	                                                         <div class="form-data">
	                                                        <div>
	                                                            <input type="text" name="namaLengkap" value="" id="namaLengkap" placeholder="Nama Lengkap" class="textfield" />
	                                                        </div>
	                                                        <div>
	                                                            <input type="text" name="nomorTelp" value="" id="nomorTelp" placeholder="Nomor Telepon" onkeypress="return isNumber(event)" class="number-only textfield input-signup" />
	                                                        </div>
	                                                        <div>
	                                                            <input type="text" name="email" value="" id="email" placeholder="Email" class="textfield" />
	                                                        </div>
	                                                         <div >
		                                                         <input type="hidden" name="password" value="123" id="password" placeholder="Password" class="textfield  input-signup" />
	                                                         </div>

	                                                         <div>
	                                                            <button class="pbutton simpan_lanjut">Lanjutkan  <i class="fa fa-play"></i></button>
	                                                        </div>
	                                                        </div>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                            
	                                        </div>
	                                    </div>
	                                    <a class="link-kembali"><span class="fa fa-caret-left"></span> Kembali</a>
	                                    <div class="clear"></div>
	                                </div>
	                            </div>
	                            </div>
	                            <div role="tabpanel" class="tab-pane" id="langkah3">
	                                <div class="tab-title">HASIL TAKSIRAN ONLINE BARANG JAMINAN ANDA</div>

	                                <div class="taksiran-hasil">
	                                    <div class="row">
	                                        <div class="col-xs-12 col-sm-3 icon-wrap">
	                                            <div class="icon jempol"></div>
	                                           <!--                       <div class="bintang">
	                                            <div class="acidjs-rating-stars">
	                                                <form>
	                                                    <input type="radio" name="group-1" id="group-1-0" value="5" /><label for="group-1-0"></label>
	                                                    <input type="radio" name="group-1" id="group-1-1" value="4" /><label for="group-1-1"></label>
	                                                    <input type="radio" name="group-1" id="group-1-2" value="3" /><label for="group-1-2"></label>
	                                                    <input type="radio" name="group-1" id="group-1-3" value="2" /><label for="group-1-3"></label>
	                                                    <input type="radio" name="group-1" id="group-1-4"  value="1" /><label for="group-1-4"></label>
	                                                </form>

	                                            </div>
	                                                <p style="text-align: right;width:96%;font-size:13px">Beri Rating Layanan Kami.</p>
	                                            </div> -->
	                                        </div>
	                                        <div class="col-xs-12 col-sm-9">
	                                            <div>
	                                                <p>Terima kasih telah melakukan taksiran online kami. Barang Anda kami taksir seharga</p>
	                                                <span class="harga">Rp. 500.000 - Rp. 1.000.000</span>
	                                                <p>Apakah anda setuju dengan penawaran dari kami dan mengajukan pinjaman?</p>
	                                                <br />
													<span id="ajuan">
	                                                <button  class="pbutton">AJUKAN PINJAMAN</button>
													</span>
	                                                <a href="" class="pbutton-o" id="barang_lain">TAKSIR BARANG LAIN</a>
	                                            </div>
												
			
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>

	                    </div>					<div class="row" id="kenapa">
							<div class="col-sm-6">

								<div class="leftside-container">
									<h2 class="title">KENAPA <span>PINJAM?</span></h2>
									<div class="content">
										<p>Pinjam Indonesia menawarkan solusi kebutuhan dana cepat dengan cara yang paling mudah, murah dan aman. Buktikan dengan mendaftarkan diri Anda <a href="https://www.pinjam.co.id/register"> di sini </a></p>
									</div>

									<!-- Penjelasan -->
									<div class="penjelasan">

										<!-- Nav tabs -->
										<ul class="nav nav-tabs">
											<li class="active">
												<a href="#tab1" data-toggle="tab"><span class="icon icon1"></span></a>
											</li>
											<li>
												<a href="#tab2" data-toggle="tab"><span class="icon icon2"></span></a>
											</li>
											<li>
												<a href="#tab3" data-toggle="tab"><span class="icon icon3"></span></a>
											</li>
											<li>
												<a href="#tab4" data-toggle="tab"><span class="icon icon4"></span></a>
											</li>
											<li>
												<a href="#tab5" data-toggle="tab"><span class="icon icon5"></span></a>
											</li>
											<li>
												<a href="#tab6" data-toggle="tab"><span class="icon icon6"></span></a>
											</li>
										</ul>

										<!-- Tab panes -->
										<div class="tab-content">
											<div class="tab-pane active" id="tab1">
												<h3 class="title">TARIF BIAYA MODAL LEBIH EFISIEN</h3>
												<p class="content">Dengan tarif biaya pinjaman 0,7% per-minggu, Anda dapat menentukan sendiri lama pinjaman sesuai kebutuhan Anda, dan membayar sesuai dengan lama pinjaman yang Anda telah tentukan.</p>
											</div>
											<div class="tab-pane" id="tab2">
												<h3 class="title">24/7 REAL TIME ONLINE VALUATION</h3>
												<p class="content">Anda dapat mengetahui estimasi taksiran atas barang jaminan Anda secara online selama 24 jam setiap hari, sehingga Anda dapat merencakan dan mengatur keuangan secara lebih baik.</p>
											</div>
											<div class="tab-pane" id="tab3">
												<h3 class="title">PROSES LEBIH MUDAH</h3>
												<p class="content">Memfasilitasi Anda untuk mendapatkan pelayanan yang lebih mudah dengan menyediakan layanan antar jemput barang jaminan. Kami hadir dalam media website dan aplikasi mobile, sehingga tidak perlu bertransaksi secara tatap muka. </p>
											</div>
											<div class="tab-pane" id="tab4">
												<h3 class="title">PARTNER YANG DAPAT DIANDALKAN</h3>
												<p class="content">Dimanapun, kapanpun dan berapapun Anda membutuhkan dana cepat, kami siap melayani Anda. </p>
											</div>
											<div class="tab-pane" id="tab5">
												<h3 class="title">PRIVASI & KENYAMANAN TRANSAKSI</h3>
												<p class="content">Kebutuhan pribadi hanya Anda yang berhak mengetahuinya, untuk itu kami memastikan Anda merasa nyaman dalam bertransaksi dengan menjaga kerahasiaan data dan keuangan Anda.</p>
											</div>
											<div class="tab-pane" id="tab6">
												<h3 class="title">KEAMANAN TERJAGA</h3>
												<p class="content">Kami menyimpan barang jaminan Anda  dengan tingkat keamanan yang tinggi serta melindunginya dengan asuransi, sehingga Anda dapat memiliki kembali barang kesayangan Anda seperti kondisi semula.</p>
											</div>
										</div>
									</div>
								</div>

							</div>
							<div class="col-sm-6">

								<h2 class="title">CARA <span>KERJA</span></h2>

								<div class="video-object">
									<object type="application/x-shockwave-flash" data="https://www.youtube.com/v/ZKQh4vYIYSQ" class="youtube-video">
										<param name="movie" value="https://www.youtube.com/v/ZKQh4vYIYSQ">
										<param name="wmode" value="transparent">
									</object>
								</div>
							</div>
						</div>
					</div>
				</div>
			<section>
       	);
    }
});
React.render(
    document.getElementById("content")
);