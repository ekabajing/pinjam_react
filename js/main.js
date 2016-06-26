$(document).ready(function () {
	$(".simpan_lanjut").click(function(){
		obj = $(this).parent().parent();
		GetValue(obj);
	});

	$(".taksiranform-menu .icon").click(function(){
		$jenis_form = $(this).attr("class").split(' ')[1];

	});

    $('.inp-perhiasan').hide();
    $('.inp-berlian').hide();
    $('#lm_berat_1').hide();
    $('#lm_berat_2').hide();
    $('#lm_berat_3').hide();
    $('#lm_berat_4').hide();
    $('#lm_berat_5').hide();
    $('#berlian_jumlah').hide();
	
	$('#ajuan').click(function(){
		var jenis = $jenis_form;
		var id_gadai = $id_gadai;
        // alert($id_gadai);
                var star    = $("input[name='group-1']:checked").val();
        var values = {

            'star': star,
            'id_gadai' : id_gadai,

        };
        if($("input[name='group-1']:checked").length){
            $.post("https://www.pinjam.co.id/upload/save_star", values,
        }
		document.cookie = "id_gadai" + "=" +id_gadai; 
		document.cookie = "jenis" + "=" +jenis; 
		setTimeout('delayer()', 500);
	});
	
	$("#barang_lain").click(function(){
        var id_gadai = $id_gadai;
        var star    = $("input[name='group-1']:checked").val();
        var values = {
            'star': star,
            'id_gadai' : id_gadai,
        };
        if($("input[name='group-1']:checked").length){
            $.post("https://www.pinjam.co.id/upload/save_star", values,
        }
    });

    $('[name="tipeEmas"]').change(function () {
        var tipe_emas = $(this).val();
        if (tipe_emas == 'logam_mulia') {
            $('.inp-logam-mulia').show();
            $('.inp-perhiasan').hide();
            $('.inp-berlian').hide();
            $('#lm_berat_1').hide();
            $('#lm_berat_2').hide();
            $('#lm_berat_3').hide();
            $('#lm_berat_4').hide();
            $('#lm_berat_5').hide();
            $('#berlian_jumlah').hide();
        }
        else if (tipe_emas == 'perhiasan') {
            $('.inp-perhiasan').show();
            $('.inp-logam-mulia').hide();
            $('.inp-berlian').hide();
            $('#lm_berat_1').hide();
            $('#lm_berat_2').hide();
            $('#lm_berat_3').hide();
            $('#lm_berat_4').hide();
            $('#lm_berat_5').hide();
            $('#berlian_jumlah').hide();
        }
        else if (tipe_emas == 'berlian') {
            $('.inp-berlian').show();
            $('#berlian_jumlah').show();
            $('.inp-perhiasan').hide();
            $('.inp-logam-mulia').hide();
            $('#lm_berat_1').hide();
            $('#lm_berat_2').hide();
            $('#lm_berat_3').hide();
            $('#lm_berat_4').hide();
            $('#lm_berat_5').hide();
        }
    });

    $('#lm_berat_1').hide();
    $('#lm_berat_2').hide();
    $('#lm_berat_3').hide();
    $('#lm_berat_4').hide();
    $('#lm_berat_5').hide();

    $('[name="jumlah"]').change(function () {
        $val = $(this).val();
        if ($val == '') {
            $('#lm_berat_1').hide();
            $('#lm_berat_2').hide();
            $('#lm_berat_3').hide();
            $('#lm_berat_4').hide();
            $('#lm_berat_5').hide();
        }
        else if ($val == 1) {
            $('#lm_berat_1').show();
            $('#lm_berat_2').hide();
            $('#lm_berat_3').hide();
            $('#lm_berat_4').hide();
            $('#lm_berat_5').hide();
        }
        else if ($val == 2) {
            $('#lm_berat_1').show();
            $('#lm_berat_2').show();
            $('#lm_berat_3').hide();
            $('#lm_berat_4').hide();
            $('#lm_berat_5').hide();
        }
        else if ($val == 3) {
            $('#lm_berat_1').show();
            $('#lm_berat_2').show();
            $('#lm_berat_3').show();
            $('#lm_berat_4').hide();
            $('#lm_berat_5').hide();
        }
        else if ($val == 4) {
            $('#lm_berat_1').show();
            $('#lm_berat_2').show();
            $('#lm_berat_3').show();
            $('#lm_berat_4').show();
            $('#lm_berat_5').hide();
        }
        else if ($val == 5) {
            $('#lm_berat_1').show();
            $('#lm_berat_2').show();
            $('#lm_berat_3').show();
            $('#lm_berat_4').show();
            $('#lm_berat_5').show();
        }
    });
};
function delayer(){
   window.location = "https://www.pinjam.co.id/pengajuan_pinjaman";
}


$('.taksiranform-menu > li > a').click(function () {
            var klik = $(this).attr('data');
            var klik2 = $(this).attr('page');
            $("#value_input").val(klik2);
            if(klik == 1){
                $('.moto').show();
                $('.alert-motor').show();
                $('#kendaraan_jenis').val(klik);
                $('.moto2').hide();
                $('.mobi').hide();
                $('.lap').hide();
                $('.hand').hide();
                $('.emas').hide();
                $('.cam').hide();
                $('.pc').hide();
                $('#insideTab a[href="#langkah2"]').tab('show');
            }else if(klik == 2){
                $('.moto').show();
                $('.alert-motor').show();
                $('#kendaraan_jenis').val(klik);
                $('.mobi').hide();
                $('.emas').hide();
                $('.moto2').hide();
                $('.cam').hide();
                $('.pc').hide();
                $('.lap').hide();
                $('.hand').hide();
                // $('.moto').hide();
                $('#insideTab a[href="#langkah2"]').tab('show');
            }else if(klik == 3){
                $('.lap').show();
                $('.emas').hide();
                $('.moto2').hide();
                $('.cam').hide();
                $('.pc').hide();
                $('.hand').hide();
                $('.mobi').hide();
                $('.moto').hide();
                $('.alert-motor').hide();
                $('#insideTab a[href="#langkah2"]').tab('show');
            }else if(klik == 4){
                $('.hand').show();
                $('.emas').hide();
                $('.moto2').hide();
                $('.cam').hide();
                $('.pc').hide();
                $('.lap').hide();
                $('.mobi').hide();
                $('.moto').hide();
                $('.alert-motor').hide();
                $('#insideTab a[href="#langkah2"]').tab('show');
            }else if(klik == 5){
                $('.pc').show();
                $('.emas').hide();
                $('.moto2').hide();
                $('.cam').hide();
                $('.hand').hide();
                $('.lap').hide();
                $('.mobi').hide();
                $('.moto').hide();
                $('.alert-motor').hide();
                $('#insideTab a[href="#langkah2"]').tab('show');
            }else if(klik == 6){
                $('.cam').show();
                $('.emas').hide();
                $('.moto2').hide();
                $('.pc').hide();
                $('.hand').hide();
                $('.lap').hide();
                $('.mobi').hide();
                $('.moto').hide();
                $('.alert-motor').hide();
                $('#insideTab a[href="#langkah2"]').tab('show');
            }else if(klik == 7){
                $('.emas').show();
                $('.cam').hide();
                $('.moto2').hide();
                $('.pc').hide();
                $('.hand').hide();
                $('.lap').hide();
                $('.mobi').hide();
                $('.moto').hide();
                $('.alert-motor').hide();
                $('#insideTab a[href="#langkah2"]').tab('show');
            }
            return false;
        });

        $('.lanjut').click(function(){
            $('.moto').hide();
            $('.alert-motor').hide();
            var jen=$('#kendaraan_jenis').val();
                if(jen==1){
                $('.moto2').show();
                // $('.info-motor').show();
                }
                else{
                $('.mobi').show();
                }
        });

        $(".link-kembali").click(function(){
            $('#insideTab a[href="#langkah1"]').tab('show');
        });


        var current_num = 1;
        var counter = 0;

        $('.btn-upload').hide();
        $('.btn-upload[num=' + current_num + ']').show();

        $('.btn-upload').click(function (e) {

            e.preventDefault();
            var num = $(this).attr('num');
            $('.multi[num=' + num + ']').click();
        });

        $('.multi').change(function (e) {
            e.preventDefault();
            $("#upload_poto").show();
            if ($(this).val() != '') {
                var num = $(this).attr('num');
                var num_val = $('#num_val').val();
                if (num_val == "") {
                    $('#num_val').val(num);
                } else {
                    $('#num_val').val(num_val + ',' + num);
                }
                //$('#content-val').append('<span num="'+num+'">'+$(this).val()+' &nbsp; <button class="clear-motor" num="'+num+'">X</button></span>');
                $('#content-val').append('<span num="' + num + '">' + $(this).val() + ' &nbsp; <button  class="clear-motor" num="' + num + '">&times;</button></span>');

                current_num++;
                counter++;
                $('.btn-upload').hide();
                if (counter < 5)
                    $('.btn-upload[num=' + current_num + ']').show();
            }
        });


        // $('.clear-motor').live('click', function (e) {
        //     e.preventDefault();
        //     var num = $(this).attr('num');

        //     $('#content-val span[num=' + num + ']').remove();
        //     $('.multi[num=' + num + ']').val('');
        //     current_num = parseInt(num);
        //     counter--;
        //     $('.btn-upload').hide();
        //     if (counter < 5)
        //         $('.btn-upload[num=' + current_num + ']').show();
        //     if (current_num == 1)
        //         $('#upload_poto').hide();
        // });






        //Laptop

        $('.btn_upload_laptop').hide();
        $('.btn_upload_laptop[num=' + current_num + ']').show();

        $('.btn_upload_laptop').click(function (e) {

            e.preventDefault();
            var num = $(this).attr('num');
            $('.multi_laptop[num=' + num + ']').click();
        });

        $('.multi_laptop').change(function (e) {
            e.preventDefault();
            $("#upload_poto_laptop").show();
            if ($(this).val() != '') {
                var num = $(this).attr('num');
                var num_val = $('#num_val').val();
                if (num_val == "") {
                    $('#num_val').val(num);
                } else {
                    $('#num_val').val(num_val + ',' + num);
                }
                //$('#content-val').append('<span num="'+num+'">'+$(this).val()+' &nbsp; <button class="clear-motor" num="'+num+'">X</button></span>');
                $('#content_val_laptop').append('<span num="' + num + '">' + $(this).val() + ' &nbsp; <button class="clear-motor" num="' + num + '">&times;</button></span>');

                current_num++;
                counter++;
                $('.btn_upload_laptop').hide();
                if (counter < 5)
                    $('.btn_upload_laptop[num=' + current_num + ']').show();
                if (current_num == 1)
                    $('#upload_poto_laptop').hide();
            }
        });


        // $('.clear-motor').live('click', function (e) {
        //     e.preventDefault();
        //     var num = $(this).attr('num');

        //     $('#content_val_laptop span[num=' + num + ']').remove();
        //     $('.multi_laptop[num=' + num + ']').val('');
        //     current_num = parseInt(num);
        //     counter--;
        //     $('.btn_upload_laptop').hide();
        //     if (counter < 5)
        //         $('.btn_upload_laptop[num=' + current_num + ']').show();
        //     if (current_num == 1)
        //         $('#upload_poto_laptop').hide();
        // });

        //Handphone


        $('.btn_upload_handphone').hide();
        $('.btn_upload_handphone[num=' + current_num + ']').show();

        $('.btn_upload_handphone').click(function (e) {

            e.preventDefault();
            var num = $(this).attr('num');
            $('.multi_upload_handphone[num=' + num + ']').click();
        });

        $('.multi_upload_handphone').change(function (e) {
            e.preventDefault();
            $("#upload_poto_handphone").show();
            if ($(this).val() != '') {
                var num = $(this).attr('num');
                var num_val = $('#num_val').val();
                if (num_val == "") {
                    $('#num_val').val(num);
                } else {
                    $('#num_val').val(num_val + ',' + num);
                }
                //$('#content-val').append('<span num="'+num+'">'+$(this).val()+' &nbsp; <button class="clear-motor" num="'+num+'">X</button></span>');
                $('#content_val_handphone').append('<span num="' + num + '">' + $(this).val() + ' &nbsp; <button class="clear-motor" num="' + num + '">&times;</button></span>');

                current_num++;
                counter++;
                $('.btn_upload_handphone').hide();
                if (counter < 5)
                    $('.btn_upload_handphone[num=' + current_num + ']').show();
            }
        });


        // $('.clear-motor').live('click', function (e) {
        //     e.preventDefault();
        //     var num = $(this).attr('num');

        //     $('#content_val_handphone span[num=' + num + ']').remove();
        //     $('.multi_upload_handphone[num=' + num + ']').val('');
        //     current_num = parseInt(num);
        //     counter--;
        //     $('.btn_upload_handphone').hide();
        //     if (counter < 5)
        //         $('.btn_upload_handphone[num=' + current_num + ']').show();
        //     if (current_num == 1)
        //         $('#upload_poto_handphone').hide();
        // });


        //Tablet


        $('.btn_upload_tablet').hide();
        $('.btn_upload_tablet[num=' + current_num + ']').show();

        $('.btn_upload_tablet').click(function (e) {

            e.preventDefault();
            var num = $(this).attr('num');
            $('.multi_upload_tablet[num=' + num + ']').click();
        });

        $('.multi_upload_tablet').change(function (e) {
            e.preventDefault();
            $("#upload_poto_tablet").show();
            if ($(this).val() != '') {
                var num = $(this).attr('num');
                var num_val = $('#num_val').val();
                if (num_val == "") {
                    $('#num_val').val(num);
                } else {
                    $('#num_val').val(num_val + ',' + num);
                }
                //$('#content-val').append('<span num="'+num+'">'+$(this).val()+' &nbsp; <button class="clear-motor" num="'+num+'">X</button></span>');
                $('#content_val_tablet').append('<span num="' + num + '">' + $(this).val() + ' &nbsp; <button class="clear-motor" num="' + num + '">&times;</button></span>');

                current_num++;
                counter++;
                $('.btn_upload_tablet').hide();
                if (counter < 5)
                    $('.btn_upload_tablet[num=' + current_num + ']').show();
            }
        });


        // $('.clear-motor').live('click', function (e) {
        //     e.preventDefault();
        //     var num = $(this).attr('num');

        //     $('#content_val_tablet span[num=' + num + ']').remove();
        //     $('.multi_upload_tablet[num=' + num + ']').val('');
        //     current_num = parseInt(num);
        //     counter--;
        //     $('.btn_upload_tablet').hide();
        //     if (counter < 5)
        //         $('.btn_upload_tablet[num=' + current_num + ']').show();
        //     if (current_num == 1)
        //         $('#upload_poto_tablet').hide();
        // });


        //Kamera
        $('.btn_upload_kamera').hide();
        $('.btn_upload_kamera[num=' + current_num + ']').show();

        $('.btn_upload_kamera').click(function (e) {

            e.preventDefault();
            var num = $(this).attr('num');
            $('.multi_upload_kamera[num=' + num + ']').click();
        });

        $('.multi_upload_kamera').change(function (e) {
            e.preventDefault();
            $("#upload_poto_kamera").show();
            if ($(this).val() != '') {
                var num = $(this).attr('num');
                var num_val = $('#num_val').val();
                if (num_val == "") {
                    $('#num_val').val(num);
                } else {
                    $('#num_val').val(num_val + ',' + num);
                }
                //$('#content-val').append('<span num="'+num+'">'+$(this).val()+' &nbsp; <button class="clear-motor" num="'+num+'">X</button></span>');
                $('#content_val_kamera').append('<span num="' + num + '">' + $(this).val() + ' &nbsp; <button class="clear-motor" num="' + num + '">&times;</button></span>');

                current_num++;
                counter++;
                $('.btn_upload_kamera').hide();
                if (counter < 5)
                    $('.btn_upload_kamera[num=' + current_num + ']').show();
            }
        });


        // $('.clear-motor').live('click', function (e) {
        //     e.preventDefault();
        //     var num = $(this).attr('num');

        //     $('#content_val_kamera span[num=' + num + ']').remove();
        //     $('.multi_upload_tablet[num=' + num + ']').val('');
        //     current_num = parseInt(num);
        //     counter--;
        //     $('.btn_upload_kamera').hide();
        //     if (counter < 5)
        //         $('.btn_upload_kamera[num=' + current_num + ']').show();
        //     if (current_num == 1)
        //         $('#upload_poto_kamera').hide();
        // });


        //--//
        //var file_name = '';
        $jenis_form = '';
        $id_gadai = '';
        function GetValue(obj) {

                var email_check = $(obj).find("#email").val();
                console.log(email_check);
                if (!re.test(email_check)) {
                    alert('Alamat email tidak valid!');
                    return false;
                }

                //Kendaraan//
                var sukses = false;
                $(obj).find('.input-signup').each(function () {
                    if ($(this).val() == '') {
                        alert('Informasi harus diisi lengkap !');
                        sukses = false;
                        return false;
                    }
                    else {
                        sukses = true;

                    }
                });
            console.log(sukses);
            if (sukses == true)
            {
                var id_jenis_barang = $("#value_input").val();

                if(id_jenis_barang == '1')
                {
                    $parent = 'moto2';
                }
                else
                {
                    $parent = 'mobi';
                }

                var kodeVoucher = $("#kodeVoucher").val();

                var merkKendaraan = $('.'+$parent+' #select_kendaraan').val();
                var tipeKendaraan = $('.'+$parent+' #tipeKendaraan').val();
                var kapasitasMesin = $('.'+$parent+' #kapasitasMesin').val();
                var warnaKendaraan = $('.'+$parent+' #warnaKendaraan').val();
                var tahunPembuatan = $('.'+$parent+' #tahunPembuatan').val();
                var masaBerlakuSTNK = $('.'+$parent+' #masaBerlakuSTNK').val();
                var hargaBeli = $('.'+$parent+' #hargaBeli').val();

                var upload = $('#upload').val();

                //Laptop//
                var merkLaptop = $('#select_laptop').val();
                var tipeLaptop = $('#tipeLaptop').val();
                var sistemOperasi = $('#sistemOperasi').val();
                var hargaBeli_laptop = $('#hargaBeli_laptop').val();
                var kapasitasHarddisk = $('#kapasitasHarddisk').val();
                var tahun_beli_laptop = $('#tahun_beli_laptop').val();

                var warnaLaptop = $("#warnaLaptop").val();

                //Hp//
                var merkHandphone = $('#select_hp').val();
                var tipeHandphone = $('#tipeHandphone').val();
                var kapasitasMemoriInternalHP = $('#kapasitasMemoriInternalHP').val();
                var hargaBelihp = $('#hargaBelihp').val();
                var tahun_beli_hp = $('#tahun_beli_hp').val();
                var WarnaHp = $('#WarnaHp').val();

                //Tablet//
                var merkTabletPC = $('#select_tablet').val();
                var tipeTabletPC = $('#tipeTabletPC').val();
                var kapasitasMemoriInternalTablet = $('#kapasitasMemoriInternalTablet').val();
                var hargaBeliTablet = $('#hargaBeliTablet').val();
                var tahun_beli_tablet = $('#tahun_beli_tablet').val();
                var warnaTabletPC = $('#warnaTabletPC').val();

                //Kamera//
                var merkKamera = $('#select_kamera').val();
                var tipeKamera = $('#tipeKamera').val();
                var kelengkapanLain = $('#kelengkapanLain').val();
                var hargaBeliKamera = $('#hargaBeliKamera').val();
                var tahun_beli_kamera = $('#tahun_beli_kamera').val();

                //User//
                var namaLengkap = $(obj).find('#namaLengkap').val();
                var nomorTelp = $(obj).find('#nomorTelp').val();
                var email = $(obj).find('#email').val();
                var password = $(obj).find('#password').val();


                //Upload//

                // values untuk masukan data voucher
                var values = {
                    //kendaraan//
                    'kodeVoucher': kodeVoucher,
                    'merkKendaraan': merkKendaraan,
                    'tipeKendaraan': tipeKendaraan,
                    'kapasitasMesin': kapasitasMesin,
                    'warnaKendaraan': warnaKendaraan,
                    'tahunPembuatan': tahunPembuatan,
                    'masaBerlakuSTNK': masaBerlakuSTNK,
                    'hargaBeli': hargaBeli,
                    'upload': upload,
                    'id_jenis_barang': id_jenis_barang,
                   // 'foto': file_name,
                    //laptop//
                    'merkLaptop': merkLaptop,
                    'tipeLaptop': tipeLaptop,
                    'sistemOperasi': sistemOperasi,
                    'hargaBeli_laptop': hargaBeli_laptop,
                    'tahun_beli_laptop': tahun_beli_laptop,
                    'kapasitasHarddisk': kapasitasHarddisk,
                    //Hp//
                    'merkHandphone': merkHandphone,
                    'tipeHandphone': tipeHandphone,
                    'kapasitasMemoriInternalHP': kapasitasMemoriInternalHP,
                    'hargaBelihp': hargaBelihp,
                    'tahun_beli_hp': tahun_beli_hp,
                    'WarnaHp': WarnaHp,
                    //Tablet//
                    'merkTabletPC': merkTabletPC,
                    'tipeTabletPC': tipeTabletPC,
                    'kapasitasMemoriInternalTablet': kapasitasMemoriInternalTablet,
                    'hargaBeliTablet': hargaBeliTablet,
                    'tahun_beli_tablet': tahun_beli_tablet,
                    'warnaTabletPC': warnaTabletPC,
                    //Kamera//
                    'merkKamera': merkKamera,
                    'tipeKamera': tipeKamera,
                    'kelengkapanLain': kelengkapanLain,
                    'hargaBeliKamera': hargaBeliKamera,
                    'tahun_beli_kamera': tahun_beli_kamera,
                    //Perhiasan//
                    'beratKotor': $('[name=berat_kotor]').val(),
                    'beratBersih': $('[name=berat_bersih]').val(),
                    'kadar': $('[name=kadar]').val(),
                    'lm_berat_1': $('[name=lm_berat_1]').val(),
                    'lm_berat_2': $('[name=lm_berat_2]').val(),
                    'lm_berat_3': $('[name=lm_berat_3]').val(),
                    'lm_berat_4': $('[name=lm_berat_4]').val(),
                    'lm_berat_5': $('[name=lm_berat_5]').val(),
                    //Berlian//
                    'berlianShape': $('[name=berlianShape]').val(),
                    'berlianCarat': $('[name=berlianCarat]').val(),
                    'berlianColor': $('[name=berlianColor]').val(),
                    'berlianClarity': $('[name=berlianClarity]').val(),
                    'berlianCutScale': $('[name=berlianCutScale]').val(),
                    'berlianSertifikat': $('[name=berlianSertifikat]').val(),
                    'berlian_berat_kotor': $('[name="berlian_berat_kotor"]').val(),
                    'berlian_berat_bersih': $('[name="berlian_berat_bersih"]').val(),
                    'berlian_kadar': $('[name="berlian_kadar"]').val(),
                    'berlian_jumlah': $('[name="berlian_jumlah"]').val(),
                    //User//
                    'namaLengkap': namaLengkap,
                    'nomorTelp': nomorTelp,
                    'email': email,
                    'password': password,
                };


                /**
                 *     $.ajax({
                 *         url:'https://www.pinjam.co.id/ajax/kendaraan',
                 *         type: "GET",
                 *         data: values,
                 *         success: function(result){
                 *                 alert(result);
                 *         }
                 *
                 *     });
                 */

                $(".simpan_lanjut").html("<img src='images/loading.gif'>");

                //Send Ajax Post
                // proses voucher
                $.post("https://www.pinjam.co.id/upload/kendaraan", values,
                        function (data) {
                            console.log(data);
                            if (data == 'gagal-taksir') {
                                $("#form_taksir").hide();
                                $("#hasil_taksir").show();
                                $("#taksir-gagal").show();
                            }
                            else {
                                var nilai_taksiran = data.split('-');
                                $("#taksir_bawah").html(nilai_taksiran[0]);
                                $("#taksir_atas").html(nilai_taksiran[1]);
                                $("#maaf").html(nilai_taksiran[2]);
                                $("#form_taksir").hide();
                                $("#hasil_taksir").show();
                                $("#taksir-sukses").show();


                                    $("#iya").attr('href', 'https://www.pinjam.co.id/register/index/' + nilai_taksiran[3]);
                            }


                            $('#insideTab a[href="#langkah3"]').tab('show');

                            $(".taksiran-hasil .harga").text(data.split('--')[0]);
                            $id_gadai = data.split('--')[1].split('-')[1];

                        });

            }




        }


        //Seperator
         $(".price").priceFormat({
             centsLimit: 0,
             prefix: '',
             thousandsSeparator: '.'
         });


        var end_year = '2006';
        var start_year = '2016';

        //Input date Zebra Date Picker
        // $('#tahunPembuatan').Zebra_DatePicker({
        //     format: 'Y-m'
        // });

        //$("#iya").unbind('click');
        $("#iya").click(function ()
        {
                window.location = $(this).attr('href');
        }

        )
        $("#tahun_beli_laptop").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
        $(".tahunPembuatan").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
        // $('#tahun_beli_laptop, #tahun_pembuatan_laptop').Zebra_DatePicker({
        //     format: 'Y-m'
        // });
        $("#tahun_beli_hp").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
        // $('#tahun_beli_hp, #tahun_pembuatan_hp').Zebra_DatePicker({
        //     format: 'Y-m'
        // });
        $("#tahun_beli_tablet").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
        // $('#tahun_beli_tablet, #tahun_pembuatan_tablet').Zebra_DatePicker({
        //     format: 'Y-m'
        // });

        $("#tahun_beli_kamera").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
        $(".masaBerlakuSTNK").mask("99/99/9999",{placeholder:"dd/mm/yyyy"});
        // $('#tahun_beli_kamera, #tahun_pembuatan_kamera').Zebra_DatePicker({
        //     format: 'Y-m'
        // });
        // $('#masaBerlakuSTNK').Zebra_DatePicker({
        //     format: 'Y-m'
        // });


        //Select
        // $("#tempat_lahir, #kota_id, #kota_sekarang").select2(
        //         {
        //             width: '100%'


        //         }

        // );



        $(".select_kendaraan").change(function ()
        {
            var parent = $(this).parent().parent();
            var id_select_kendaraan = $(this).val();
            var target = $(parent).find('#tipeKendaraan');
            var values = {
                'id_select_kendaraan': id_select_kendaraan,
            }
            var other = '<option value="other">OTHER</option>';

            $.post("https://www.pinjam.co.id/upload/get_type_kendaraan", values,
                    function (data) {
                        var hasil = $.parseJSON(data);
                        target.empty();
                        for (var i in hasil) {
                            var d = hasil[i];
                            target.append('<option value="' + d['nama'] + '">' + d['nama'] + '</option>');
                        }
                        target.append(other);
                    });
        });

        $("#select_laptop").change(function ()
        {
            var id_select_kendaraan = $(this).val();
            var values = {
                'id_select_kendaraan': id_select_kendaraan,
            }
            var other = '<option value="other">OTHER</option>';

            $.post("https://www.pinjam.co.id/upload/get_type_kendaraan", values,
                    function (data) {
                        var target = $('#tipeLaptop');
                        var hasil = $.parseJSON(data);
                        target.empty();
                        for (var i in hasil) {
                            var d = hasil[i];
                            target.append('<option value="' + d['nama'] + '">' + d['nama'] + '</option>');
                        }
                        target.append(other);
                    });
        })


        $("#select_hp").change(function ()
        {
            var id_select_kendaraan = $(this).val();
            var values = {
                'id_select_kendaraan': id_select_kendaraan,
            }
            var other = '<option value="other">OTHER</option>';

            $.post("https://www.pinjam.co.id/upload/get_type_kendaraan", values,
                    function (data) {
                        var target = $('#tipeHandphone');
                        var hasil = $.parseJSON(data);
                        target.empty();
                        for (var i in hasil) {
                            var d = hasil[i];
                            target.append('<option value="' + d['nama'] + '">' + d['nama'] + '</option>');
                        }
                        target.append(other);
                    });
        })


        $("#select_tablet").change(function ()
        {
            var id_select_kendaraan = $(this).val();
            var values = {
                'id_select_kendaraan': id_select_kendaraan,
            }
            var other = '<option value="other">OTHER</option>';

            $.post("https://www.pinjam.co.id/upload/get_type_kendaraan", values,
                    function (data) {
                        var target = $('#tipeTabletPC');
                        var hasil = $.parseJSON(data);
                        target.empty();
                        for (var i in hasil) {
                            var d = hasil[i];
                            target.append('<option value="' + d['nama'] + '">' + d['nama'] + '</option>');
                        }
                        target.append(other);
                    });
        })


        $("#select_kamera").change(function ()
        {
            var id_select_kendaraan = $(this).val();
            var values = {
                'id_select_kendaraan': id_select_kendaraan,
            }
            var other = '<option value="other">OTHER</option>';

            $.post("https://www.pinjam.co.id/upload/get_type_kendaraan", values,
                    function (data) {
                        var target = $('#tipeKamera');
                        var hasil = $.parseJSON(data);
                        target.empty();
                        for (var i in hasil) {
                            var d = hasil[i];
                            target.append('<option value="' + d['nama'] + '">' + d['nama'] + '</option>');
                        }
                        target.append(other);
                    });
        })


        function select_tipe(a)
        {
            var id_select = a;
            var other_tipe = '';

            if (id_select == 'other') {
                other_tipe = prompt('Masukkan Tipe');
                $('.select_tipe').append('<option value="' + other_tipe.toUpperCase() + '">' + other_tipe.toUpperCase() + '</option>');
                $('.select_tipe').val(other_tipe.toUpperCase());
            }
        }

        $(".select_merk").change(function ()
        {
            var id_select = $(this).val();
            var other_merk = '';
            var other_tipe = '';
            var target = $('.select_tipe');

            var other = '<option value="other">OTHER</option>';

            if (id_select == 'other') {
                other_merk = prompt('Masukkan Merk');
                $(this).append('<option value="' + other_merk.toUpperCase() + '">' + other_merk.toUpperCase() + '</option>');
                $(this).val(other_merk.toUpperCase());
                target.empty();
                select_tipe('other');
            }

        })


        $(".select_tipe").change(function ()
        {
            var a = $(this).val();
            select_tipe(a);
        })


        //Delete pilih kategori lain
        $(".pilih_hapus").click(function ()
        {
            current_num = 1;
            counter = 0;
            $("body").find('input[type=text],textarea,select').attr('value', '');
            $("body").find('input[type=file]').attr('value', '');
            $('#content-val').html('');
            $("#content_val_laptop").html('');




        });


        $("#icon_laptop").click(function ()
        {

            $("#validasi_laptop").find('input[type=text],textarea,select').prop("required", true);


        }

        )
        //kendaraan upload klik//
        function SubmitSuccesfulKendaraan(responseText, statusText) {
            file_name = responseText;
            current_num = 1;
            counter = 0;
            $("#kendaraan_lanjutkan").show();
            $('#loading').hide();

        }





        (function () {
            var optionskendaraan = {
                success: SubmitSuccesfulKendaraan
            };







            $("#upload_poto").click(function ()
            {
                $("#upload_poto").html('&nbsp;');

                $(".clear-motor").hide();
                $(".btn-upload").hide();
                $('#loading').show();
                $('#myform_kendaraan').submit();



            }

            )


        })();


        //Laptop klik upload

        function SubmitSuccesfullaptop(responseText, statusText) {
            file_name = responseText;

            $("#laptop_lanjutkan").show();
            $('#loading_laptop').hide();



        }

        (function () {
            var options = {
                success: SubmitSuccesfullaptop
            };






            $("#upload_poto_laptop").click(function ()
            {
                $("#upload_poto_laptop").html('&nbsp;');
                $(".clear-motor").hide();
                $('#loading_laptop').show();
                $('#myform_laptop').submit();
                $(".btn_upload_laptop").hide();




            }

            )


        })();

        //Handphone klik upload

        function SubmitSuccesfulhp(responseText, statusText) {
            file_name = responseText;

            $("#handphone_lanjutkan").show();
            $('#loading_handphone').hide();



        }

        (function () {
            var optionshandphone = {
                success: SubmitSuccesfulhp
            };






            $("#upload_poto_handphone").click(function ()
            {
                $("#upload_poto_handphone").html('&nbsp;');
                $(".clear-motor").hide();
                $('#loading_handphone').show();
                $('#myform_handphone').submit();
                $(".btn_upload_handphone").hide();



            }

            )


        })();

        //Tablet klik upload

        function SubmitSuccesfultablet(responseText, statusText) {
            file_name = responseText;

            $("#tablet_lanjutkan").show();
            $('#loading_tablet').hide();



        }

        (function () {
            var optionstablet = {
                success: SubmitSuccesfultablet
            };







            $("#upload_poto_tablet").click(function ()
            {

                $("#upload_poto_tablet").html('&nbsp;');
                $(".clear-motor").hide();
                $('#loading_tablet').show();
                $('#myform_tablet').submit();
                $(".btn_upload_tablet").hide();



            }

            )


        })();


        //Kamera klik upload

        function SubmitSuccesful(responseText, statusText) {
            file_name = responseText;

            $("#kamera_lanjutkan").show();
            $('#loading_kamera').hide();



        }

        (function () {
            var options_kamera = {
                success: SubmitSuccesful
            };






            $("#upload_poto_kamera").click(function ()
            {
                $("#upload_poto_kamera").html('&nbsp;');
                $(".clear-motor").hide();
                $('#loading_kamera').show();
                $('#myform_kamera').submit();
                $(".btn_upload_kamera").hide();



            }

            )


        })();


        $().ready(function () {

            $('.my_forgot').click(function (e) {
                e.preventDefault();
                var email = prompt('Masukkan email Anda:');
                if (email != null && email != '') {
                    window.location = 'https://www.pinjam.co.id/register/resetpassword/' + encodeURIComponent(email);
                }
            });
        });