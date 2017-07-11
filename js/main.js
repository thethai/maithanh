$(document).ready(function () {
    var hg = $(window).height();
    var hgmenu = $("#mt-logo").height();
    $("#mt-menu").css("height", (hg - hgmenu));
    $("#mt-dashboard").css("height", (hg - hgmenu));
    $('.datepicker').pickadate();
    $('#colorselector').colorselector();
});
//window.onbeforeunload = function () {
//    localStorage.clear();
//    return '';
//};
var products = [];
var table = document.getElementById("mt-dashboard-table");
var deleteRows = function () {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}
var loadProduct = function (i) {
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var td1 = row.insertCell(0);
    var td2 = row.insertCell(1);
    var td3 = row.insertCell(2);
    var td4 = row.insertCell(3);
    var td5 = row.insertCell(4);
    var td6 = row.insertCell(5);
    var td7 = row.insertCell(6);
    var td8 = row.insertCell(7);
    var td9 = row.insertCell(8);
    var td10 = row.insertCell(9);
    var td11 = row.insertCell(10);
    td1.innerHTML = JSON.parse(localStorage.getItem('product' + i))[10];
    td2.innerHTML = JSON.parse(localStorage.getItem('product' + i))[12];
    td3.innerHTML = JSON.parse(localStorage.getItem('product' + i))[13];
    td4.innerHTML = JSON.parse(localStorage.getItem('product' + i))[25];
    td5.innerHTML = JSON.parse(localStorage.getItem('product' + i))[27];
    td6.innerHTML = "<select name='example' class='mt-trangthai'><option value='Mới' selected>Mới</option><option value='Đã kéo rỗng'>Đã kéo rỗng</option><option value='Đã hạ cảng'>Đã hạ cảng</option><option value='Đã xuất'>Đã xuất</option></select>";
    td7.innerHTML = "<button class='mt-dashboard-tables'><i class='fa fa-envelope-o' aria-hidden='true'></i></button>";
    td8.innerHTML = "<button id='btnNHAP-" + (i) + "' class='mt-dashboard-mess'>NHẬP</button>";
    document.getElementById('btnNHAP-' + i).onclick = nhapToKhai(i);
    td9.innerHTML = "<button class='mt-dashboard-tables'><i class='fa fa-file-text' aria-hidden='true'></i></button>";
    td10.innerHTML = "<button id='btnView-" + (i) + "' class='mt-dashboard-tables'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></button>";
    document.getElementById('btnView-' + i).onclick = viewProduct(i);
    td11.innerHTML = "<button id='btnDelete-" + (i) + "'class='mt-dashboard-tables mt-trash'><i class='fa fa-trash' aria-hidden='true'></i></button>";
};
var addNewProduct = function () {
    var ngayNhanKeHoach = document.getElementById("mt-ngaynhankehoach").value; // 0
    var loaiHang = document.getElementById("mt-loaihang").value; // 1
    var khachHang = document.getElementById("mt-khachhang").value; // 2
    var soPO = document.getElementById("mt-soPO").value; // 3
    var ngayYeuCauDenNhaMay = document.getElementById("mt-ngayYeuCauDenNhaMay").value; // 4
    var nhaMay = document.getElementById("mt-NhaMay").value; // 5
    var soToKhai = document.getElementById("mt-soToKhai").value; // 6
    var ngayToKhai = document.getElementById("mt-ngayToKhai").value; // 7
    var luong = document.getElementById("colorselector").value; // 8
    var hunTrung = document.getElementById("mt-hunTrung").value; // 9
    var soBooking = document.getElementById("mt-soBooking").value; // 10
    var loaiCONT = document.getElementById("mt-loaiCONT").value; // 11
    var soCONT = document.getElementById("mt-soCONT").value; // 12
    var soSEAL = document.getElementById("mt-soSEAL").value; // 13
    var cangLayCONT = document.getElementById("mt-cangLayCONT").value; // 14
    var hangLayCONT = document.getElementById("mt-hangLayCONT").value; // 15
    var thoiGianChayDien = document.getElementById("mt-thoiGianChayDien").value; // 16
    var taiTrong = document.getElementById("mt-taiTrong").value; // 17
    var cangHaCONT = document.getElementById("mt-cangHaCONT").value; // 18
    var cutOFF = document.getElementById("mt-cutOFF").value; // 19
    var tenTau = document.getElementById("mt-tenTau").value; // 20
    var soChuyen = document.getElementById("mt-soChuyen").value; // 21
    var cangDen = document.getElementById("mt-cangDen").value; // 22
    var cangChuyenTai = document.getElementById("mt-cangChuyenTai").value; // 23
    var ngayLayCONT = document.getElementById("mt-ngayLayCONT").value; // 24
    var ngayDongHang = document.getElementById("mt-ngayDongHang").value; // 25
    var freeTime = document.getElementById("mt-freeTime").value; // 26
    var soNgayLuuMOOC = document.getElementById("mt-soNgayLuuMOOC").value; // 27
    var chiPhi = document.getElementById("mt-chiPhi").value; // 28
    var ghiChu = document.getElementById("mt-ghiChu").value; // 29
    var ngayNhanChungTu = document.getElementById("mt-ngayNhanChungTu").value; // 30
    var ngayBanGiaoChungTu = document.getElementById("mt-ngayBanGiaoChungTu").value; // 31
    var ngayNhapThongTinOCang = document.getElementById("mt-ngayNhapThongTinOCang").value; // 32
    var nhanTinChoTaiXe = document.getElementById("mt-nhanTinChoTaiXe").value; // 33
    var soLuongCONT = document.getElementById("mt-soLuongCONT").value; // 34
    products.push(ngayNhanKeHoach, loaiHang, khachHang, soPO, ngayYeuCauDenNhaMay, nhaMay, soToKhai, ngayToKhai, luong, hunTrung, soBooking, loaiCONT, soCONT, soSEAL, cangLayCONT, hangLayCONT, thoiGianChayDien, taiTrong, cangHaCONT, cutOFF, tenTau, soChuyen, cangDen, cangChuyenTai, ngayLayCONT, ngayDongHang, freeTime, soNgayLuuMOOC, chiPhi, ghiChu, ngayNhanChungTu, ngayBanGiaoChungTu, ngayNhapThongTinOCang, nhanTinChoTaiXe);
    var JSONReadyProducts = JSON.stringify(products);
    deleteRows();
    for (var i = 0; i < document.getElementById("mt-soLuongCONT").value; i++) {
        localStorage.setItem('product' + i, JSONReadyProducts);
        var changeUsers = JSON.parse(localStorage.getItem('product' + i));
    }
    displayProduct();
    $("#mt-addproduct").hide();
    $("#mt-completely").show();
};
// Display product to table
function displayProduct() {
    deleteRows();
    for (var i = 0; i < localStorage.length; i++) {
        loadProduct(i);
    }
}

function nhapToKhai(index) {
    return function () {
        console.log("in");
    }
};

function removeSelectColor() {
    $("#colorselector option").removeAttr("selected");
}

function viewProduct(index) {
    return function () {
        showPopup();
        $("#mt-popup-tx").text("SỬA HÀNG XUẤT");
        $("#mt-soLuongCONTs").remove();
        $("#mt-liSoToKhai").show();
        $("#mt-liSoCONT").show();
        $("#mt-liloaiCONT").show();
        $("#mt-liSoSEAL").show();
        $("#mt-liChiPhi").show();
        $("#mt-liNgayNhanChungTu").show();
        $("#mt-liChiPhi").show();
        $("#mt-ngaynhankehoach").val(JSON.parse(localStorage.getItem('product' + index))[0]);
        $("#mt-loaihang").val(JSON.parse(localStorage.getItem('product' + index))[1]);
        $("#mt-khachhang").val(JSON.parse(localStorage.getItem('product' + index))[2]);
        $("#mt-soPO").val(JSON.parse(localStorage.getItem('product' + index))[3]);
        $("#mt-ngayYeuCauDenNhaMay").val(JSON.parse(localStorage.getItem('product' + index))[4]);
        $("#mt-NhaMay").val(JSON.parse(localStorage.getItem('product' + index))[5]);
        $("#mt-soToKhai").val(JSON.parse(localStorage.getItem('product' + index))[6]);
        $("#mt-ngayToKhai").val(JSON.parse(localStorage.getItem('product' + index))[7]);
        var color = JSON.parse(localStorage.getItem('product' + index))[8];
        removeSelectColor();
        $("#colorselector").val(color);
        $(".btn-colorselector").css("background-color", color);
        $("#mt-hunTrung").val(JSON.parse(localStorage.getItem('product' + index))[9]);
        $("#mt-soBooking").val(JSON.parse(localStorage.getItem('product' + index))[10]);
        $("#mt-loaiCONT").val(JSON.parse(localStorage.getItem('product' + index))[11]);
        $("#mt-soCONT").val(JSON.parse(localStorage.getItem('product' + index))[12]);
        $("#mt-soSEAL").val(JSON.parse(localStorage.getItem('product' + index))[13]);
        $("#mt-cangLayCONT").val(JSON.parse(localStorage.getItem('product' + index))[14]);
        $("#mt-hangLayCONT").val(JSON.parse(localStorage.getItem('product' + index))[15]);
        $("#mt-thoiGianChayDien").val(JSON.parse(localStorage.getItem('product' + index))[16]);
        $("#mt-taiTrong").val(JSON.parse(localStorage.getItem('product' + index))[17]);
        $("#mt-cangHaCONT").val(JSON.parse(localStorage.getItem('product' + index))[18]);
        $("#mt-cutOFF").val(JSON.parse(localStorage.getItem('product' + index))[19]);
        $("#mt-tenTau").val(JSON.parse(localStorage.getItem('product' + index))[20]);
        $("#mt-soChuyen").val(JSON.parse(localStorage.getItem('product' + index))[21]);
        $("#mt-cangDen").val(JSON.parse(localStorage.getItem('product' + index))[22]);
        $("#mt-cangChuyenTai").val(JSON.parse(localStorage.getItem('product' + index))[23]);
        $("#mt-ngayLayCONT").val(JSON.parse(localStorage.getItem('product' + index))[24]);
        $("#mt-ngayDongHang").val(JSON.parse(localStorage.getItem('product' + index))[25]);
        $("#mt-freeTime").val(JSON.parse(localStorage.getItem('product' + index))[26]);
        $("#mt-soNgayLuuMOOC").val(JSON.parse(localStorage.getItem('product' + index))[27]);
        $("#mt-chiPhi").val(JSON.parse(localStorage.getItem('product' + index))[28]);
        $("#mt-ghiChu").val(JSON.parse(localStorage.getItem('product' + index))[29]);
        $("#mt-ngayNhanChungTu").val(JSON.parse(localStorage.getItem('product' + index))[30]);
        $("#mt-ngayBanGiaoChungTu").val(JSON.parse(localStorage.getItem('product' + index))[31]);
        $("#mt-ngayNhapThongTinOCang").val(JSON.parse(localStorage.getItem('product' + index))[32]);
        $("#mt-nhanTinChoTaiXe").val(JSON.parse(localStorage.getItem('product' + index))[33]);
        $("#mt-next").hide();
        $("#mt-save").show();
        $("#mt-save").html("<button id='mt-save-btn-" + (index) + "' class='mt-save-btn'>Lưu lại </button>");
        document.getElementById('mt-save-btn-' + index).onclick = saveProduct(index);
    };
};

function saveProduct(index) {
    return function () {
        var ngayNhanKeHoach = document.getElementById("mt-ngaynhankehoach").value; // 0
        var loaiHang = document.getElementById("mt-loaihang").value; // 1
        var khachHang = document.getElementById("mt-khachhang").value; // 2
        var soPO = document.getElementById("mt-soPO").value; // 3
        var ngayYeuCauDenNhaMay = document.getElementById("mt-ngayYeuCauDenNhaMay").value; // 4
        var nhaMay = document.getElementById("mt-NhaMay").value; // 5
        var soToKhai = document.getElementById("mt-soToKhai").value; // 6
        var ngayToKhai = document.getElementById("mt-ngayToKhai").value; // 7
        var luong = document.getElementById("colorselector").value; // 8
        var hunTrung = document.getElementById("mt-hunTrung").value; // 9
        var soBooking = document.getElementById("mt-soBooking").value; // 10
        var loaiCONT = document.getElementById("mt-loaiCONT").value; // 11
        var soCONT = document.getElementById("mt-soCONT").value; // 12
        var soSEAL = document.getElementById("mt-soSEAL").value; // 13
        var cangLayCONT = document.getElementById("mt-cangLayCONT").value; // 14
        var hangLayCONT = document.getElementById("mt-hangLayCONT").value; // 15
        var thoiGianChayDien = document.getElementById("mt-thoiGianChayDien").value; // 16
        var taiTrong = document.getElementById("mt-taiTrong").value; // 17
        var cangHaCONT = document.getElementById("mt-cangHaCONT").value; // 18
        var cutOFF = document.getElementById("mt-cutOFF").value; // 19
        var tenTau = document.getElementById("mt-tenTau").value; // 20
        var soChuyen = document.getElementById("mt-soChuyen").value; // 21
        var cangDen = document.getElementById("mt-cangDen").value; // 22
        var cangChuyenTai = document.getElementById("mt-cangChuyenTai").value; // 23
        var ngayLayCONT = document.getElementById("mt-ngayLayCONT").value; // 24
        var ngayDongHang = document.getElementById("mt-ngayDongHang").value; // 25
        var freeTime = document.getElementById("mt-freeTime").value; // 26
        var soNgayLuuMOOC = document.getElementById("mt-soNgayLuuMOOC").value; // 27
        var chiPhi = document.getElementById("mt-chiPhi").value; // 28
        var ghiChu = document.getElementById("mt-ghiChu").value; // 29
        var ngayNhanChungTu = document.getElementById("mt-ngayNhanChungTu").value; // 30
        var ngayBanGiaoChungTu = document.getElementById("mt-ngayBanGiaoChungTu").value; // 31
        var ngayNhapThongTinOCang = document.getElementById("mt-ngayNhapThongTinOCang").value; // 32
        var nhanTinChoTaiXe = document.getElementById("mt-nhanTinChoTaiXe").value; // 33
        var products = [];
        products.push(ngayNhanKeHoach, loaiHang, khachHang, soPO, ngayYeuCauDenNhaMay, nhaMay, soToKhai, ngayToKhai, luong, hunTrung, soBooking, loaiCONT, soCONT, soSEAL, cangLayCONT, hangLayCONT, thoiGianChayDien, taiTrong, cangHaCONT, cutOFF, tenTau, soChuyen, cangDen, cangChuyenTai, ngayLayCONT, ngayDongHang, freeTime, soNgayLuuMOOC, chiPhi, ghiChu, ngayNhanChungTu, ngayBanGiaoChungTu, ngayNhapThongTinOCang, nhanTinChoTaiXe);
        var JSONReadyProducts = JSON.stringify(products);
        localStorage.setItem('product' + index, JSONReadyProducts);
        displayProduct();
        hiddenPopup();
    }
}
var hiddenPopup = function () {
    $("#mt-popup-add").hide();
    $("#mt-completely").hide();
};
var showPopup = function () {
    $("#mt-addproduct").show();
    $("#mt-popup-add").show();
};

document.addEventListener("DOMContentLoaded", function () {

    var
        container7 = document.getElementById('example7'),
        hot7;

    hot7 = new Handsontable(container7, {
        data: [
      model({
                id: 1,
                soCONT: '',
                soSEAL: ''
            }),
      model({
                id: 2,
                soCONT: '',
                soSEAL: ''
            }),
      model({
                id: 3,
                soCONT: '',
                soSEAL: ''
            }),
      model({
                id: 4,
                soCONT: '',
                soSEAL: '',
            }),
      model({
                id: 5,
                soCONT: '',
                soSEAL: '',
                loaiCONT: '',
            }),

    ],
        dataSchema: model,
        colWidths: [50, 150, 150, 100, 100, 150, 100, 200],
        colHeaders: ['STT', 'Số CONT', 'Số SEAL', 'Loại CONT', 'TLTK', 'Số tờ khai', 'Nhà máy', 'Ngày nhận chứng từ'],
        columns: [
            {
                data: property('id')
        },
            {
                data: property('soCONT')
        },
            {
                data: property('soSEAL')
        },
            {
                type: 'dropdown',
                source: ['20ft', '40ft']
        },
            {
                data: property('taiTrong')
        },
            {
                data: property('soToKhai'),
                type: 'numeric'
        },
            {
                type: 'dropdown',
                data: property('nhamay'),
                source: ['WN1', 'WN2', 'WN3']
        },
            {
                type: 'date',
                dateFormat: 'MM/DD/YYYY',
                correctFormat: true,
                defaultDate: '07/06/2017',
                data: property('ngaynhanchungtu')
        },
    ],
        minSpareRows: 1
    });

    function model(opts) {
        var
            _pub = {},
            _priv = {
                "id": undefined,
                "soCONT": undefined,
                "soSEAL": undefined,
                "loaiCONT": undefined,
                "taiTrong": undefined,
                "soToKhai": undefined,
                "nhamay": undefined,
                "ngaynhanchungtu": undefined,
            };

        for (var i in opts) {
            if (opts.hasOwnProperty(i)) {
                _priv[i] = opts[i];
            }
        }

        _pub.attr = function (attr, val) {
            if (typeof val === 'undefined') {
                window.console && console.log("\t\tGET the", attr, "value of", _pub);
                return _priv[attr];
            }
            window.console && console.log("SET the", attr, "value of", _pub);
            _priv[attr] = val;

            return _pub;
        };

        return _pub;
    }

    function property(attr) {
        return function (row, value) {
            return row.attr(attr, value);
        }
    }

    // bo qua



    function strip_tags(input, allowed) {
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
            commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

        // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

        return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
        });
    }

    function safeHtmlRenderer(instance, td, row, col, prop, value, cellProperties) {
        var escaped = Handsontable.helper.stringify(value);
        escaped = strip_tags(escaped, '<em><b><strong><a><big>'); //be sure you only allow certain HTML tags to avoid XSS threats (you should also remove unwanted HTML attributes)
        td.innerHTML = escaped;

        return td;
    }

    function coverRenderer(instance, td, row, col, prop, value, cellProperties) {
        var escaped = Handsontable.helper.stringify(value),
            img;

        if (escaped.indexOf('http') === 0) {
            img = document.createElement('IMG');
            img.src = value;

            Handsontable.Dom.addEvent(img, 'mousedown', function (e) {
                e.preventDefault(); // prevent selection quirk
            });

            Handsontable.Dom.empty(td);
            td.appendChild(img);
        } else {
            // render as text
            Handsontable.renderers.TextRenderer.apply(this, arguments);
        }

        return td;
    }

    function bindDumpButton() {
        if (typeof Handsontable === "undefined") {
            return;
        }

        Handsontable.Dom.addEvent(document.body, 'click', function (e) {

            var element = e.target || e.srcElement;

            if (element.nodeName == "BUTTON" && element.name == 'dump') {
                var name = element.getAttribute('data-dump');
                var instance = element.getAttribute('data-instance');
                var hot = window[instance];
                console.log('data of ' + name, hot.getData());
            }
        });
    }
    bindDumpButton();

});
