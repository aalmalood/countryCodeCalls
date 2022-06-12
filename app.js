(function () {
    'use strict';
	var  countries = [ 
	{"name" : "Afghanistan", "short" : "AF", "code": "+93", "flag" : "Afghanistan" },
	{"name" : "Albania","short" : "AL",	"code" : "+355" , "flag" : "Albania" },
	{"name" : "Algeria", "short" : "DZ", "code" : "+213", "flag" : "Algeria" },
	{"name" : "American Samoa", "short" : "AS", "code" : "+1-684", "flag" : "American_Samoa" },
	{"name" : "Andorra", "short" : "AD", "code" : "+376", "flag" : "Andorra" },
	{"name" : "Angola", "short" : "AO", "code" : "+244", "flag" : "Angola" },
	{"name" : "Anguilla ", "short" : "AI", "code" : "+1-264", "flag" : "Anguilla" },
	{"name" : "Antarctica", "short" : "AQ", "code" : "+672", "flag" : "Antarctic" },
	{"name" : "Antigua and Barbuda", "short" : "AG", "code" : "+1-268", "flag" : "Antigua_and_Barbuda" },
	{"name" : "Argentina", "short" : "AR", "code" : "+54", "flag" : "Argentina" },
	{"name" : "Armenia", "short" : "AM", "code" : "+374", "flag" : "Armenia" },
	{"name" : "Aruba", "short" : "AW", "code" : "+297", "flag" : "Aruba" },
	{"name" : "Australia", "short" : "AU", "code" : "+61", "flag" : "Australia" },
	{"name" : "Austria", "short" : "AT", "code" : "+43", "flag" : "Austria" },
	{"name" : "Bahamas, Commonwealth of The Bahamas" , "short" : "BS" , "code" : "+1-242", "flag" : "the_Bahamas" },
	{"name" : "Bahrain, Kingdom of Bahrain" , "short" : "BH" , "code" : "+973", "flag" : "Bahrain" },
	{"name" : "Bangladesh" , "short" : "BD" , "code" : "+880", "flag" : "Bangladesh" },
	{"name" : "Barbados" , "short" : "BB" , "code" : "+1-246", "flag" : "Barbados" },
	{"name" : "Belarus" , "short" : "BY" , "code" : "+375", "flag" : "Belarus" },
	{"name" : "Azerbaijan or Azerbaidjan", "short" : "AZ", "code" : "+994", "flag" : "Azerbaijan" },
	{"name" : "Belgium" , "short" : "BE" , "code" : "+32", "flag" : "Belgium" },
	{"name" : "Belize" , "short" : "BZ" , "code" : "+501", "flag" : "Belize" },
	{"name" : "Benin" , "short" : "BJ" , "code" : "+229", "flag" : "Benin" },
	{"name" : "Bermuda" , "short" : "BM" , "code" : "+1-441", "flag" : "Bermuda" },
	{"name" : "Bhutan, Kingdom of Bhutan" , "short" : "BT" , "code" : "+975", "flag" : "Bhutan" },
	{"name" : "Bolivia" , "short" : "BO" , "code" : "+591", "flag" : "Bolivia" },
	{"name" : "Bosnia and Herzegovina" , "short" : "BA" , "code" : "+387", "flag" : "Bosnia_and_Herzegovina" },
	{"name" : "Botswana" , "short" : "BW" , "code" : "+267", "flag" : "Botswana" },
	{"name" : "Brazil" , "short" : "BR" , "code" : "+55", "flag" : "Brazil" },
	{"name" : "Brunei (Negara Brunei Darussalam)" , "short" : "BN" , "code" : "+673", "flag" : "Brunei" },
	{"name" : "Bulgaria" , "short" : "BG" , "code" : "+359", "flag" : "Bulgaria" },
	{"name" : "Burkina Faso (Former Upper Volta)" , "short" : "BF" , "code" : "+226", "flag" : "Burkina_Faso" },
	{"name" : "Burundi (Former Urundi)" , "short" : "BI" , "code" : "+257", "flag" : "Burundi" },
	{"name" : "Cambodia, Kingdom of Cambodia" , "short" : "KH" , "code" : "+855", "flag" : "Cambodia" },
	{"name" : "Cameroon" , "short" : "CM" , "code" : "+237", "flag" : "Cameroon" },
	{"name" : "Canada" , "short" : "CA" , "code" : "+1", "flag" : "Canada" },
	{"name" : "Cape Verde" , "short" : "CV" , "code" : "+238", "flag" : "Cape_Verde" },
	{"name" : "Cayman Islands" , "short" : "KY" , "code" : "+1-345", "flag" : "the_Cayman_Islands" },
	{"name" : "Central African Republic" , "short" : "CF" , "code" : "+236", "flag" : "the_Central_African_Republic" },
	{"name" : "Chad" , "short" : "TD" , "code" : "+235", "flag" : "Chad" },
	{"name" : "Chile" , "short" : "CL" , "code" : "+56", "flag" : "Chile" },
	{"name" : "China" , "short" : "CN" , "code" : "+86", "flag" : "China" },
	{"name" : "Christmas Island" , "short" : "CX" , "code" : "+53", "flag" : "Christmas_Island" },
	{"name" : "Cocos (Keeling) Islands" , "short" : "CC" , "code" : "+61", "flag" : "Cocos" },
	{"name" : "Colombia" , "short" : "CO" , "code" : "+57", "flag" : "Colombia" },
	{"name" : "Comoros, Union of the Comoros" , "short" : "KM" , "code" : "+269", "flag" : "the_Comoros" },
	{"name" : "Congo, Democratic Republic of the Congo(Former Zaire)" , "short" : "CD" , "code" : "+243", "flag" : "the_Democratic_Republic_of_the_Congo" },
	{"name" : "Congo, Republic of the Congo" , "short" : "CG" , "code" : "+242", "flag" : "the_Republic_of_the_Congo" },
	{"name" : "Cook Islands (Former Harvey Islands)" , "short" : "CK" , "code" : "+682", "flag" : "the_Cook_Islands" },
	{"name" : "Costa Rica" , "short" : "CR" , "code" : "+506", "flag" : "Costa_Rica" },
	{"name" : "Cote D'Ivoire (Former Ivory Coast)" , "short" : "CI" , "code" : "+225", "flag" : "Côte_d'Ivoire" },
	{"name" : "Croatia (Hrvatska)" , "short" : "HR" , "code" : "+385", "flag" : "Croatia" },
	{"name" : "Cuba" , "short" : "CU" , "code" : "+53", "flag" : "Cuba" },
	{"name" : "Cyprus" , "short" : "CY" , "code" : "+357", "flag" : "Cyprus" },
	{"name" : "Czech Republic" , "short" : "CZ" , "code" : "+420", "flag" : "the_Czech_Republic" },
	{"name" : "Denmark" , "short" : "DK" , "code" : "+45", "flag" : "Denmark" },
	{"name" : "Djibouti" , "code" : "DJ" , "code" : "+253", "flag" : "Djibouti" },
	{"name" : "Dominica" , "short" : "DM" , "code" : "+1-767", "flag" : "Dominica" },
	{"name" : "Dominican Republic" , "short" : "DO" , "code" : "+1-809 and +1-829  ", "flag" : "the_Dominican_Republic" },
	{"name" : "East Timor (Former Portuguese Timor)" , "short" : "TP" , "code" : "+670", "flag" : "East_Timor" },
	{"name" : "Ecuador" , "short" : "EC" , "code" : "+593 ", "flag" : "Ecuador" },
	{"name" : "Egypt" , "short" : "EG" , "code" : "+20", "flag" : "Egypt" },
	{"name" : "El Salvador" , "short" : "SV" , "code" : "+503", "flag" : "El_Salvador" },
	{"name" : "Equatorial Guinea (Former Spanish Guinea)" , "short" : "GQ" , "code" : "+240", "flag" : "Equatorial_Guinea" },
	{"name" : "Eritrea (Former Eritrea Autonomous Region in Ethiopia)" , "short" : "ER" , "code" : "+291", "flag" : "Eritrea" },
	{"name" : "Estonia" , "short" : "EE" , "code" : "+372", "flag" : "Estonia" },
	{"name" : "Ethiopia (Former Abyssinia, Italian East Africa)" , "short" : "ET" , "code" : "+251", "flag" : "Ethiopia" },
	{"name" : "Falkland Islands (Islas Malvinas)" , "short" : "FK" , "code" : "+500", "flag" : "the_Falkland_Islands" },
	{"name" : "Faroe Islands" , "short" : "FO" , "code" : "+298", "flag" : "the_Faroe_Islands" },
	{"name" : "Fiji" , "short" : "FJ" , "code" : "+679", "flag" : "Fiji" },
	{"name" : "Finland" , "short" : "FI" , "code" : "+358", "flag" : "Finland" },
	{"name" : "France" , "short" : "FR" , "code" : "+33", "flag" : "France" },
	{"name" : "French Guiana or French Guyana" , "short" : "GF" , "code" : "+594", "flag" : "French_Guiana" },
	{"name" : "French Polynesia" , "short" : "PF" , "code" : "+689", "flag" : "French_Polynesia" },
	{"name" : "Gabon (Gabonese Republic)" , "short" : "GA" , "code" : "+241", "flag" : "Gabon" },
	{"name" : "Gambia, The Gambia" , "short" : "GM" , "code" : "+220", "flag" : "The_Gambia" },
	{"name" : "Georgia (Former Georgian Soviet Socialist Republic)" , "short" : "GE" , "code" : "+995", "flag" : "Georgia" },
	{"name" : "Germany" , "short" : "DE" , "code" : "+49", "flag" : "Germany" },
	{"name" : "Ghana (Former Gold Coast)" , "short" : "GH" , "code" : "+233", "flag" : "Ghana" },
	{"name" : "Gibraltar" , "short" : "GI" , "code" : "+350", "flag" : "Gibraltar" },
	{"name" : "Greece" , "short" : "GR" , "code" : "+30", "flag" : "Greece" },
	{"name" : "Greenland" , "short" : "GL" , "code" : "+299", "flag" : "Greenland" },
	{"name" : "Grenada" , "short" : "GD" , "code" : "+1-473", "flag" : "Grenada" },
	{"name" : "Guadeloupe" , "short" : "GP" , "code" : "+590", "flag" : "France" },
	{"name" : "Guam" , "short" : "GU" , "code" : "+1-671", "flag" : "Guam" },
	{"name" : "Guatemala" , "short" : "GT" , "code" : "+502", "flag" : "Guatemala" },
	{"name" : "Guinea (Former French Guinea)" , "short" : "GN" , "code" : "+224", "flag" : "Guinea" },
	{"name" : "Guinea-Bissau (Former Portuguese Guinea)" , "short" : "GW" , "code" : "+245", "flag" : "Guinea-Bissau" },
	{"name" : "Guyana (Former British Guiana)" , "short" : "GY" , "code" : "+592", "flag" : "Guyana" },
	{"name" : "Haiti" , "short" : "HT" , "code" : "+509", "flag" : "Haiti" },
	{"name" : "Honduras" , "short" : "HN" , "code" : "+504", "flag" : "Honduras" },
	{"name" : "Hong Kong" , "short" : "HK" , "code" : "+852", "flag" : "Hong_Kong" },
	{"name" : "Hungary" , "short" : "HU" , "code" : "+36", "flag" : "Hungary" },
	{"name" : "Iceland" , "short" : "IS" , "code" : "+354", "flag" : "Iceland" },
	{"name" : "India" , "short" : "IN" , "code" : "+91", "flag" : "India" },
	{"name" : "Indonesia (Former Netherlands East Indies; Dutch East Indies)" , "short" : "ID" , "code" : "+62", "flag" : "Indonesia" },
	{"name" : "Iran, Islamic Republic of Iran" , "short" : "IR" , "code" : "+98", "flag" : "Iran" },
	{"name" : "Iraq" , "short" : "IQ" , "code" : "+964", "flag" : "Iraq" },
	{"name" : "Ireland" , "short" : "IE" , "code" : "+353", "flag" : "Ireland" },
	{"name" : "Italy" , "short" : "IT" , "code" : "+39", "flag" : "Italy" },
	{"name" : "Jamaica" , "short" : "JM" , "code" : "+1-876", "flag" : "Jamaica" },
	{"name" : "Japan" , "short" : "JP" , "code" : "+81", "flag" : "Japan" },
	{"name" : "Jordan (Former Transjordan)" , "short" : "JO" , "code" : "+962", "flag" : "Jordan" },
	{"name" : "Kazakhstan" , "short" : "KZ" , "code" : "+7", "flag" : "Kazakhstan" },
	{"name" : "Kenya (Former British East Africa)" , "short" : "KE" , "code" : "+254", "flag" : "Kenya" },
	{"name" : "Kiribati" , "short" : "KI" , "code" : "+686", "flag" : "Kiribati" },
	{"name" : "Korea, Democratic People's Republic of Korea (North Korea)" , "short" : "KP" , "code" : "+850", "flag" : "North_Korea" },
	{"name" : "Korea, Republic of Korea (South Korea)" , "short" : "KR" , "code" : "+82", "flag" : "South_Korea" },
	{"name" : "Kuwait" , "short" : "KW" , "code" : "+965", "flag" : "Kuwait" },
	{"name" : "Kyrgyzstan" , "short" : "KG" , "code" : "+996", "flag" : "Kyrgyzstan" },
	{"name" : "Lao People's Democratic Republic (Laos)" , "short" : "LA" , "code" : "+856", "flag" : "Laos" },
	{"name" : "Latvia (Former Latvian Soviet Socialist Republic)" , "short" : "LV" , "code" : "+371", "flag" : "Latvia" },
	{"name" : "Lebanon" , "short" : "LB" , "code" : "+961", "flag" : "Lebanon" },
	{"name" : "Lesotho (Former Basutoland)" , "short" : "LS" , "code" : "+266", "flag" : "Lesotho" },
	{"name" : "Liberia" , "short" : "LR" , "code" : "+231", "flag" : "Liberia" },
	{"name" : "Libya" , "short" : "LY" , "code" : "+218", "flag" : "Libya" },
	{"name" : "Liechtenstein" , "short" : "LI" , "code" : "+423", "flag" : "Liechtenstein" },
	{"name" : "Lithuania (Former Lithuanian Soviet Socialist Republic)" , "short" : "LT" , "code" : "+370", "flag" : "Lithuania" },
	{"name" : "Luxembourg" , "short" : "LU" , "code" : "+352", "flag" : "Luxembourg" },
	{"name" : "Macau" , "short" : "MO" , "code" : "+853", "flag" : "Macau" },
	{"name" : "Macedonia, The Former Yugoslav Republic of Macedonia" , "short" : "MK" , "code" : "+389", "flag" : "Macedonia" },
	{"name" : "Madagascar" , "short" : "MG" , "code" : "+261", "flag" : "Madagascar" },
	{"name" : "Malawi" , "short" : "MW" , "code" : "+265", "flag" : "Malawi" },
	{"name" : "Malaysia" , "short" : "MY" , "code" : "+60", "flag" : "Malaysia" },
	{"name" : "Maldives" , "short" : "MV" , "code" : "+960", "flag" : "Maldives" },
	{"name" : "Mali" , "short" : "ML" , "code" : "+223", "flag" : "Mali" },
	{"name" : "Malta" , "short" : "MT" , "code" : "+356", "flag" : "Malta" },
	{"name" : "Marshall Islands" , "short" : "MH" , "code" : "+692", "flag" : "the_Marshall_Islands" },
	{"name" : "Martinique (French)" , "short" : "MQ" , "code" : "+596", "flag" : "France" },
	{"name" : "Mauritania" , "short" : "MR" , "code" : "+222", "flag" : "Mauritania" },
	{"name" : "Mauritius" , "short" : "MU" , "code" : "+230", "flag" : "Mauritius" },
	{"name" : "Mayotte" , "short" : "YT" , "code" : "+269", "flag" : "France" },
	{"name" : "Mexico" , "short" : "MX" , "code" : "+52", "flag" : "Mexico" },
	{"name" : "Micronesia, Federated States of Micronesia" , "short" : "FM" , "code" : "+691", "flag" : "Micronesia" },
	{"name" : "Moldova, Republic of Moldova" , "short" : "MD" , "code" : "+373", "flag" : "Moldova" },
	{"name" : "Monaco, Principality of Monaco" , "short" : "MC" , "code" : "+377", "flag" : "Monaco" },
	{"name" : "Mongolia" , "short" : "MN" , "code" : "+976", "flag" : "Mongolia" },
	{"name" : "Montserrat" , "short" : "MS" , "code" : "+1-664", "flag" : "Montserrat" },
	{"name" : "Morocco" , "short" : "MA" , "code" : "+212", "flag" : "Morocco" },
	{"name" : "Mozambique (Former Portuguese East Africa)" , "short" : "MZ" , "code" : "+258", "flag" : "Mozambique" },
	{"name" : "Myanmar, Union of Myanmar (Former Burma)" , "short" : "MM" , "code" : "+95", "flag" : "Myanmar" },
	{"name" : "Namibia" , "short" : "NA" , "code" : "+264", "flag" : "Namibia" },
	{"name" : "Nauru (Former Pleasant Island)" , "short" : "NR" , "code" : "+674", "flag" : "Nauru" },
	{"name" : "Nepal" , "short" : "NP" , "code" : "+977", "flag" : "Nepal" },
	{"name" : "Netherlands" , "short" : "NL" , "code" : "+31", "flag" : "the_Netherlands" },
	{"name" : "Netherlands Antilles (Former Curacao and Dependencies)" , "short" : "AN" , "code" : "+599", "flag" : "the_Netherlands_Antilles" },
	{"name" : "New Caledonia" , "short" : "NC" , "code" : "+687", "flag" : "France" },
	{"name" : "New Zealand (Aotearoa)" , "short" : "NZ" , "code" : "+64", "flag" : "New_Zealand" },
	{"name" : "Nicaragua" , "short" : "NI" , "code" : "+505", "flag" : "Nicaragua" },
	{"name" : "Niger" , "short" : "NE" , "code" : "+227", "flag" : "Niger" },
	{"name" : "Nigeria" , "short" : "NG" , "code" : "+234", "flag" : "Nigeria" },
	{"name" : "Niue (Former Savage Island)" , "short" : "NU" , "code" : "+683", "flag" : "Niue" },
	{"name" : "Norfolk Island" , "short" : "NF" , "code" : "+672", "flag" : "Norfolk_Island" },
	{"name" : "Northern Mariana Islands" , "short" : "MP" , "code" : "+1-670", "flag" : "the_Northern_Mariana_Islands" },
	{"name" : "Norway" , "short" : "NO" , "code" : "+47", "flag" : "Norway" },
	{"name" : "Oman, Sultanate of Oman" , "short" : "OM" , "code" : "+968", "flag" : "Oman" },
	{"name" : "Pakistan (Former West Pakistan)" , "short" : "PK" , "code" : "+92", "flag" : "Pakistan" },
	{"name" : "Palau" , "short" : "PW" , "code" : "+680", "flag" : "Palau" },
	{"name" : "Palestinian State" , "short" : "PS" , "code" : "+970", "flag" : "Palestine" },
	{"name" : "Panama" , "short" : "PA" , "code" : "+507", "flag" : "Panama" },
	{"name" : "Papua New Guinea" , "short" : "PG" , "code" : "+675", "flag" : "Papua_New_Guinea" },
	{"name" : "Paraguay" , "short" : "PY" , "code" : "+595", "flag" : "Paraguay" },
	{"name" : "Peru" , "short" : "PE" , "code" : "+51", "flag" : "Peru" },
	{"name" : "Philippines" , "short" : "PH" , "code" : "+63", "flag" : "Philippines" },
	{"name" : "Poland" , "short" : "PL" , "code" : "+48", "flag" : "Poland" },
	{"name" : "Portugal" , "short" : "PT" , "code" : "+351", "flag" : "Portugal" },
	{"name" : "Puerto Rico" , "short" : "PR" , "code" : "+1-787 or +1-939", "flag" : "Puerto_Rico" },
	{"name" : "Qatar, State of Qatar" , "short" : "QA" , "code" : "+974 ", "flag" : "Qatar" },
	{"name" : "Reunion (French) (Former Bourbon Island)" , "code" : "RE" , "code" : "+262", "flag" : "France" },
	{"name" : "Romania" , "short" : "RO" , "code" : "+40", "flag" : "Romania" },
	{"name" : "Russian Federation" , "short" : "RU" , "code" : "+7", "flag" : "Russia" },
	{"name" : "Rwanda" , "short" : "RW" , "code" : "+250", "flag" : "Rwanda" },
	{"name" : "Saint Helena" , "short" : "SH" , "code" : "+290", "flag" : "Saint_Helena" },
	{"name" : "Saint Kitts and Nevis (Former Federation of Saint Christopher and Nevis)" , "short" : "KN" , "code" : "+1-869", "flag" : "Saint_Kitts_and_Nevis" },
	{"name" : "Saint Lucia" , "short" : "LC" , "code" : "+1-758", "flag" : "Saint_Lucia" },
	{"name" : "Saint Pierre and Miquelon" , "short" : "PM" , "code" : "+508", "flag" : "France" },
	{"name" : "Saint Vincent and the Grenadines" , "short" : "VC" , "code" : "+1-784", "flag" : "Saint_Vincent_and_the_Grenadines" },
	{"name" : "Samoa" , "short" : "WS" , "code" : "+685", "flag" : "Samoa" },
	{"name" : "San Marino" , "short" : "SM" , "code" : "+378", "flag" : "San_Marino" },
	{"name" : "Sao Tome and Principe" , "short" : "ST" , "code" : "+239", "flag" : "Sao_Tome_and_Principe" },
	{"name" : "Saudi Arabia" , "short" : "SA" , "code" : "+966", "flag" : "Saudi_Arabia" },
	{"name" : "Serbia, Republic of Serbia" , "short" : "RS" , "code" : "+381", "flag" : "Serbia" },
	{"name" : "Senegal" , "short" : "SN" , "code" : "+221", "flag" : "Senegal" },
	{"name" : "Seychelles" , "short" : "SC" , "code" : "+248", "flag" : "Seychelles" },
	{"name" : "Sierra Leone" , "short" : "SL" , "code" : "+232", "flag" : "Sierra_Leone" },
	{"name" : "Singapore" , "short" : "SG" , "code" : "+65", "flag" : "Singapore" },
	{"name" : "Slovakia" , "short" : "SK" , "code" : "+421", "flag" : "Slovakia" },
	{"name" : "Slovenia" , "short" : "SI" , "code" : "+386", "flag" : "Slovenia" },
	{"name" : "Solomon Islands (Former British Solomon Islands)" , "short" : "SB" , "code" : "+677", "flag" : "the_Solomon_Islands" },
	{"name" : "Somalia" , "short" : "SO" , "code" : "+252", "flag" : "Somalia" },
	{"name" : "South Africa" , "short" : "ZA" , "code" : "+27", "flag" : "South_Africa" },
	{"name" : "Spain" , "short" : "ES" , "code" : "+34", "flag" : "Spain" },
	{"name" : "Sri Lanka (Former Serendib, Ceylon)" , "short" : "LK" , "code" : "+94", "flag" : "Sri_Lanka" },
	{"name" : "Sudan (Former Anglo-Egyptian Sudan)" , "short" : "SD" , "code" : "+249", "flag" : "Sudan" },
	{"name" : "Suriname (Former Netherlands Guiana, Dutch Guiana)" , "short" : "SR" , "code" : "+597", "flag" : "Suriname" },
	{"name" : "Swaziland, Kingdom of Swaziland" , "short" : "SZ" , "code" : "+268", "flag" : "Swaziland" },
	{"name" : "Sweden" , "short" : "SE" , "code" : "+46", "flag" : "Sweden" },
	{"name" : "Switzerland" , "short" : "CH" , "code" : "+41", "flag" : "Switzerland" },
	{"name" : "Syria" , "short" : "SY" , "code" : "+963", "flag" : "Syria" },
	{"name" : "Taiwan" , "short" : "TW" , "code" : "+886", "flag" : "Taiwan" },
	{"name" : "Tajikistan" , "short" : "TJ" , "code" : "+992", "flag" : "Tajikistan" },
	{"name" : "Tanzania, United Republic of Tanzania" , "short" : "TZ" , "code" : "+255", "flag" : "Tanzania" },
	{"name" : "Thailand (Former Siam)" , "short" : "TH" , "code" : "+66", "flag" : "Thailand" },
	{"name" : "Togo (Former French Togoland)" , "short" : "TG" , "code" : "+228", "flag" : "Togo" },
	{"name" : "Tokelau" , "short" : "TK" , "code" : "+690", "flag" : "Tokelau" },
	{"name" : "Tonga, Kingdom of Tonga" , "short" : "TO" , "code" : "+676", "flag" : "Tonga" },
	{"name" : "Trinidad and Tobago" , "short" : "TT" , "code" : "+1-868", "flag" : "Trinidad_and_Tobago" },
	{"name" : "Tunisia" , "short" : "TN" , "code" : "+216", "flag" : "Tunisia" },
	{"name" : "Turkey" , "short" : "TR" , "code" : "+90", "flag" : "Turkey" },
	{"name" : "Turkmenistan" , "short" : "TM" , "code" : "+993", "flag" : "Turkmenistan" },
	{"name" : "Turks and Caicos Islands" , "short" : "TC" , "code" : "+1-649", "flag" : "the_Turks_and_Caicos_Islands" },
	{"name" : "Tuvalu" , "short" : "TV" , "code" : "+688", "flag" : "Tuvalu" },
	{"name" : "Uganda, Republic of Uganda" , "short" : "UG" , "code" : "+256", "flag" : "Uganda" },
	{"name" : "Ukraine" , "short" : "UA" , "code" : "+380", "flag" : "Ukraine" },
	{"name" : "United Arab Emirates (UAE)" , "short" : "AE" , "code" : "+971", "flag" : "the_United_Arab_Emirates" },
	{"name" : "United Kingdom (Great Britain / UK)" , "short" : "GB" , "code" : "+44", "flag" : "the_United_Kingdom" },
	{"name" : "United States of Amarica (USA)" , "short" : "US" , "code" : "+1", "flag" : "the_United_States" },
	{"name" : "Uruguay, Oriental Republic of Uruguay" , "short" : "UY" , "code" : "+598", "flag" : "Uruguay" },
	{"name" : "Uzbekistan" , "short" : "UZ" , "code" : "+998", "flag" : "Uzbekistan" },
	{"name" : "Vanuatu (Former New Hebrides)" , "short" : "VU" , "code" : "+678", "flag" : "Vanuatu" },
	{"name" : "Vatican City State (Holy See)" , "short" : "VA" , "code" : "+418", "flag" : "the_Vatican_City" },
	{"name" : "Venezuela" , "short" : "VE" , "code" : "+58", "flag" : "Venezuela" },
	{"name" : "Vietnam" , "short" : "VN" , "code" : "+84", "flag" : "Vietnam" },
	{"name" : "British Virgin Islands" , "short" : "VI" , "code" : "+1-284", "flag" : "the_British_Virgin_Islands" },
	{"name" : "United States Virgin Islands" , "short" : "VQ" , "code" : "+1-340", "flag" : "the_United_States_Virgin_Islands" },
	{"name" : "Wallis and Futuna Islands" , "short" : "WF" , "code" : "+681", "flag" : "France" },
	{"name" : "Yemen" , "short" : "YE" , "code" : "+967", "flag" : "Yemen" },
	{"name" : "Zambia, Republic of Zambia" , "short" : "ZM" , "code" : "+260", "flag" : "Zambia" },
	{"name" : "Zimbabwe, Republic of Zimbabwe" , "short" : "ZW" , "code" : "+263", "flag" : "Zimbabwe" }
	 ];


    
    angular.module('CountryCall', [])
    .controller('CountryController', CountryController);
    
    function CountryController($scope) {
	  $scope.countries = countries ;
    }
    
     })();
