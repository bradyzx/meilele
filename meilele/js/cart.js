//获取当前的cookie，将cookie商品列表创建出来
if (getCookie('cartsid') && getCookie('cartnum')) {
    var s = getCookie('cartsid').split(',');//存放sid数组
    var n = getCookie('cartnum').split(',');//存放数量数组
    for (var i = 0; i < s.length; i++) {
        createcart(s[i], n[i]);//遍历创建商品列表
    }
}

//创建商品列表
function createcart(sid, num) {//sid：图片的编号  num:商品的数量
    $.ajax({
        url: 'php/cart.php',
        dataType:'json'
    }).done(function(data) {
    	var $htmltext='';
        for (var i = 0; i < data.length; i++) {
            if (sid == data[i].sid){ //图片的sid和数据里面的sid匹配
            	//拼接出来的表格
            	$htmltext+='<tbody class="JS_cart_body_1">'+
            	'<tr id="JS_cart_tr_30476660" class="goods_item JS_cart_act_0" data-act_id="0" data-rec_id="30476660" data-goods_id="338220" data-goods_num="1" data-gift_kind="0">'+
	            	'<td>'+
	            		'<input type="checkbox" data-key="1" data-type="0" data-shop="1" checked="checked" id="JS_delete_checkbox_30476660" value="30476660" class="goods_select goods_select_0" name="rec_id[]">'+
	            	'</td>'+
	            	'<td colspan="2">'+
		            	'<a href="#" target="_blank">'+
		            		'<img class="img" src="'+data[i].url+'" sid="'+data[i].sid+'" width="90" height="58" title="查看商品">'+
		            	'</a>'+
	            	'</td>'+
	            	'<td class="l goods_gift_30476660" style="line-height:1.5;padding-left: 10px;">'+
	            		'<a href="#" target="_blank">'+data[i].title+'</a>'+
	            	'</td>'+
	            	'<td class="yen pri">¥'+data[i].price+'</td>'+
	            	'<td class="m_goods_num" data-num="1">'+
		            	'<div class="clearfix number">'+
		            		'<a href="javascript:;" class="left sub" title="减少数量"></a>'+
			            	'<input id="JS_goods_number_30476660" class="left num JS_cart_num_0" value="'+num+'"  >'+
			            	'<a class="left add" href="javascript:;"  title="增加数量"></a>'+
			            	'<span class="left unit">张</span>'+
		            	'</div>'+
	            	'</td>'+
	            	'<td class="yen">'+
	            		'<span name="goods_discount[30476660]" id="JS_goods_discount_30476660">¥'+
	            			'<span class="JS_goods_discount">0</span>'+
            			'</span></td>'+
	            	'<td class="yen">'+
	            		'<div class="goods_subtotal">¥'+
	            		'<span id="JS_goods_subtotal_30476660" class="JS_goods_subtotal">nan</span>'+
	            		'</div>'+
            		'</td>'+
	            	'<td></td>'+
	            	'<td><a class="color6" href="javascript:void(0);">删除</a></td>'+
            	'</tr>'+
            	'</tbody>';
                //计算价格
                $('.pt_box').eq(0).after($htmltext);//追加
                var $dj1 = parseInt($('.pri').html().substring(1));
                $('#JS_goods_subtotal_30476660').html((($dj1 * num).toFixed(2)));
                kong();
                totalprice();
            }
        }
        add();
        sub();
        updateNumber();
        del();
    });
}
//商品列表不存在显示购物车为空
kong()
function kong() {
    if (getCookie('cartsid')) {
    	$('#JS_pre_check_form').show();
        $('.nogoods').hide();
    } else {
    	$('#JS_pre_check_form').hide();
    	$('.nogoods').show();
    }
}

//计算总价
totalprice();
function totalprice() {//计算总价
	var total = 0;
	var countnum = 0;
    $('.JS_cart_body_1').each(function() {//进行遍历
        if ($(this).find('tr').find('td:nth-of-type(1)').find('input').is(':checked')) {//复选框是选中的
            total += parseFloat($(this).find('tr').find('td').eq(6).find('div').find('span').html());//商品的总价
            countnum += parseInt($(this).find('tr').find('td').eq(4).find('div').find('input').val());//商品的数量
        }
    });
    $('#JS_after').html(total.toFixed(2));
    $('#JS_selected_goods_number').html(countnum);
}


var sidarr=[];//存放sid的值
var numarr=[];//存放数量的值。
function getcookievlaue(){
	if(getCookie('cartsid')){
		sidarr=getCookie('cartsid').split(',');
	}
	
	if(getCookie('cartsid')){
		numarr=getCookie('cartnum').split(',');
	}
}

//全选
$('.JS_checkall_cb').on('change', function() {
	 $('.JS_cart_body_1:visible').find('tr').find('td:nth-of-type(1)').find('input').prop('checked', $(this).prop('checked'));
	 $('.pt_box').find('tr').find('td').find('input').prop('checked', $(this).prop('checked'));
	 $('.JS_checkall_cb').prop('checked', $(this).prop('checked'));
    totalprice();//计算总价
});

var $inputchecked = $('.JS_cart_body_1').find('tr').find('td:nth-of-type(1)').find('input');//获取委托元素
$('.cart_table').on('change', $inputchecked,function() {
    var $inputs = $('.JS_cart_body_1:visible').find('tr').find('td:nth-of-type(1)').find('input'); //放内部
    if ($('.JS_cart_body_1').find('tr').find('td:nth-of-type(1)').find('input:checked').length == $inputs.size()) {
        $('.JS_checkall_cb').prop('checked', true);
    } else {
        $('.JS_checkall_cb').prop('checked', false);
    }
    totalprice();
});

//修改数量的操作
//改变商品数量++
function add () {
	$('.add').on('click', function() {
	    var $count = $(this).parent('.number').find('input').val();//获取当前的数量
	    $count++;
	    if ($count >= 99) {
	        $count = 99;
	    }
	    $(this).parent('.number').find('input').val($count);//赋值回去
	    $(this).parents('tr').find('td').eq(6).find('div').find('span').html(singlegoodsprice($(this)));//改变后的价格
	    totalprice();
	    setcookie($(this));
	});
}
	//改变商品数量--
function sub () {
	$('.sub').on('click', function() {
	    var $count = $(this).parent('.number').find('input').val();//获取当前的数量
	    $count--;
	    if ($count <= 1) {
	        $count = 1;
	    }
	   	$(this).parent('.number').find('input').val($count);//赋值回去
	    $(this).parents('tr').find('td').eq(6).find('div').find('span').html(singlegoodsprice($(this)));//改变后的价格
	    totalprice();
	    setcookie($(this));
	});
}
//直接输入改变数量
function updateNumber () {
	$('.num').on('input', function() {
	    var $reg = /^\d+$/g; //只能输入数字
	    var $value = parseInt($(this).val());
	    if ($reg.test($value)) {
	        if ($value >= 99) {//限定范围
	            $(this).val(99);
	        } else if ($value <= 0) {
	            $(this).val(1);
	        } else {
	            $(this).val($value);
	        }
	    } else {
	        $(this).val(1);
	    }
	    $(this).parents('tr').find('td').eq(6).find('div').find('span').html(singlegoodsprice($(this)));//改变后的价格
	    console.log(singlegoodsprice($(this)));
	    totalprice();
	    setcookie($(this));
	});
}
//计算单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat((row.parent().parent().prev().html()).substring(1));
    var $cnum = parseInt(row.parent('.number').find('input').val());
    return ($dj * $cnum).toFixed(2);
}
//将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    getcookievlaue();
    var $index = obj.parents('tr').find('td').eq(1).find('a').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.number').find('input').val();
    addCookie('cartnum', numarr.toString(), 7);
}


//删除cookie
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
	//sid=1    sidarr=[1,2]   numarr=[7,1]
    var index = -1;//假设索引
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;//删除sid的位置  
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    console.log(sidarr);
    console.log(numarr);
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}

//删除单个商品
function del(){
	$('.color6:first').on('click', function() {
		if(window.confirm('你确定要删除吗?')){
			getcookievlaue();
		    $(this).parents('.JS_cart_body_1').remove();
		    delgoodslist($(this).parents('.JS_cart_body_1').find('tr').find('td').eq(1).find('a').find('img').attr('sid'),sidarr);
		    totalprice();
		    kong();
		}
	});
}
//删除选中的商品
$('.delete_cart_goods').on('click', function() {
	if(window.confirm('你确定要删除吗?')){
	    $('.JS_cart_body_1').each(function() {
			getcookievlaue();
	        if ($(this).find('tr').find('td:nth-of-type(1)').find('input').is(':checked')) {//前面的复选框是选中
	            $(this).remove();
	            console.log($(this).find('tr').find('td:nth-of-type(2)').find('a').find('img').attr('sid'));
				delgoodslist($(this).find('tr').find('td:nth-of-type(2)').find('a').find('img').attr('sid'), sidarr);
	   		}
	    });
	}
   
    totalprice();
    kong();
});

