/*
*TÍNH SỐ LƯƠNG NHÂN VIÊN
*ĐÀU VÀO
-Tạo biến nhập số ngày làm của nhân viên.
*XỬ LÝ
-Tạo biến Lương = ngày làm * tiền lương 1 ngày.
-Quy đổi giá trị VND
*Đầu ra
-XUÂT lương nhân viên ép kiểu lương chia thành giá trị VND
*/
document.getElementById("Tinh").onclick = function(){
   var ngaylam = document.getElementById("ngaylam").value * 1;

   var Luong = ngaylam * 100000;

    var gia = new Intl.NumberFormat("vn-VN");   

   var result = "";
   result += "<p>Lương nhân viên là :" + gia.format(Luong) +"</p>"

   document.getElementById("footerr").innerHTML =result;
}

/*
*TÍNH TRUNG BÌNH CỘNG
*ĐÀU VÀO
-Tạo các biến từ 1 -> 5.
*XỬ LÝ
-Tạo biến Trungbinh = cộng 5 số lại sau đó chia cho 5;
*Đầu ra
-XUÂT trung bình cộng các số đó
*/
document.getElementById("TBC").onclick = function(){
    var so1 = document.getElementById("so1").value * 1;
    var so2 = document.getElementById("so2").value * 1;
    var so3 = document.getElementById("so3").value * 1;
    var so4 = document.getElementById("so4").value * 1;
    var so5 = document.getElementById("so5").value * 1;

 
    var Trungbinh = (so1+so2+so3+so4+so5)/5;
    var result = "";
    result += "<p>Trung bình cộng các số là :" + Trungbinh +"</p>"
 
    document.getElementById("TBCC").innerHTML =result;
 }
 
 /*
*QUY ĐỔI USD SANG VND
*ĐÀU VÀO
-Tạo biến là USD.
*XỬ LÝ
-Tạo biến doitien = USD nhân với 23500 để đổi sang VND.
-Quy đổi giá trị VND.
*Đầu ra
-XUÂT ra giá tiền VND sau khi nhập USD.
*/
 document.getElementById("Doi").onclick = function(){
    var USD = document.getElementById("USD").value * 1;
 
    var doiTien = USD * 23500;
 
     var giatien = new Intl.NumberFormat("vn-VN");   
 
    var result = "";
    result += "<p>Đô la Việt Nam là: " + giatien.format(doiTien) +"VND</p>"
 
    document.getElementById("VND").innerHTML =result;
 }
/*
*TÍNH DIỆN TÍCH VÀ CHU VI HÌNH CHỮ NHẬT
*ĐÀU VÀO
-Tạo biến chiều dài và chiều rộng hình chữ nhật.
*XỬ LÝ
-Tạo biến dientich với công thức dientich= chiều dài * chiều rộng
-Tạo biến chuvi với công thức chuvi= (chiều dài + chiều rộng)*2;
*Đầu ra
-XUÂT ra diện tích và chu vi hình chữ nhật.
*/
 document.getElementById("dientich").onclick = function(){
    var dai = document.getElementById("dai").value * 1;
    var rong = document.getElementById("rong").value * 1;
    
    
    var dientich = dai * rong;
    var chuvi = (dai + rong) * 2;

    var result = "";
    result += "<p>Diện tích hình chữ nhật là :" + dientich +"</p>"
    result += "<p>Chu vi hình chứ nhật là là :" + chuvi +"</p>"
 
    document.getElementById("DT").innerHTML =result;
 }
/*
*TÍNH TỔNG 2 KÝ SỐ
*ĐÀU VÀO
-Tạo biến nhập vào số có 2 chữ số
*XỬ LÝ
- đôi hàng đơn vị bằng cách lấy chia só dư của số 2 chữ số
- đôi hàng chục bằng cách lấy chia cho 10 nhưng lấy phần nguyên của số đó bằng Math.floor.
- sau đó cộng hàng chục và hàng đơn vị để ra ký số
*Đầu ra
-XUÂT 2 ký só.
*/
 document.getElementById("tinhso2chu").onclick = function(){
    var so2chu = document.getElementById("so2chu").value * 1;
 
    var hangdonvi = so2chu % 10;
    var hangchuc = Math.floor(so2chu / 10);
    
    var Cong = hangdonvi + hangchuc;

    var result = "";
    result += "<p>Tổng 2 số là :" + Cong +"</p>"
 
    document.getElementById("so2chuso").innerHTML =result;
 }