$(function(){

    // モーダルウィンドウ
    $("main").append("<div id='glay_layer'></div><div id='over_layer'></div>"); // main要素の最後に glay_layerとover_layerを配置
    $("#glay_layer").click(function(){
        $(this).hide();                 // glay_layer非表示
        $("#over_layer").hide();        // over_layer非表示
    });
    $("a.modal").click(function(){      // サムネイルのaタグクリック時
        $("#glay_layer").show();        // glay_layerを表示
        $("#over_layer").show().html("<img src="+$(this).attr("href")+">"); //aタグのhfef属性の値を取得して、over_layerのhtmlにimgタグを追加する
        return false;
    });

});
