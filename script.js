//Nhập thông tin**************
var a = JSON.parse(localStorage.hoten);
function nhapInfo(){
    var str = 'Nhập Tên Của Bạn <br> <input style="text-transform: capitalize;" placeholder="Họ Tên" type="text" id="hoten" value="'+a+'"><br>';
    str += '<button onclick="quiz()" >Bắt Đầu</button>'
    document.getElementById('info').innerHTML=str;
    
}
function quiz(){
    //lưu thông tin
    a = document.getElementById('hoten').value;
    localStorage.hoten = JSON.stringify(a);
    //kiểm tra đã nhập thông tin chưa
    if(a=='undefined' || a==''){
        alert('Vui lòng nhập thông tin để tham gia 🙁');
        location.href='index.html';
    }else{
        location.href='quiz.html';
    }
    
}
//in thông tin**************
function ininfo(){
    document.getElementById('ininfo').innerHTML='Họ Tên: ' + a;
}

//Thời gian**************
var s=0, m=1;
function start(){
    t=setTimeout(start,1000);
    if (m==0 && s==0){
        Fin();
    } 
    if(s == 0){
        m--;
        s = 60;
    }
    s--;  
    document.getElementById('m').innerHTML=m;
    document.getElementById('s').innerHTML=s;
}
start();
function lock() {
    document.getElementById("l").disabled = true;
    Fin();
    clearTimeout(t);
}

//quiz*********
var arr=[];
arr.push(['Mắt cận thị là mắt mà khi không điều tiết có tiêu điểm nằm ở đâu?','Trước võng mạc','Sau võng mạc','Giữa võng mạc','Đáp án khác',1]);
arr.push(['Augustin Louis Cauchy là nhà toán học nước nào?','Đức','Anh','Pháp','Tây Ban Nha',3]);
arr.push(['Ở người có bao nhiêu cặp nhiễm sắc thể?',13,23,21,14,2]);
arr.push(['Ban ngày hay ban đêm trái đất quay quanh mặt trời nhanh hơn?','Ngày','Đêm','Ngày và đêm quay như nhau','Đáp án khác',2]);
arr.push(['Ai là người đưa ra ba định luật di truyền?','Albert Einstein','Newton','Men-Den','Galilei',3]);
arr.push(['Sóng điện từ có bước sóng từ 100m – 10m được gọi là sóng gì?','Sóng siêu ngắn','Sóng ngắn','Sóng siêu dài','Sóng dài',2]);
arr.push(['Huyện đảo Phú Quốc thuộc tỉnh nào?','Trà Vinh','An Giang','Cà Mau','Kiên Giang',4]);
arr.push(['Cầu thủ nào đã đạt danh hiệu quả bóng vàng thế giới 2006?','Cafu','Roberto Carlos','Ronaldinho','Fabio Canavaro',4]);
arr.push(['Vị vua nào đã đặt quốc hiệu nước ta là Việt Nam như hiện nay?','Vua Gia Long','Vua Tự Đức','Vua Lê','Đáp Án Khác',1]);
arr.push(['Tác phẩm "Bản án chế độ thực dân" của Hồ Chí Minh xuất bản lần đầu tiên ở đâu?','Việt Nam','Trung Quốc','Pháp','Anh',3]);
function initRow(i){
    var s='<tr><td colspan="4"><b>'+'Câu '+(i+1)+': </b>'+arr[i][0]+'</td></tr><tr>'
    for(j=1;j<=4;j++){
        s+='<td><input type="radio" name="arr'+i+'" value="'+arr[i][j]+'"> '+arr[i][j]+'</td>'    
    }
    s+="</tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr></td>";
    return s;
}

function initQuestion(){
    var s='<table width="100%">';
    for(i=0;i<arr.length;i++)s+=initRow(i);
    s+='</table>';
    document.getElementById('question').innerHTML=s;
}
initQuestion();
//kiểm tra, trả kết quả
function Fin(){
    var s='';dung=0;sai=0;chualam=10;
    for(i = 0;i< arr.length; i++)
        for(j=0;j<4;j++)
        if(document.getElementsByName('arr'+i)[j].checked){
            chualam--;
            if((j+1==arr[i][5])){
                dung++;
            }else{
                sai++;
            }
        }
    
    function result(){
        alert('Cảm ơn '+a+'đã tham gia! Kết quả của bạn là \n' +dung+' Đúng 🤩 \n'+sai+' Sai 😔 \n'+chualam+' Chưa làm 😗 \n');
    }
result();
location.href='index.html';
}



