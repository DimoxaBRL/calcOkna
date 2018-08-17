$( document ).ready(function() {
    	sessionStorage.setItem('totalSum1', 0);
    	sessionStorage.setItem('totalSum2', 0);
    	sessionStorage.setItem('summDopkzakazu', 0);
		$("#widthOtkos").removeAttr('disabled');
		$("#povoroti").removeAttr('disabled');
});

function proverka(input) {
    input.value = input.value.replace(/[^\d]/g, '');
};


function sendq(){
	//-------
	// Массивы с ценами  
	//-------

	var kirpit1		=	["24","26","30","35","40","30","35","40","37","14.5","15","18","21","9","8.5","15.5","13.5"];
	var panel1		=	["17","18.5","21.5","28","31","21.5","27","40","37","14.5","11","18","21","9","15.5","0","0"];
	var stalinka1	=	["27","29","35","46","46","32","35","40","37","14.5","14.5","18","21","9","15.5","0","0"];

	var kirpit2	=		["31","36","42","48","51","45","48","0","0","0","14.5","0","0","0","0","0","0"];
	var panel2		=	["25","28","34","40","43","35","40","0","0","0","12","0","0","0","0","0","0"];
	var stalinka2	=	["40","44","49","59","59","48","61","0","0","0","14.5","0","0","0","0","0","0"];

	// Цена при Ширина откосов от 375 до 500
	var kirpit375	=	["31","36","42","48","51","45","48","0","0","0","0","0","0","0","0","0","0"];
	var panel375	=	["31","36","42","48","51","45","48","0","0","0","0","0","0","0","0","0","0"];
	var stalinka375	=	["40","44","49","59","59","48","61","0","0","0","0","0","0","0","0","0","0"];

	// Цена при Ширина откосов от 500 
	var kirpit500	=	["40","44","55","61","65","57","61","0","0","0","0","0","0","0","0","0","0"];
	var panel500	=	["40","44","55","61","65","57","61","0","0","0","0","0","0","0","0","0","0"];
	var stalinka500	=	["40","44","49","59","59","48","61","0","0","0","0","0","0","0","0","0","0"];

	// Данные из форм
	var val1 = Number($("#exampleFormControlSelect1").val());
	var val2 = Number($("#exampleFormControlSelect2").val());
	var povoroti = Number($("#povoroti").val());
	var povoroti2 = Number($("#povoroti").val());
	var width = Number($("#width").val());
	var height = Number($("#height").val());
	var widthOtkos = Number($("#widthOtkos").val());

 

		// Выбираем массив цен изделия из типа
	if (val1 == 1){
		var mass  = kirpit1;
		var mass2 = kirpit2;
	}
	if(val1 == 2){
		var mass  = panel1;
		var mass2 = panel2;
	}
	if(val1 == 3){
		var mass  = stalinka1;
		var mass2 = stalinka2;	
	}

	////////
	// Часть 1 калькулятора   расчеты
	///////

		var price1 = mass[val2-1];
		var price2 = mass2[val2-1];

		var sum = 0, kirpBolshe = 0, panelBolshe = 0, priceBalkon = 0, erker = 0, nestandart = 0, total = 0;

	// Стоимость
		sum = mass[val2-1];

	//Кирпичь больше
	if(val1 == 1){
		if(width > 1500){
			if(val2 == 1){
				kirpBolshe = 27;
			}
			if(val2 == 2){
				kirpBolshe = 30;
			}
			if(val2 == 3){
				kirpBolshe = 35;
			}
			if(val2 == 4){
				kirpBolshe = 40;
			}
		}
	}



	//Панелька больше
		if(val1 == 2){
			if(val2 == 1){
				if(width >= 2200){
					panelBolshe = 20;
				}else{
					panelBolshe = 17;
				}
			}
			if(val2 == 2){
				if(width >= 1500){
					panelBolshe = 22;
				}
			}
			if(val2 == 3){
				if(width >= 2200){
					panelBolshe = 28;
				}
			}
			if(val2 == 4){
				if(width >= 2200){
					panelBolshe = 31;
				}
			}
	}

	//Цена балкона

		switch (val2) {
			case 9:
				if(width >= 0 && width <= 3100){
					priceBalkon = 37;
				}else if (width >= 3100 && width <= 3400){
					priceBalkon = 44;	
				}else if(width >= 3400 && width <= 4000){
					priceBalkon = 50;
				}else if(width >= 4000){
					priceBalkon = 50;
				}
			break;
			case 8:
				if(width >= 0 && width <= 3100){
					priceBalkon = 40;
				}else if (width >= 3100 && width <= 3400){
					priceBalkon = 47;	
				}else if(width >= 3400 && width <= 4000){
					priceBalkon = 56;
				}else if(width >= 4000){
					priceBalkon = 56;
				}
			break;
		}
	//Эркер
			if(val1 == 1 && val2 == 11){
				erker = (width*height/1000000)*mass[val2-1];
			}
			if(val1 == 2 && val2 == 11){
				erker = (width*height/1000000)*mass[val2-1];
			}
			if(val1 == 3 && val2 == 11){
				erker = (width*height/1000000)*mass[val2-1];
			}			
			if(val2 == 10 && (val1 == 1 || val1 == 2)){
				erker = (width*height/1000000)*mass[val2-1];
			}		

	//Нестандарт

	switch (val2) {
			case 14:

				nestandart = (width*height/1000000)*9;
			break;
			case 15:
				nestandart = (width*height/1000000)*8.5;
			break;
			case 16:
				nestandart = (width*height/1000000)*15.5;
			break;
			case 17:
				nestandart = (width*height/1000000)*13.5;
			break;
		}

	// Стоимость поворотов
	if(povoroti > 0) {
		if(val2 == 9){
			povoroti = povoroti * 18;
		}
		if(val2 == 8){
			povoroti = povoroti * 21;
		}
	}

	//Итоговая
		var last;
		var  total = Math.max(sum, kirpBolshe, panelBolshe, priceBalkon, erker, nestandart);
		if(val2 == 8 || val2 == 9){
			last = total + povoroti;	
		}else{
			last = total;
		}
		document.getElementById('st2').innerHTML = last.toFixed(2);


        //--------------------------//
        // расчеты с шириной откосов
        //-------------------------//
        var sum2 = 0, erker2 = 0, total2 = 0, kirpit2 = 0, panel2 = 0, stalinka2 = 0, more1500 = 0, more2200 = 0,
            Kmore1500 = 0, Kmore2200 = 0, KBmore2200 = 0, Pmore1500 = 0, Pmore2200 = 0, PBmore2200 = 0, erker2 = 0, nesta =0;
    if(widthOtkos == 0){

    }else{

        //Стоимость для кирпичь
        if (val1 == 1) {
            if (widthOtkos < 200) {
                kirpit2 = mass2[val2 - 1];
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                kirpit2 = kirpit375[val2 - 1];
            } else if (widthOtkos > 375) {
                kirpit2 = kirpit500[val2 - 1];
            }
        }

        //Стоимость для панель
        if (val1 == 2) {
            if (widthOtkos < 200) {
                panel2 = mass2[val2 - 1];
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                panel2 = panel375[val2 - 1];
            } else if (widthOtkos > 375) {
                panel2 = panel500[val2 - 1];
            }
        }


        if (val2 == 14) {
            if (widthOtkos < 200) {
                nesta = 15;
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                nesta = 19;
            } else if (widthOtkos > 375) {
                nesta = 21;
            }
        }

        //Стоимость для сталинка
        if (val1 == 3) {
            if (widthOtkos < 200) {
                stalinka2 = mass2[val2 - 1];
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                stalinka2 = stalinka375[val2 - 1];
            } else if (widthOtkos > 375) {
                stalinka2 = stalinka500[val2 - 1];
            }
        }
        //Больше 1500 крипич двущка
        if (val1 == 1 && width > 1500  && val2 == 2) {
            if (widthOtkos < 200) {
                Kmore1500 = 42;
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                Kmore1500 = 42;
            } else if (widthOtkos > 375) {
                Kmore1500 = 55;
            }

        }


        //Больше 2200 кирпич трешка
        if (val1 == 1 && val2 == 3 && width > 2200) {
            if (widthOtkos < 200) {
                Kmore2200 = mass2[val2 - 1];
            }
            if (widthOtkos >= 200 && widthOtkos < 375) {
                Kmore2200 = 48;
            }
            if (widthOtkos > 375) {
                Kmore2200 = 61;
            }
        }

        //Больше 2200 кирпич бб
        if (val1 == 1 && val2 == 4 && width > 2200) {
            if (widthOtkos < 200) {
                KBmore2200 = mass2[val2 - 1];
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                KBmore2200 = 51;
            } else if (widthOtkos > 375) {
                KBmore2200 = 65;
            }
        }
        //Больше 1500 панель двушка
        if (val1 == 2 && val2 == 2 && width > 1500) {
            if (widthOtkos < 200) {
                Pmore1500 = mass2[val2 - 1];
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                Pmore1500 = 42;
            } else if (widthOtkos > 375) {
                Pmore1500 = 44;
            }
        }
        //Больше 2200 панель трешка
        if (val1 == 2 && val2 == 3 && width > 1500) {
            if (widthOtkos < 200) {
                Pmore2200 = mass2[val2 - 1];
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                Pmore2200 = 48;
            } else if (widthOtkos > 375) {
                Pmore2200 = 61;
            }
        }

        //Больше 2200 панель бб
        if (val1 == 2 && val2 == 4 && width > 2200) {
            if (widthOtkos < 200) {
                PBmore2200 = mass2[val2 - 1];
            } else if (widthOtkos >= 200 && widthOtkos < 375) {
                PBmore2200 = 51;
            } else if (widthOtkos > 375) {
                PBmore2200 = 65;
            }
        }
    }
        //Эркеры
        if (val2 == 11) {
            if (val1 == 1) {
                erker2 = (width * height / 1000000) * mass2[val2 - 1];
                // document.getElementById('st3').innerHTML = erker2;
            } else if (val1 == 2) {
                erker2 = (width * height / 1000000) * mass2[val2 - 1];
                // document.getElementById('st3').innerHTML = erker2;
            } else if (val1 == 3) {
                erker2 = (width * height / 1000000) * mass2[val2 - 1];
                // document.getElementById('st3').innerHTML = erker2;
            }
        }
        var total2 = Math.max(sum2, kirpit2, panel2, stalinka2, Kmore1500, Kmore2200, KBmore2200, Pmore1500, Pmore2200, PBmore2200, erker2, nesta);
        document.getElementById('st3').innerHTML = total2.toFixed(2);
        ;
   
    //-------------------------
    //Допы к заказу просчет
    //------------------------
	var summDopkzakazu = 0;
	var upVerevki = $("#upVerevki option:selected").text();
	var moskitkaNaalyminii1 = Number($("#moskitkaNaalyminii").val());
	var moskitkaKollvo1 = Number($("#moskitkaKollvo").val());
	var ugolKolvo1 = Number($("#ugolKolvo").val());
	var rashiritelKOlvo1 = Number($("#rashiritelKOlvo").val());
	var montazZalyzi1 = Number($("#montazZalyzi").val());
 
	if(upVerevki == "Да" ){
		summDopkzakazu += 10;
	}
	if(moskitkaNaalyminii1 >=1 ){
		summDopkzakazu += moskitkaNaalyminii1 * 3;
	}
	if(moskitkaKollvo1 >=1 ){
		summDopkzakazu +=  moskitkaKollvo1 * 3;
	}
	if(ugolKolvo1 >=1 ){
		summDopkzakazu += ugolKolvo1 * 2;
	}
	if(rashiritelKOlvo1 >=1 ){
		summDopkzakazu += rashiritelKOlvo1 * 2;
	}
	if(montazZalyzi1 >=1 ){
		summDopkzakazu += montazZalyzi1 * 2;
	}
	 document.getElementById('st10').innerHTML = summDopkzakazu.toFixed(2);

    //-------------------------
    //Допы к изделию
    //------------------------
	var summIzdelia = 0;
	var demonSsohtaneniem1 = $("#demonSsohtaneniem option:selected").text();
	var pilMP1 = $("#pilMP option:selected").text();
	var gilMP1 = $("#gilMP option:selected").text();
	var psulMP1 = $("#psulMP option:selected").text();
	var karkasPramoi1 = $("#karkasPramoi option:selected").text();
	var karkasPovorot1 = $("#karkasPovorot option:selected").text();
	var Otmazka1 = $("#Otmazka option:selected").text();
 	var massOtmazki = ['2','2','3','4','5','6','5','5','5'];

	if(demonSsohtaneniem1 == "Да" ){
		summIzdelia += width * height/1000000*3;
	}
	if(pilMP1 == "Да" ){
		summIzdelia += 0.8*(width+height)*2/1000;
	}
	if(gilMP1 == "Да" ){
		summIzdelia += 0.7*(width+height)*2/1000;
	}
	if(psulMP1 == "Да" ){
		summIzdelia += 0.3*(width+height)*2/1000;
	}
	if(karkasPramoi1 == "Да" ){
		summIzdelia += 18;
	}
	if(karkasPovorot1 == "Да" ){
		summIzdelia += povoroti2 * 6;
	}
	if(Otmazka1 == "Да" ){
		var test = 0;
		if(val2 <= 9){
			test = Number(massOtmazki[val2-1]);
			summIzdelia += test;
		}
 
	}

	document.getElementById('st4').innerHTML = summIzdelia.toFixed(2);

    // Сохраним значения расчетов в localStoreg
    	sessionStorage.setItem('totalSum1', last);
    	sessionStorage.setItem('totalSum2', total2);
    	sessionStorage.setItem('summDopkzakazu', summDopkzakazu);

    return last, total2;
}


////
// Добавление данных в таблицу с изделиями
///
function add(last, total2){
	var last = Number(sessionStorage.getItem("totalSum1"));
	var total2 = Number(sessionStorage.getItem("totalSum2"));
 	var summDopkzakazu = Number(sessionStorage.getItem("summDopkzakazu"));
	


		var ss = Number($("#st5").text());

		if(ss == 0){
			var c1 = 0, c2 = 0, c3 = 0, tot= 0;

			document.getElementById('st5').innerHTML = document.getElementById('st2').innerHTML;
			document.getElementById('st6').innerHTML = document.getElementById('st3').innerHTML;
			document.getElementById('st7').innerHTML = document.getElementById('st4').innerHTML;
			
			c1 = Number(document.getElementById('st2').innerHTML);
			c2 = Number(document.getElementById('st3').innerHTML);
			c3 = Number(document.getElementById('st4').innerHTML);
			tot =  c1 + c2 + c3;
			document.getElementById('st8').innerHTML =  tot; 
		}


	if( last == 0 && total2 == 0) {
   		Notify.generate('', 'Расчитайте стоимость изделия!', 3);	
	 }else{
	 	//Как-то чинит с третей позиции расчет 
		var massElem =[];
		massElem = sendq();

		var val1 = $("#exampleFormControlSelect1 option:selected").text();
		var val2 = $("#exampleFormControlSelect2 option:selected").text();
		var povoroti = Number($("#povoroti").val());
		var width = Number($("#width").val());
		var height = Number($("#height").val());
		var widthOtkos = Number($("#widthOtkos").val());
		var lastSum = $("#st2").text();
		var lastSum2 = $("#st3").text();
		var lastSum3 = $("#st4").text();
		var kolvoElementov = $(".izdel #cena").length;
		var demonSsohtaneniem1 = $("#demonSsohtaneniem option:selected").text();
		var pilMP1 = $("#pilMP option:selected").text();
		var gilMP1 = $("#gilMP option:selected").text();
		var psulMP1 = $("#psulMP option:selected").text();
		var karkasPramoi1 = $("#karkasPramoi option:selected").text();
		var karkasPovorot1 = $("#karkasPovorot option:selected").text();
		var Otmazka1 = $("#Otmazka option:selected").text();		


		$('#list').append('<div class="izdel"><div id="delet" class="l"><span>x</span></div><div class="c"><span>Тип дома:</span><span>'+val1+'</span><br><span>Тип Изделия:</span><span>'+val2+'</span><br><span>Повороты:</span><span>'+povoroti+'</span><span>Ширина отксов:</span><span>'+widthOtkos+'</span><br><span>Ширина:</span><span>'+width+'</span><span>Высота:</span><span>'+height+'</span></div><div class="r"> <div class="verh"><span class="cen">Монтаж</span><span id="cena" class="summa">'+lastSum+'</span></div><div class="niz"><span class="cen">Откосы</span><span id="cena2" class="summa2">'+lastSum2+'</span><div class="niz"><span class="cen">Допы</span><span id="cena3" class="summa2">'+lastSum3+'</span></div></div></div><div class="full"><span>Демонтаж с сохранением к кв м:</span><span>'+demonSsohtaneniem1+'</span>, <span>Пил м.п:</span><span>'+pilMP1+'</span>, <span>Гил м.п:</span><span>'+gilMP1+'</span>, <span>Псул м.п:</span><span>'+psulMP1+'</span>, <span>Каркас прямой:</span><span>'+karkasPramoi1+'</span>, <span>Каркас поворот:</span><span>'+karkasPovorot1+'</span>, <span>Отмазка:</span><span>'+Otmazka1+'</span></div></div>');

		var newSumma = 0;
		var newSumma2 = 0;
		var newSumma3 = 0;
		var newSumma4 = 0;		
 		var val, val2, val3, val4;

 		var massOtmazki = ['2','2','3','4','5','6','5','5','5'];

 		// Расчет общей стоимости
	     $('.izdel #cena').each(function(){
	        if(kolvoElementov != 0 ){
	        	val = Number($(this).text());
	        	newSumma = newSumma + val;
	        	document.getElementById('st5').innerHTML = newSumma.toFixed(2);
	        }
	    });


	   $('.izdel #cena2').each(function(){
	        if(kolvoElementov != 0 ){
	        	val2 = Number($(this).text());
	        	newSumma2 = newSumma2 + val2;
	        	document.getElementById('st6').innerHTML = newSumma2.toFixed(2);
			}
	    });


	   $('.izdel #cena3').each(function(){
	        if(kolvoElementov != 0 ){

	        	val3 = Number($(this).text());
	        	newSumma3 = newSumma3 + val3;
	        	document.getElementById('st7').innerHTML = newSumma3.toFixed(2);
	        }
	    });

	 
			newSumma4 = newSumma + newSumma2 + newSumma3 ;
			if( massOtmazki.indexOf(val2)){
				newSumma4 += summDopkzakazu;
			}
			if(newSumma4 != 0) {
				document.getElementById('st8').innerHTML = newSumma4.toFixed(2);
			}
 		
		var sst = 0;
		vf1 = Number(document.getElementById('st7').innerHTML);
		vf2 = Number(document.getElementById('st10').innerHTML);
		sst = vf2 +vf1;

		document.getElementById('g2').value = document.getElementById('st5').innerHTML;
		document.getElementById('g3').value = document.getElementById('st6').innerHTML;
		document.getElementById('g4').value = sst.toFixed(2);

		document.getElementById('st2').innerHTML = 0;
		document.getElementById('st3').innerHTML = 0;
		document.getElementById('st4').innerHTML = 0;


	    Notify.generate('', 'Изделие дабавленно, итоговые цены обновленны!', 1);
	}
}

// удаление блоков

$('html').on('click','#delet', function () {                               
	$(this).parent().remove();    
	var kolvoElementov = $(".izdel #cena").length;
	var newSumma = 0;
	var newSumma2 =0;
	var newSumma3=0;
	var val, val2, val3;
	var newSumma4 = Number($("#st8").text());
 	// Расчет общей стоимости
     $('.izdel #cena').each(function(){
        if(kolvoElementov != 0 ){
        	val = Number($(this).text());
      		newSumma = newSumma + val;
        	document.getElementById('st5').innerHTML = newSumma.toFixed(2);
        }
    });
     $('.izdel #cena2').each(function(){
        if(kolvoElementov != 0 ){
        	val2 = Number($(this).text());
      		newSumma2 = newSumma2 + val2;
        	document.getElementById('st6').innerHTML = newSumma2.toFixed(2);
        }
    }); 
     $('.izdel #cena3').each(function(){
        if(kolvoElementov != 0 ){
        	val3 = Number($(this).text());
      		newSumma3 = newSumma3 + val3;
        	document.getElementById('st7').innerHTML = newSumma3.toFixed(2);
        }
    });   


    newSumma4 = newSumma4 - (val+val2+val3); 
	document.getElementById('st8').innerHTML = newSumma4.toFixed(2);
	vf1 = Number(document.getElementById('st7').innerHTML);
	vf2 = Number(document.getElementById('st10').innerHTML);
	sst = vf2 +vf1;

	document.getElementById('g2').value = document.getElementById('st5').innerHTML;
	document.getElementById('g3').value = document.getElementById('st6').innerHTML;
	document.getElementById('g4').value = sst.toFixed(2);


    if($('.izdel #cena').length == 0){
    	document.getElementById('st2').innerHTML = 0;
    	document.getElementById('st3').innerHTML = 0;
    	document.getElementById('st4').innerHTML = 0;
    	document.getElementById('st5').innerHTML = 0;
    	document.getElementById('st6').innerHTML = 0;
    	document.getElementById('st7').innerHTML = 0;
    	document.getElementById('st8').innerHTML = 0;
    }
	
	Notify.generate('', 'Изделие удаленно, итоговые цены обновленны!', 1);

});


// Очистка таблицы
$('html').on('click','#clear', function () {                               
	$(".izdel").remove();
		document.getElementById('st2').innerHTML = 0;
		document.getElementById('st3').innerHTML = 0;
		document.getElementById('st4').innerHTML = 0;
		document.getElementById('st5').innerHTML = 0;
		document.getElementById('st6').innerHTML = 0;
		document.getElementById('st7').innerHTML = 0;
		document.getElementById('st8').innerHTML = 0;		
		Notify.generate(' ', 'Таблица очищенна', 0);

		vf1 = Number(document.getElementById('st7').innerHTML);
		vf2 = Number(document.getElementById('st10').innerHTML);
		sst = vf2 +vf1;

		document.getElementById('g2').value = document.getElementById('st5').innerHTML;
		document.getElementById('g3').value = document.getElementById('st6').innerHTML;
		document.getElementById('g4').value = sst.toFixed(2);


});



// Печать документа СТРАНИЦА 1
function CallPrint1(list) {

	var bodyNotBackground = '<style type="text/css">body{background: none !important;}</style><link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css" /><link rel="stylesheet" type="text/css" href="./css/style.css">';

	var newWindow = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    
    newWindow.document.write(document.getElementById("pPrint").innerHTML);
    newWindow.print();
    newWindow.close();

}

// Сохранение в WORD СТРАНИЦА 1
$('html').on('click','#saveWord1', function () {  
	$("#pPrint").wordExport();
});


// Печать документа СТРАНИЦА 2
function CallPrint(list) {

var bodyNotBackground = '<style type="text/css">body{background: none !important;}</style><link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css" /><link rel="stylesheet" type="text/css" href="./css/style.css">';
var newWindow = window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
    
    newWindow.document.write(document.getElementById("list").innerHTML);
    newWindow.document.write(document.getElementById("cont").innerHTML);
    newWindow.print();
    newWindow.close();

}

// Сохранение в WORD СТРАНИЦА 2
$('html').on('click','#saveWord', function () {  
	$("#print").wordExport();
});



// вспылвашки
    Notify = {				
            TYPE_INFO: 0,				
            TYPE_SUCCESS: 1,				
            TYPE_WARNING: 2,				
            TYPE_DANGER: 3,								

            generate: function (aText, aOptHeader, aOptType_int) {					
                var lTypeIndexes = [this.TYPE_INFO, this.TYPE_SUCCESS, this.TYPE_WARNING, this.TYPE_DANGER];					
                var ltypes = ['alert-info', 'alert-success', 'alert-warning', 'alert-danger'];										
                var ltype = ltypes[this.TYPE_INFO];					

                if (aOptType_int !== undefined && lTypeIndexes.indexOf(aOptType_int) !== -1) {						
                    ltype = ltypes[aOptType_int];					
                }										

                var lText = '';					
                if (aOptHeader) {						
                    lText += "<h4>"+aOptHeader+"</h4>";					
                }					
                lText += "<p>"+aText+"</p>";										
                var lNotify_e = $("<div class='alert "+ltype+"'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button>"+lText+"</div>");					

                setTimeout(function () {						
                    lNotify_e.alert('close');					
                }, 2000);					
                lNotify_e.appendTo($("#notifies"));				
            }			
        };	



// Программное нажатие//

function kp(e) {
 
	if (e) keyCode = e.which
	else if (event) keyCode=event.keyCode
	else return
	if (keyCode == 13 ) document.getElementById("ras1").click()
	if (keyCode == 13 ) document.getElementById("add1").click()

}
document.onkeypress=kp;


// Блокируем блоки 
$('html').on('click','#exampleFormControlSelect2', function () { 

	var selected = Number($("#exampleFormControlSelect2").val()); 
	var massIndex =  ['8','9','12','13','15','16','17'];
	var massIndex2 = ['1','2','3','4','5','6','7','10','11'];
	
	if(selected == 14){
		$("#povoroti").removeAttr('disabled'); 
		$("#widthOtkos").removeAttr('disabled');
	}
 
    for (var i = 0; i < massIndex.length; i++) {
       if(massIndex[i] == selected){
			$("#widthOtkos").attr("disabled","disabled");
			$("#povoroti").removeAttr('disabled');       	
       }
    }

    for (var i = 0; i < massIndex.length; i++) {
		if(massIndex2[i] == selected){
			$("#widthOtkos").removeAttr('disabled');
			$("#povoroti").attr("disabled","disabled");
    	}
    }


	document.getElementById('widthOtkos').value = 0;
	document.getElementById('povoroti').value = 0;

});


// Добавление изделия на вкладе 2 
$('html').on('click','#addNewitem', function () { 
	$('body > div.container.back > div > div > ul > li:nth-child(2) > a').click();
});

// Вернуться к расчетам
$('html').on('click','#backRaschet', function () { 
	$('body > div.container.back > div > div > ul > li:nth-child(1) > a').click();
});



//  РАСЧЕТЫ СТРАНИЦЫ РАСЧЕТ
function newSum(){

// Массивы. переменные и тп
	mass1 = [
		['0','0'],
		['401','3'],
		['751','4'],
		['1001','5'],
		['1301','6'],
		['1701','7'],
		['2201','8']
	]

	mess = [
		['0','30','35'],
		['1','30','35'],
		['2','25','33'],
		['3','21','30'],
		['4','18','28'],
		['5','14','25'],
		['6','10','22'],
		['7','6','20'],
		['9','4','18'],
		['11','0','16']
	]

	nadbavka = [
		['0','10'],
		['201','9'],
		['401','8'],
		['601','7'],
		['801','6'],
		['1001','5'],
		['1201','4'],
		['1401','3'],
		['1601','2'],
		['1801','1'],
		['2001','0']
	]

	var skidka1 = 0, skidka2 = 0, skidka3 = 0, skidka4 = 0;
	var final = 0, razScenoi = 0;
	var a1,a2,a3,a4,a5,a6,a7,a8;
	var sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0;
	 

	var a1 = Number($("#c1").val());
	var a2 = Number($("#c2").val());
	var a3 = Number($("#c3").val());
	var a4 = Number($("#c4").val());
	var a5 = Number($("#c5").val());
	var a6 = Number($("#c6").val());


	var a7 = Number($("#g1").val());
	var a8 = $("#g2").val();
	var a9 = $("#g3").val();
	var a10 = $("#g4").val();
	var a11 = $("#g5").val();

	var a12 = Number($("#g6").val());




	sum1 = Number((a1 * (a3 / 100)) + a1);
	sum2 = Number((a2 * (a4 / 100)) + a2);
	sum3 = Number(sum1 + sum2);

	 
	for (var i = 0; i < mass1.length; i++) {
		if( sum3 <= mass1[i+1][0]){
		 	skidka1 = mass1[i][1];
		 	break;
		}
	 
	}

	sum4 = sum2 - ( sum2 * (skidka1/ 100));
	sum5 = sum1 - ( sum1 * (skidka1/ 100));
	sum6 = sum3 - (sum3 * (skidka1/ 100));

	for (var i = 0; i < mess.length; i++) {
		if( a5 == mess[i][0]){
		 	skidka2 = mess[i][1];
		  break;
		}
	 
	}

	for (var i = 0; i < mess.length; i++) {
		if( a6 == mess[i][0]){
		 	skidka3 = mess[i][2];
		  break;
		}
	 
	}

	sum7 = sum5 - (sum5 * (skidka2 / 100));
	sum8 = sum4 - (sum4 * (skidka3 / 100));
	sum9 = sum7 + sum8;
	for (var i = 0; i < nadbavka.length; i++) {
		if( sum9 <= nadbavka[i+1][0]){
		 	skidka4 = nadbavka[i][1];
		  break;
		}
	 
	}

	sum10 = sum9 + (sum9 * (skidka4/ 100));
	sum10 = Number(sum10);
	 


	$('#ews').html('');

	final = sum10 + Number(a8) + Number(a9) + Number(a10) + Number(a11); 
	razScenoi = final - Number(a12);
	$('#ews').append('Sum 1 = '+ sum1 + ',Sum 2 = '+ sum2 + ', Sum 3 = '+ sum3 + ',Sum 4 = '+ sum4 + ',Sum 5 = '+ sum5+ ',Sum 6 = '+ sum6 + ',Sum 7 = '+ sum7 + ',Sum 8 = '+ sum8 + ',Sum 9 = '+ sum9 + ',Sum 10 = '+ sum10+', FINAL = '+final+' , FINAL - Установленная =  '+razScenoi+ '');

	document.getElementById('id3').innerHTML = sum1.toFixed(2);
	document.getElementById('id4').innerHTML = sum2.toFixed(2);
	document.getElementById('id5').innerHTML = sum3.toFixed(2);


	document.getElementById('id6').innerHTML = skidka1+'%';
	document.getElementById('id8').innerHTML = sum4.toFixed(2);
	document.getElementById('id9').innerHTML = sum5.toFixed(2);
	document.getElementById('id10').innerHTML = sum6.toFixed(2);

	document.getElementById('id11').innerHTML = skidka2+'%';
	document.getElementById('id12').innerHTML = skidka3+'%';
	document.getElementById('id13').innerHTML = sum7.toFixed(2);
	document.getElementById('id14').innerHTML = sum8.toFixed(2);
	document.getElementById('id15').innerHTML = sum9.toFixed(2);

	document.getElementById('id16').innerHTML = skidka4+'%';
	document.getElementById('id20').innerHTML = sum10.toFixed(2);
	var mm = 0;
	mm = sum10 + Number(a8);
	document.getElementById('id25').innerHTML = mm.toFixed(2);
	mm = 0;
	mm = sum10 + Number(a9);
	document.getElementById('id26').innerHTML = mm.toFixed(2);
	mm = 0;
	mm = sum10 + Number(a10);
	document.getElementById('id27').innerHTML = mm.toFixed(2);
	mm = 0;
	mm = sum10 + Number(a10);	
	document.getElementById('id28').innerHTML = mm.toFixed(2);






	document.getElementById('id21').innerHTML = final.toFixed(2);

	document.getElementById('id22').innerHTML = razScenoi.toFixed(2);


	document.getElementById('g1').value = razScenoi.toFixed(2);

}


//  Копируем данные в буфер
function CopyToClipboard() {
	$('#buffer').text('');
	text = document.getElementById('g1').value + ' ' +document.getElementById('g2').value + ' ' +document.getElementById('g3').value + ' ' +document.getElementById('g4').value + ' ' +document.getElementById('g5').value;
	$('#buffer').append(text);
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById('buffer'));
    range.select().createTextRange();
    document.execCommand("Copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById('buffer'));
     window.getSelection().addRange(range);
     document.execCommand("Copy");
     // alert("text copied") 
    Notify.generate('', 'Значения скопированны в буфер!', 1);
}}

