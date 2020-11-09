(this["webpackJsonpcoronavirus-tracker-bg"]=this["webpackJsonpcoronavirus-tracker-bg"]||[]).push([[0],{38:function(a,n,t){a.exports=t(50)},43:function(a,n,t){},45:function(a,n,t){},50:function(a,n,t){"use strict";t.r(n);var e=t(0),r=t.n(e),u=t(8),o=t.n(u),l=(t(43),t(44),t(45),t(30)),S=t(31),i=t(36),s=t(32),g=t(37),C=function(a){function n(){return Object(l.a)(this,n),Object(i.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(g.a)(n,a),Object(S.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("hr",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://covid19api.com/"},"api")),r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/petar-staynov/coronavirus-tracker-bg"},"GitHub")),r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("strong",null,"\xa9 Petar Staynov 2020-2021 \xa9")))}}]),n}(e.Component),y=t(7),c={Loading:"loading",Loaded:"loaded",Error:"error"},I=Object(e.createContext)(),O=function(a){var n=Object(e.useState)(JSON.parse(localStorage.getItem("country"))),t=Object(y.a)(n,2),u=t[0],o=t[1],l=Object(e.useState)(c.Loading),S=Object(y.a)(l,2),i=S[0],s=S[1],g=Object(e.useState)(null),C=Object(y.a)(g,2),O=C[0],d=C[1];Object(e.useEffect)((function(){localStorage.setItem("country",JSON.stringify(u))}),[u]);var m={country:u,setCountry:o,status:i,setStatus:s,countryData:O,setCountryData:d};return r.a.createElement(I.Provider,{value:m},a.children)},d=function(){var a=Object(e.useContext)(I).country;return r.a.createElement("div",{style:{marginBottom:"8px"}},r.a.createElement("h1",null,"Corona Tracker BG"),r.a.createElement("h5",null,"\u0421\u043b\u0435\u0434\u0438 \u0441\u043b\u0443\u0447\u0430\u0438\u0442\u0435 \u043d\u0430 COVID-19 \u0432 \u0440\u0435\u0430\u043b\u043d\u043e \u0432\u0440\u0435\u043c\u0435 \u043f\u043e \u0441\u0432\u0435\u0442\u0430 \u0438 \u0443 \u043d\u0430\u0441"),r.a.createElement("h4",null,(new Date).toLocaleDateString(a)))},m={GLOBAL:{Country:"GLOBAL",ISO2:"GLOBAL",Slug:"global"},AD:{Country:"Andorra",ISO2:"AD",Slug:"andorra"},AE:{Country:"United Arab Emirates",ISO2:"AE",Slug:"united-arab-emirates"},AF:{Country:"Afghanistan",ISO2:"AF",Slug:"afghanistan"},AG:{Country:"Antigua and Barbuda",ISO2:"AG",Slug:"antigua-and-barbuda"},AI:{Country:"Anguilla",ISO2:"AI",Slug:"anguilla"},AL:{Country:"Albania",ISO2:"AL",Slug:"albania"},AM:{Country:"Armenia",ISO2:"AM",Slug:"armenia"},AN:{Country:"Netherlands Antilles",ISO2:"AN",Slug:"netherlands-antilles"},AO:{Country:"Angola",ISO2:"AO",Slug:"angola"},AQ:{Country:"Antarctica",ISO2:"AQ",Slug:"antarctica"},AR:{Country:"Argentina",ISO2:"AR",Slug:"argentina"},AS:{Country:"American Samoa",ISO2:"AS",Slug:"american-samoa"},AT:{Country:"Austria",ISO2:"AT",Slug:"austria"},AU:{Country:"Australia",ISO2:"AU",Slug:"australia"},AW:{Country:"Aruba",ISO2:"AW",Slug:"aruba"},AX:{Country:"ALA Aland Islands",ISO2:"AX",Slug:"ala-aland-islands"},AZ:{Country:"Azerbaijan",ISO2:"AZ",Slug:"azerbaijan"},BA:{Country:"Bosnia and Herzegovina",ISO2:"BA",Slug:"bosnia-and-herzegovina"},BB:{Country:"Barbados",ISO2:"BB",Slug:"barbados"},BD:{Country:"Bangladesh",ISO2:"BD",Slug:"bangladesh"},BE:{Country:"Belgium",ISO2:"BE",Slug:"belgium"},BF:{Country:"Burkina Faso",ISO2:"BF",Slug:"burkina-faso"},BG:{Country:"Bulgaria",ISO2:"BG",Slug:"bulgaria"},BH:{Country:"Bahrain",ISO2:"BH",Slug:"bahrain"},BI:{Country:"Burundi",ISO2:"BI",Slug:"burundi"},BJ:{Country:"Benin",ISO2:"BJ",Slug:"benin"},BL:{Country:"Saint-Barth\xe9lemy",ISO2:"BL",Slug:"saint-barth\xe9lemy"},BM:{Country:"Bermuda",ISO2:"BM",Slug:"bermuda"},BN:{Country:"Brunei Darussalam",ISO2:"BN",Slug:"brunei"},BO:{Country:"Bolivia",ISO2:"BO",Slug:"bolivia"},BR:{Country:"Brazil",ISO2:"BR",Slug:"brazil"},BS:{Country:"Bahamas",ISO2:"BS",Slug:"bahamas"},BT:{Country:"Bhutan",ISO2:"BT",Slug:"bhutan"},BV:{Country:"Bouvet Island",ISO2:"BV",Slug:"bouvet-island"},BW:{Country:"Botswana",ISO2:"BW",Slug:"botswana"},BY:{Country:"Belarus",ISO2:"BY",Slug:"belarus"},BZ:{Country:"Belize",ISO2:"BZ",Slug:"belize"},CA:{Country:"Canada",ISO2:"CA",Slug:"canada"},CC:{Country:"Cocos (Keeling) Islands",ISO2:"CC",Slug:"cocos-keeling-islands"},CD:{Country:"Congo (Kinshasa)",ISO2:"CD",Slug:"congo-kinshasa"},CF:{Country:"Central African Republic",ISO2:"CF",Slug:"central-african-republic"},CG:{Country:"Congo (Brazzaville)",ISO2:"CG",Slug:"congo-brazzaville"},CH:{Country:"Switzerland",ISO2:"CH",Slug:"switzerland"},CI:{Country:"C\xf4te d'Ivoire",ISO2:"CI",Slug:"cote-divoire"},CK:{Country:"Cook Islands",ISO2:"CK",Slug:"cook-islands"},CL:{Country:"Chile",ISO2:"CL",Slug:"chile"},CM:{Country:"Cameroon",ISO2:"CM",Slug:"cameroon"},CN:{Country:"China",ISO2:"CN",Slug:"china"},CO:{Country:"Colombia",ISO2:"CO",Slug:"colombia"},CR:{Country:"Costa Rica",ISO2:"CR",Slug:"costa-rica"},CU:{Country:"Cuba",ISO2:"CU",Slug:"cuba"},CV:{Country:"Cape Verde",ISO2:"CV",Slug:"cape-verde"},CX:{Country:"Christmas Island",ISO2:"CX",Slug:"christmas-island"},CY:{Country:"Cyprus",ISO2:"CY",Slug:"cyprus"},CZ:{Country:"Czech Republic",ISO2:"CZ",Slug:"czech-republic"},DE:{Country:"Germany",ISO2:"DE",Slug:"germany"},DJ:{Country:"Djibouti",ISO2:"DJ",Slug:"djibouti"},DK:{Country:"Denmark",ISO2:"DK",Slug:"denmark"},DM:{Country:"Dominica",ISO2:"DM",Slug:"dominica"},DO:{Country:"Dominican Republic",ISO2:"DO",Slug:"dominican-republic"},DZ:{Country:"Algeria",ISO2:"DZ",Slug:"algeria"},EC:{Country:"Ecuador",ISO2:"EC",Slug:"ecuador"},EE:{Country:"Estonia",ISO2:"EE",Slug:"estonia"},EG:{Country:"Egypt",ISO2:"EG",Slug:"egypt"},EH:{Country:"Western Sahara",ISO2:"EH",Slug:"western-sahara"},ER:{Country:"Eritrea",ISO2:"ER",Slug:"eritrea"},ES:{Country:"Spain",ISO2:"ES",Slug:"spain"},ET:{Country:"Ethiopia",ISO2:"ET",Slug:"ethiopia"},FI:{Country:"Finland",ISO2:"FI",Slug:"finland"},FJ:{Country:"Fiji",ISO2:"FJ",Slug:"fiji"},FK:{Country:"Falkland Islands (Malvinas)",ISO2:"FK",Slug:"falkland-islands-malvinas"},FM:{Country:"Micronesia, Federated States of",ISO2:"FM",Slug:"micronesia"},FO:{Country:"Faroe Islands",ISO2:"FO",Slug:"faroe-islands"},FR:{Country:"France",ISO2:"FR",Slug:"france"},GA:{Country:"Gabon",ISO2:"GA",Slug:"gabon"},GB:{Country:"United Kingdom",ISO2:"GB",Slug:"united-kingdom"},GD:{Country:"Grenada",ISO2:"GD",Slug:"grenada"},GE:{Country:"Georgia",ISO2:"GE",Slug:"georgia"},GF:{Country:"French Guiana",ISO2:"GF",Slug:"french-guiana"},GG:{Country:"Guernsey",ISO2:"GG",Slug:"guernsey"},GH:{Country:"Ghana",ISO2:"GH",Slug:"ghana"},GI:{Country:"Gibraltar",ISO2:"GI",Slug:"gibraltar"},GL:{Country:"Greenland",ISO2:"GL",Slug:"greenland"},GM:{Country:"Gambia",ISO2:"GM",Slug:"gambia"},GN:{Country:"Guinea",ISO2:"GN",Slug:"guinea"},GP:{Country:"Guadeloupe",ISO2:"GP",Slug:"guadeloupe"},GQ:{Country:"Equatorial Guinea",ISO2:"GQ",Slug:"equatorial-guinea"},GR:{Country:"Greece",ISO2:"GR",Slug:"greece"},GS:{Country:"South Georgia and the South Sandwich Islands",ISO2:"GS",Slug:"south-georgia-and-the-south-sandwich-islands"},GT:{Country:"Guatemala",ISO2:"GT",Slug:"guatemala"},GU:{Country:"Guam",ISO2:"GU",Slug:"guam"},GW:{Country:"Guinea-Bissau",ISO2:"GW",Slug:"guinea-bissau"},GY:{Country:"Guyana",ISO2:"GY",Slug:"guyana"},HK:{Country:"Hong Kong, SAR China",ISO2:"HK",Slug:"hong-kong-sar-china"},HM:{Country:"Heard and Mcdonald Islands",ISO2:"HM",Slug:"heard-and-mcdonald-islands"},HN:{Country:"Honduras",ISO2:"HN",Slug:"honduras"},HR:{Country:"Croatia",ISO2:"HR",Slug:"croatia"},HT:{Country:"Haiti",ISO2:"HT",Slug:"haiti"},HU:{Country:"Hungary",ISO2:"HU",Slug:"hungary"},ID:{Country:"Indonesia",ISO2:"ID",Slug:"indonesia"},IE:{Country:"Ireland",ISO2:"IE",Slug:"ireland"},IL:{Country:"Israel",ISO2:"IL",Slug:"israel"},IM:{Country:"Isle of Man",ISO2:"IM",Slug:"isle-of-man"},IN:{Country:"India",ISO2:"IN",Slug:"india"},IO:{Country:"British Indian Ocean Territory",ISO2:"IO",Slug:"british-indian-ocean-territory"},IQ:{Country:"Iraq",ISO2:"IQ",Slug:"iraq"},IR:{Country:"Iran, Islamic Republic of",ISO2:"IR",Slug:"iran"},IS:{Country:"Iceland",ISO2:"IS",Slug:"iceland"},IT:{Country:"Italy",ISO2:"IT",Slug:"italy"},JE:{Country:"Jersey",ISO2:"JE",Slug:"jersey"},JM:{Country:"Jamaica",ISO2:"JM",Slug:"jamaica"},JO:{Country:"Jordan",ISO2:"JO",Slug:"jordan"},JP:{Country:"Japan",ISO2:"JP",Slug:"japan"},KE:{Country:"Kenya",ISO2:"KE",Slug:"kenya"},KG:{Country:"Kyrgyzstan",ISO2:"KG",Slug:"kyrgyzstan"},KH:{Country:"Cambodia",ISO2:"KH",Slug:"cambodia"},KI:{Country:"Kiribati",ISO2:"KI",Slug:"kiribati"},KM:{Country:"Comoros",ISO2:"KM",Slug:"comoros"},KN:{Country:"Saint Kitts and Nevis",ISO2:"KN",Slug:"saint-kitts-and-nevis"},KP:{Country:"Korea (North)",ISO2:"KP",Slug:"korea-north"},KR:{Country:"Korea (South)",ISO2:"KR",Slug:"korea-south"},KW:{Country:"Kuwait",ISO2:"KW",Slug:"kuwait"},KY:{Country:"Cayman Islands",ISO2:"KY",Slug:"cayman-islands"},KZ:{Country:"Kazakhstan",ISO2:"KZ",Slug:"kazakhstan"},LA:{Country:"Lao PDR",ISO2:"LA",Slug:"lao-pdr"},LB:{Country:"Lebanon",ISO2:"LB",Slug:"lebanon"},LC:{Country:"Saint Lucia",ISO2:"LC",Slug:"saint-lucia"},LI:{Country:"Liechtenstein",ISO2:"LI",Slug:"liechtenstein"},LK:{Country:"Sri Lanka",ISO2:"LK",Slug:"sri-lanka"},LR:{Country:"Liberia",ISO2:"LR",Slug:"liberia"},LS:{Country:"Lesotho",ISO2:"LS",Slug:"lesotho"},LT:{Country:"Lithuania",ISO2:"LT",Slug:"lithuania"},LU:{Country:"Luxembourg",ISO2:"LU",Slug:"luxembourg"},LV:{Country:"Latvia",ISO2:"LV",Slug:"latvia"},LY:{Country:"Libya",ISO2:"LY",Slug:"libya"},MA:{Country:"Morocco",ISO2:"MA",Slug:"morocco"},MC:{Country:"Monaco",ISO2:"MC",Slug:"monaco"},MD:{Country:"Moldova",ISO2:"MD",Slug:"moldova"},ME:{Country:"Montenegro",ISO2:"ME",Slug:"montenegro"},MF:{Country:"Saint-Martin (French part)",ISO2:"MF",Slug:"saint-martin-french-part"},MG:{Country:"Madagascar",ISO2:"MG",Slug:"madagascar"},MH:{Country:"Marshall Islands",ISO2:"MH",Slug:"marshall-islands"},MK:{Country:"Macedonia, Republic of",ISO2:"MK",Slug:"macedonia"},ML:{Country:"Mali",ISO2:"ML",Slug:"mali"},MM:{Country:"Myanmar",ISO2:"MM",Slug:"myanmar"},MN:{Country:"Mongolia",ISO2:"MN",Slug:"mongolia"},MO:{Country:"Macao, SAR China",ISO2:"MO",Slug:"macao-sar-china"},MP:{Country:"Northern Mariana Islands",ISO2:"MP",Slug:"northern-mariana-islands"},MQ:{Country:"Martinique",ISO2:"MQ",Slug:"martinique"},MR:{Country:"Mauritania",ISO2:"MR",Slug:"mauritania"},MS:{Country:"Montserrat",ISO2:"MS",Slug:"montserrat"},MT:{Country:"Malta",ISO2:"MT",Slug:"malta"},MU:{Country:"Mauritius",ISO2:"MU",Slug:"mauritius"},MV:{Country:"Maldives",ISO2:"MV",Slug:"maldives"},MW:{Country:"Malawi",ISO2:"MW",Slug:"malawi"},MX:{Country:"Mexico",ISO2:"MX",Slug:"mexico"},MY:{Country:"Malaysia",ISO2:"MY",Slug:"malaysia"},MZ:{Country:"Mozambique",ISO2:"MZ",Slug:"mozambique"},NA:{Country:"Namibia",ISO2:"NA",Slug:"namibia"},NC:{Country:"New Caledonia",ISO2:"NC",Slug:"new-caledonia"},NE:{Country:"Niger",ISO2:"NE",Slug:"niger"},NF:{Country:"Norfolk Island",ISO2:"NF",Slug:"norfolk-island"},NG:{Country:"Nigeria",ISO2:"NG",Slug:"nigeria"},NI:{Country:"Nicaragua",ISO2:"NI",Slug:"nicaragua"},NL:{Country:"Netherlands",ISO2:"NL",Slug:"netherlands"},NO:{Country:"Norway",ISO2:"NO",Slug:"norway"},NP:{Country:"Nepal",ISO2:"NP",Slug:"nepal"},NR:{Country:"Nauru",ISO2:"NR",Slug:"nauru"},NU:{Country:"Niue",ISO2:"NU",Slug:"niue"},NZ:{Country:"New Zealand",ISO2:"NZ",Slug:"new-zealand"},OM:{Country:"Oman",ISO2:"OM",Slug:"oman"},PA:{Country:"Panama",ISO2:"PA",Slug:"panama"},PE:{Country:"Peru",ISO2:"PE",Slug:"peru"},PF:{Country:"French Polynesia",ISO2:"PF",Slug:"french-polynesia"},PG:{Country:"Papua New Guinea",ISO2:"PG",Slug:"papua-new-guinea"},PH:{Country:"Philippines",ISO2:"PH",Slug:"philippines"},PK:{Country:"Pakistan",ISO2:"PK",Slug:"pakistan"},PL:{Country:"Poland",ISO2:"PL",Slug:"poland"},PM:{Country:"Saint Pierre and Miquelon",ISO2:"PM",Slug:"saint-pierre-and-miquelon"},PN:{Country:"Pitcairn",ISO2:"PN",Slug:"pitcairn"},PR:{Country:"Puerto Rico",ISO2:"PR",Slug:"puerto-rico"},PS:{Country:"Palestinian Territory",ISO2:"PS",Slug:"palestine"},PT:{Country:"Portugal",ISO2:"PT",Slug:"portugal"},PW:{Country:"Palau",ISO2:"PW",Slug:"palau"},PY:{Country:"Paraguay",ISO2:"PY",Slug:"paraguay"},QA:{Country:"Qatar",ISO2:"QA",Slug:"qatar"},RE:{Country:"R\xe9union",ISO2:"RE",Slug:"r\xe9union"},RO:{Country:"Romania",ISO2:"RO",Slug:"romania"},RS:{Country:"Serbia",ISO2:"RS",Slug:"serbia"},RU:{Country:"Russian Federation",ISO2:"RU",Slug:"russia"},RW:{Country:"Rwanda",ISO2:"RW",Slug:"rwanda"},SA:{Country:"Saudi Arabia",ISO2:"SA",Slug:"saudi-arabia"},SB:{Country:"Solomon Islands",ISO2:"SB",Slug:"solomon-islands"},SC:{Country:"Seychelles",ISO2:"SC",Slug:"seychelles"},SD:{Country:"Sudan",ISO2:"SD",Slug:"sudan"},SE:{Country:"Sweden",ISO2:"SE",Slug:"sweden"},SG:{Country:"Singapore",ISO2:"SG",Slug:"singapore"},SH:{Country:"Saint Helena",ISO2:"SH",Slug:"saint-helena"},SI:{Country:"Slovenia",ISO2:"SI",Slug:"slovenia"},SJ:{Country:"Svalbard and Jan Mayen Islands",ISO2:"SJ",Slug:"svalbard-and-jan-mayen-islands"},SK:{Country:"Slovakia",ISO2:"SK",Slug:"slovakia"},SL:{Country:"Sierra Leone",ISO2:"SL",Slug:"sierra-leone"},SM:{Country:"San Marino",ISO2:"SM",Slug:"san-marino"},SN:{Country:"Senegal",ISO2:"SN",Slug:"senegal"},SO:{Country:"Somalia",ISO2:"SO",Slug:"somalia"},SR:{Country:"Suriname",ISO2:"SR",Slug:"suriname"},SS:{Country:"South Sudan",ISO2:"SS",Slug:"south-sudan"},ST:{Country:"Sao Tome and Principe",ISO2:"ST",Slug:"sao-tome-and-principe"},SV:{Country:"El Salvador",ISO2:"SV",Slug:"el-salvador"},SY:{Country:"Syrian Arab Republic (Syria)",ISO2:"SY",Slug:"syria"},SZ:{Country:"Swaziland",ISO2:"SZ",Slug:"swaziland"},TC:{Country:"Turks and Caicos Islands",ISO2:"TC",Slug:"turks-and-caicos-islands"},TD:{Country:"Chad",ISO2:"TD",Slug:"chad"},TF:{Country:"French Southern Territories",ISO2:"TF",Slug:"french-southern-territories"},TG:{Country:"Togo",ISO2:"TG",Slug:"togo"},TH:{Country:"Thailand",ISO2:"TH",Slug:"thailand"},TJ:{Country:"Tajikistan",ISO2:"TJ",Slug:"tajikistan"},TK:{Country:"Tokelau",ISO2:"TK",Slug:"tokelau"},TL:{Country:"Timor-Leste",ISO2:"TL",Slug:"timor-leste"},TM:{Country:"Turkmenistan",ISO2:"TM",Slug:"turkmenistan"},TN:{Country:"Tunisia",ISO2:"TN",Slug:"tunisia"},TO:{Country:"Tonga",ISO2:"TO",Slug:"tonga"},TR:{Country:"Turkey",ISO2:"TR",Slug:"turkey"},TT:{Country:"Trinidad and Tobago",ISO2:"TT",Slug:"trinidad-and-tobago"},TV:{Country:"Tuvalu",ISO2:"TV",Slug:"tuvalu"},TW:{Country:"Taiwan, Republic of China",ISO2:"TW",Slug:"taiwan"},TZ:{Country:"Tanzania, United Republic of",ISO2:"TZ",Slug:"tanzania"},UA:{Country:"Ukraine",ISO2:"UA",Slug:"ukraine"},UG:{Country:"Uganda",ISO2:"UG",Slug:"uganda"},UM:{Country:"US Minor Outlying Islands",ISO2:"UM",Slug:"us-minor-outlying-islands"},US:{Country:"United States of America",ISO2:"US",Slug:"united-states"},UY:{Country:"Uruguay",ISO2:"UY",Slug:"uruguay"},UZ:{Country:"Uzbekistan",ISO2:"UZ",Slug:"uzbekistan"},VA:{Country:"Holy See (Vatican City State)",ISO2:"VA",Slug:"holy-see-vatican-city-state"},VC:{Country:"Saint Vincent and Grenadines",ISO2:"VC",Slug:"saint-vincent-and-the-grenadines"},VE:{Country:"Venezuela (Bolivarian Republic)",ISO2:"VE",Slug:"venezuela"},VG:{Country:"British Virgin Islands",ISO2:"VG",Slug:"british-virgin-islands"},VI:{Country:"Virgin Islands, US",ISO2:"VI",Slug:"virgin-islands"},VN:{Country:"Viet Nam",ISO2:"VN",Slug:"vietnam"},VU:{Country:"Vanuatu",ISO2:"VU",Slug:"vanuatu"},WF:{Country:"Wallis and Futuna Islands",ISO2:"WF",Slug:"wallis-and-futuna-islands"},WS:{Country:"Samoa",ISO2:"WS",Slug:"samoa"},XK:{Country:"Republic of Kosovo",ISO2:"XK",Slug:"kosovo"},YE:{Country:"Yemen",ISO2:"YE",Slug:"yemen"},YT:{Country:"Mayotte",ISO2:"YT",Slug:"mayotte"},ZA:{Country:"South Africa",ISO2:"ZA",Slug:"south-africa"},ZM:{Country:"Zambia",ISO2:"ZM",Slug:"zambia"},ZW:{Country:"Zimbabwe",ISO2:"ZW",Slug:"zimbabwe"}},h=t(55),b=t(35),E=function(a){var n=Object(e.useContext)(I),t=(n.status,n.setStatus),u=n.country,o=n.setCountry;return r.a.createElement(h.a,{id:"dropdown-basic-button",variant:"secondary",size:"lg",title:m[u].Country,onSelect:function(a){t(c.Loading),o(a)}},Object.entries(m).map((function(a){var n=Object(y.a)(a,2),t=n[0],e=n[1];return r.a.createElement(b.a.Item,{key:t,eventKey:t},e.Country)})))},p=t(56),M=t(12),v=t(26),A=t.n(v),G=function(a){var n=a.data,t=n.dates,u=n.totalCasesStats,o=n.activeCasesStats,l=n.newCasesStats,S=Object(e.useState)({series:[{name:"Total cases",data:Object(M.a)(u)}],options:{chart:{type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},xaxis:{categories:Object(M.a)(t)}}}),i=Object(y.a)(S,2),s=i[0],g=(i[1],Object(e.useState)({series:[{name:"Active cases",data:Object(M.a)(o)}],options:{chart:{type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},xaxis:{categories:Object(M.a)(t)}}})),C=Object(y.a)(g,2),c=C[0],I=(C[1],Object(e.useState)({series:[{name:"New cases",data:Object(M.a)(l)}],options:{chart:{type:"bar",height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!0},xaxis:{categories:Object(M.a)(t)}}})),O=Object(y.a)(I,2),d=O[0];O[1];return r.a.createElement("div",{className:"text-center"},r.a.createElement("span",null,r.a.createElement("strong",null,"\u041e\u0431\u0449 \u0431\u0440\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0438:")),r.a.createElement(A.a,{options:s.options,series:s.series,type:"line",width:"100%"}),r.a.createElement("span",null,r.a.createElement("strong",null,"\u0410\u043a\u0442\u0438\u0432\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438")),r.a.createElement(A.a,{options:c.options,series:c.series,type:"line",width:"100%"}),r.a.createElement("span",null,r.a.createElement("strong",null,"\u041d\u043e\u0432\u0438 \u0441\u043b\u0443\u0447\u0430\u0438")),r.a.createElement(A.a,{options:d.options,series:d.series,type:"line",width:"100%"}))},B=function(a){return a.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g," ")},L=function(a){var n=a.data.Global;console.log(n);var t=n.TotalRecovered,e=n.TotalDeaths,u=n.TotalConfirmed,o=n.NewConfirmed,l=n.NewDeaths,S=n.NewRecovered,i=u-t-e,s=t+e,g=(e/s*100).toFixed(2);g=isFinite(g)?g:0;var C=(t/s*100).toFixed(2);return C=isFinite(C)?C:0,r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"secondary"},r.a.createElement(p.a.Heading,null,"\u041e\u0431\u0449 \u0431\u0440\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0438: ",B(u))),r.a.createElement(p.a,{variant:"primary"},r.a.createElement(p.a.Heading,null,"\u0410\u043a\u0442\u0438\u0432\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438: ",B(i))),r.a.createElement(p.a,{variant:"danger"},r.a.createElement(p.a.Heading,null,"\u041f\u043e\u0447\u0438\u043d\u0430\u043b\u0438: ",B(e)," (",g,"%)")),r.a.createElement(p.a,{variant:"success"},r.a.createElement(p.a.Heading,null,"\u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d\u0438: ",B(t)," (",C,"%)")),r.a.createElement("hr",null),r.a.createElement("h2",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0437\u0430 \u0434\u043d\u0435\u0441:"),r.a.createElement(p.a,{variant:"warning"},r.a.createElement(p.a.Heading,null,"\u041d\u043e\u0432\u0438 \u0441\u043b\u0443\u0447\u0430\u0438 \u0434\u043d\u0435\u0441: ",B(o))),r.a.createElement(p.a,{variant:"success"},r.a.createElement(p.a.Heading,null,"\u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d\u0438 \u0434\u043d\u0435\u0441: ",B(S))),r.a.createElement(p.a,{variant:"danger"},r.a.createElement(p.a.Heading,null,"\u041f\u043e\u0447\u0438\u043d\u0430\u043b\u0438 \u0434\u043d\u0435\u0441: ",B(l))))},T=function(a){var n=a.data,t=n[n.length-1].Active,e=n[n.length-1].Recovered,u=n[n.length-1].Deaths,o=n[n.length-1].Confirmed,l=e+u,S=(u/l*100).toFixed(2);S=isFinite(S)?S:0;var i=(e/l*100).toFixed(2);i=isFinite(i)?i:0;for(var s=n.length%20-1,g=[],C=[],y=[],c=[],I=s;I<n.length;I+=20){var O=n[I];g.push(new Date(O.Date).toLocaleDateString()),C.push(O.Confirmed),y.push(O.Active);for(var d=0,m=I-(s-1);m<I;m++){var h=n[m],b=n[m-1];d+=h.Confirmed-b.Confirmed}c.push(d)}var E={dates:g,totalCasesStats:C,activeCasesStats:y,newCasesStats:c};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"secondary"},r.a.createElement(p.a.Heading,null,"\u041e\u0431\u0449 \u0431\u0440\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0438: ",B(o))),r.a.createElement(p.a,{variant:"primary"},r.a.createElement(p.a.Heading,null,"\u0410\u043a\u0442\u0438\u0432\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438: ",B(t))),r.a.createElement(p.a,{variant:"danger"},r.a.createElement(p.a.Heading,null,"\u041f\u043e\u0447\u0438\u043d\u0430\u043b\u0438: ",B(u)," (",S,"%)")),r.a.createElement(p.a,{variant:"success"},r.a.createElement(p.a.Heading,null,"\u0418\u0437\u043b\u0435\u043a\u0443\u0432\u0430\u043d\u0438: ",B(e)," (",i,"%)")),r.a.createElement("hr",null),r.a.createElement(G,{data:E}))},f=function(a){var n=Object(e.useContext)(I),t=n.status,u=n.setStatus,o=n.country,l=n.countryData,S=n.setCountryData;return Object(e.useEffect)((function(){var a=m[o].Slug;"GLOBAL"===o?fetch("https://api.covid19api.com/summary").then((function(a){if(!a.ok)throw new Error("".concat(a.json()));return a.json()})).then((function(a){S(a),u(c.Loaded)})).catch((function(a){console.log(a),u(c.Error)})):fetch("https://api.covid19api.com/country/".concat(a)).then((function(a){if(!a.ok)throw new Error("".concat(a.json()));return a.json()})).then((function(a){S(a),u(c.Loaded)})).catch((function(a){console.log(a),u(c.Error)}))}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("br",null),t===c.Loading?r.a.createElement("h3",null,"Loading..."):null,t===c.Loaded?"GLOBAL"===o?r.a.createElement(L,{data:l}):r.a.createElement(T,{data:l}):null,t===c.Error?r.a.createElement("h3",null,"Error loading data!"):null)},N=function(){return r.a.createElement(O,null,r.a.createElement("div",{className:"container text-center"},r.a.createElement(d,null),r.a.createElement(f,null),r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));localStorage.getItem("country")||localStorage.setItem("country","BG"),o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.a6102969.chunk.js.map