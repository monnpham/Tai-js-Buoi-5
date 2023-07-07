function result1() {
    var
        s1 = Number(document.getElementById("score1").value),
        s2 = Number(document.getElementById("score2").value),
        s3 = Number(document.getElementById("score3").value),
        s4 = Number(document.getElementById("score4").value),
        l = Number(document.getElementById("location").value),
        u = Number(document.getElementById("user").value),
        r;
    r = s2 + s3 + s4 + (l + u)
    if (s1 != 0 && s2 != 0 && s3 != 0 && s4 != 0) {
        r = s2 + s3 + s4 + (l + u)
        if (r >= s1) {
            document.getElementById("result1").innerHTML = "Bạn đã đậu. Tổng điểm: " + r
        } else
            document.getElementById("result1").innerHTML = "Bạn đã rớt. Tổng điểm: " + r
    } else {
        document.getElementById("result1").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    }
}

function result2() {
    var
        kw = Number(document.getElementById("kw").value),
        n = checkKw(kw),
        eb = 0;


    switch (n) {
        case 0:
            document.getElementById("elic-bill").innerHTML = "Số kw không hợp lệ! Vui lòng nhập lại"
            break
        case 1:
            eb = kw * 500
            eb = new Intl.NumberFormat("vn-VN").format(eb)
            document.getElementById("elic-bill").innerHTML = "Họ tên: " + fullname.value + "; Tiền Điện: " + eb + "VND"
            break
        case 2:
            eb = (kw - 50) * 650 + 25000
            eb = new Intl.NumberFormat("vn-VN").format(eb)
            document.getElementById("elic-bill").innerHTML = "Họ tên: " + fullname.value + "; Tiền Điện: " + eb + "VND"
            break
        case 3:
            eb = (kw - 100) * 850 + 57500
            eb = new Intl.NumberFormat("vn-VN").format(eb)
            document.getElementById("elic-bill").innerHTML = "Họ tên: " + fullname.value + "; Tiền Điện: " + eb + "VND"
            break
        case 4:
            eb = (kw - 200) * 1100 + 142500
            eb = new Intl.NumberFormat("vn-VN").format(eb)
            document.getElementById("elic-bill").innerHTML = "Họ tên: " + fullname.value + "; Tiền Điện: " + eb + "VND"
            break
        case 5:
            eb = (kw - 350) * 1300 + 307500
            eb = new Intl.NumberFormat("vn-VN").format(eb)
            document.getElementById("elic-bill").innerHTML = "Họ tên: " + fullname.value + "; Tiền Điện: " + eb + "VND"
            break
    }

}

function result3() {
    var
        ic = document.getElementById("inc-year").value - 4e6 - 16e5 * document.getElementById("de-per").value,
        n = checkTax(ic),
        pi;
    switch (n) {
        case 0:
            document.getElementById("per-in").innerHTML = "Số tiền thu nhập không hợp lệ"
            break
        case 1:
            pi = ic * .05
            pi = new Intl.NumberFormat("vn-VN").format(pi)
            document.getElementById("per-in").innerHTML = "Họ tên: " + fullnames.value + "; Tiền Tiền thuế thu nhập cá nhân: " + pi + "VND"
            break
        case 2:
            pi = ic * .1
            pi = new Intl.NumberFormat("vn-VN").format(pi)
            document.getElementById("per-in").innerHTML = "Họ tên: " + fullnames.value + "; Tiền Tiền thuế thu nhập cá nhân: " + pi + "VND"
            break
        case 3:
            pi = ic * .15
            pi = new Intl.NumberFormat("vn-VN").format(pi)
            document.getElementById("per-in").innerHTML = "Họ tên: " + fullnames.value + "; Tiền Tiền thuế thu nhập cá nhân: " + pi + "VND"
            break
        case 4:
            pi = ic * .2
            pi = new Intl.NumberFormat("vn-VN").format(pi)
            document.getElementById("per-in").innerHTML = "Họ tên: " + fullnames.value + "; Tiền Tiền thuế thu nhập cá nhân: " + pi + "VND"
            break
        case 5:
            pi = ic * .25
            pi = new Intl.NumberFormat("vn-VN").format(pi)
            document.getElementById("per-in").innerHTML = "Họ tên: " + fullnames.value + "; Tiền Tiền thuế thu nhập cá nhân: " + pi + "VND"
            break
        case 6:
            pi = ic * .3
            pi = new Intl.NumberFormat("vn-VN").format(pi)
            document.getElementById("per-in").innerHTML = "Họ tên: " + fullnames.value + "; Tiền Tiền thuế thu nhập cá nhân: " + pi + "VND"
            break
        case 7:
            pi = ic * .35
            pi = new Intl.NumberFormat("vn-VN").format(pi)
            document.getElementById("per-in").innerHTML = "Họ tên: " + fullnames.value + "; Tiền Tiền thuế thu nhập cá nhân: " + pi + "VND"
            break
    }


}
function displayConect() {
    ct = document.getElementById("ct").value;
    if (ct == 2) {
        document.getElementById("control-conect").style.display = "block"
    } else {
        document.getElementById("control-conect").style.display = "none"

    }
}

function result4() {
    var
        ct = Number(document.getElementById("ct").value),
        hi = Number(document.getElementById("hi-channel").value),
        cn = Number(document.getElementById("connect").value),
        cm, n = 0;

    switch (ct) {
        case 0:
            document.getElementById("cab-money").innerHTML = "Hãy chọn loại khách hàng "
            break
        case 1:
            cm = 25 + (hi * 7.5)
            cm = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(cm)
            document.getElementById("cab-money").innerHTML = "Mã khách hàng: " + cc.value + "; Tiền cáp: " + cm
            break
        case 2:
            if (cn > 10) n = cn - 10
            cm = 15 + 75 + (hi * 50) + (n * 5)

            cm = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(cm)
            document.getElementById("cab-money").innerHTML = "Mã khách hàng: " + cc.value + "; Tiền cáp: " + cm
            break
    }
}
function checkTax(t) {
    if (t > 96e7)
        return 7
    if (624e6 < t && t <= 96e7)
        return 6
    if (384e6 < t && t <= 624e6)
        return 5
    if (21e7 < t && t <= 384e6)
        return 4
    if (12e7 < t && t <= 21e7)
        return 3
    if (6e7 < t && t <= 12e7)
        return 2
    if (0 < t && t <= 6e7)
        return 1
    if (t <= 0)
        return 0
}


function checkKw(c) {
    if (c > 350)
        return 5
    if (200 < c && c <= 350)
        return 4
    if (100 < c && c <= 200)
        return 3
    if (50 < c && c <= 100)
        return 2
    if (0 < c && c <= 50)
        return 1
    if (c == 0)
        return 0
}
