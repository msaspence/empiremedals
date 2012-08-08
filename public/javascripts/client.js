table = $('<table/>');
table_head = $("<thead><tr><th>Country</th><th>Gold</th><th>Silver</th><th>Bronze</th><th>Total</th></tr></thead>");
table_body = $('<tbody/>');
table.append(table_head);
table.append(table_body);
$(function() {
  $('body').html(table);
});

var codes = {
  AHO: {
    name: "Netherlands Antilles",
    empire: false
  },
  IOA: {
    name: "Individual Olympic Athletes",
    empire: false
  },
  AFG: {
    name: "Afghanistan",
    empire: true
  },
  ALB: {
    name: "Albania",
    empire: false
  },
  ALG: {
    name: "Algeria",
    empire: false
  },
  ASA: {
    name: "American Samoa*",
    empire: false
  },
  AND: {
    name: "Andorra",
    empire: false
  },
  ANG: {
    name: "Angola",
    empire: false
  },
  ANT: {
    name: "Antigua and Barbuda",
    empire: false
  },
  ARG: {
    name: "Argentina",
    empire: false
  },
  ARM: {
    name: "Armenia",
    empire: false
  },
  ARU: {
    name: "Aruba*",
    empire: false
  },
  AUS: {
    name: "Australia",
    empire: true
  },
  AUT: {
    name: "Austria",
    empire: true
  },
  AZE: {
    name: "Azerbaijan",
    empire: false
  },
  BAH: {
    name: "The Bahamas",
    empire: true
  },
  BRN: {
    name: "Bahrain",
    empire: true
  },
  BAN: {
    name: "Bangladesh",
    empire: false
  },
  BAR: {
    name: "Barbados",
    empire: true
  },
  BLR: {
    name: "Belarus",
    empire: false
  },
  BEL: {
    name: "Belgium",
    empire: false
  },
  BIZ: {
    name: "Belize",
    empire: true
  },
  BER: {
    name: "Bermuda",
    empire: true
  },
  BEN: {
    name: "Benin",
    empire: false
  },
  BHU: {
    name: "Bhutan",
    empire: false
  },
  BOL: {
    name: "Bolivia",
    empire: false
  },
  BIH: {
    name: "Bosnia and Herzegovina",
    empire: false
  },
  BOT: {
    name: "Botswana",
    empire: true
  },
  BRA: {
    name: "Brazil",
    empire: false
  },
  IVB: {
    name: "British Virgin Islands*",
    empire: false
  },
  BRU: {
    name: "Brunei",
    empire: true
  },
  BUL: {
    name: "Bulgaria",
    empire: false
  },
  BUR: {
    name: "Burkina Faso",
    empire: false
  },
  BDI: {
    name: "Burundi",
    empire: false
  },
  CAM: {
    name: "Cambodia",
    empire: false
  },
  CMR: {
    name: "Cameroon",
    empire: true
  },
  CAN: {
    name: "Canada",
    empire: true
  },
  CPV: {
    name: "Cape Verde",
    empire: false
  },
  CAY: {
    name: "Cayman Islands",
    empire: true
  },
  CAF: {
    name: "Central African Republic",
    empire: false
  },
  CHA: {
    name: "Chad",
    empire: false
  },
  CHI: {
    name: "Chile",
    empire: false
  },
  CHN: {
    name: "China",
    empire: false
  },
  COL: {
    name: "Colombia",
    empire: false
  },
  COM: {
    name: "Comoros",
    empire: false
  },
  CGO: {
    name: "Congo, Republic of the",
    empire: false
  },
  COD: {
    name: "Congo, Democratic Republic of the",
    empire: false
  },
  COK: {
    name: "Cook Islands",
    empire: true
  },
  CRC: {
    name: "Costa Rica",
    empire: false
  },
  CIV: {
    name: "Cote d'Ivoire",
    empire: false
  },
  CRO: {
    name: "Croatia",
    empire: false
  },
  CUB: {
    name: "Cuba",
    empire: false
  },
  CYP: {
    name: "Cyprus",
    empire: true
  },
  CZE: {
    name: "Czech Republic",
    empire: false
  },
  DEN: {
    name: "Denmark",
    empire: false
  },
  DJI: {
    name: "Djibouti",
    empire: false
  },
  DMA: {
    name: "Dominica",
    empire: false
  },
  DOM: {
    name: "Dominican Republic",
    empire: false
  },
  TLS: {
    name: "East Timor (Timor-Leste)",
    empire: false
  },
  ECU: {
    name: "Ecuador",
    empire: false
  },
  EGY: {
    name: "Egypt",
    empire: false
  },
  ESA: {
    name: "El Salvador",
    empire: false
  },
  GEQ: {
    name: "Equatorial Guinea",
    empire: false
  },
  ERI: {
    name: "Eritrea",
    empire: false
  },
  EST: {
    name: "Estonia",
    empire: false
  },
  ETH: {
    name: "Ethiopia",
    empire: false
  },
  FIJ: {
    name: "Fiji",
    empire: true
  },
  FIN: {
    name: "Finland",
    empire: false
  },
  FRA: {
    name: "France",
    empire: false
  },
  GAB: {
    name: "Gabon",
    empire: false
  },
  GAM: {
    name: "The Gambia",
    empire: true
  },
  GEO: {
    name: "Georgia",
    empire: false
  },
  GER: {
    name: "Germany",
    empire: false
  },
  GHA: {
    name: "Ghana",
    empire: true
  },
  GRE: {
    name: "Greece",
    empire: false
  },
  GRN: {
    name: "Grenada",
    empire: true
  },
  GUM: {
    name: "Guam",
    empire: false
  },
  GUA: {
    name: "Guatemala",
    empire: false
  },
  GUI: {
    name: "Guinea",
    empire: false
  },
  GBS: {
    name: "Guinea-Bissau",
    empire: false
  },
  GUY: {
    name: "Guyana",
    empire: true
  },
  HAI: {
    name: "Haiti",
    empire: false
  },
  HON: {
    name: "Honduras",
    empire: false
  },
  HKG: {
    name: "Hong Kong",
    empire: true
  },
  HUN: {
    name: "Hungary",
    empire: false
  },
  ISL: {
    name: "Iceland",
    empire: false
  },
  IND: {
    name: "India",
    empire: true
  },
  INA: {
    name: "Indonesia",
    empire: false
  },
  IRI: {
    name: "Iran",
    empire: false
  },
  IRQ: {
    name: "Iraq",
    empire: false
  },
  IRL: {
    name: "Ireland",
    empire: false
  },
  ISR: {
    name: "Israel",
    empire: false
  },
  ITA: {
    name: "Italy",
    empire: false
  },
  JAM: {
    name: "Jamaica",
    empire: true
  },
  JPN: {
    name: "Japan",
    empire: false
  },
  JOR: {
    name: "Jordan",
    empire: false
  },
  KAZ: {
    name: "Kazakhstan",
    empire: false
  },
  KEN: {
    name: "Kenya",
    empire: true
  },
  KIR: {
    name: "Kiribati",
    empire: false
  },
  PRK: {
    name: "Korea, North",
    empire: false
  },
  KOR: {
    name: "Korea, South",
    empire: false
  },
  KUW: {
    name: "Kuwait",
    empire: true
  },
  KGZ: {
    name: "Kyrgyzstan",
    empire: false
  },
  LAO: {
    name: "Laos",
    empire: false
  },
  LAT: {
    name: "Latvia",
    empire: false
  },
  LIB: {
    name: "Lebanon",
    empire: false
  },
  LES: {
    name: "Lesotho",
    empire: true
  },
  LBR: {
    name: "Liberia",
    empire: false
  },
  LBA: {
    name: "Libya",
    empire: false
  },
  LIE: {
    name: "Liechtenstein",
    empire: false
  },
  LTU: {
    name: "Lithuania",
    empire: false
  },
  LUX: {
    name: "Luxembourg",
    empire: false
  },
  MKD:{
    name: "Macedonia",
      empire: false
    },
  MAD: {
    name: "Madagascar",
    empire: false
  },
  MAW: {
    name: "Malawi",
    empire: true
  },
  MAS: {
    name: "Malaysia",
    empire: true
  },
  MDV: {
    name: "Maldives",
    empire: true
  },
  MLI: {
    name: "Mali",
    empire: false
  },
  MLT: {
    name: "Malta",
    empire: true
  },
  MHL: {
    name: "Marshall Islands",
    empire: false
  },
  MTN: {
    name: "Mauritania",
    empire: false
  },
  MRI: {
    name: "Mauritius",
    empire: true
  },
  MEX: {
    name: "Mexico",
    empire: false
  },
  FSM: {
    name: "Federated States of Micronesia",
    empire: false
  },
  MDA: {
    name: "Moldova",
    empire: false
  },
  MON: {
    name: "Monaco",
    empire: false
  },
  MGL: {
    name: "Mongolia",
    empire: false
  },
  MNE: {
    name: "Montenegro",
    empire: false
  },
  MAR: {
    name: "Morocco",
    empire: false
  },
  MOZ: {
    name: "Mozambique",
    empire: false
  },
  MYA: {
    name: "Myanmar (Burma)",
    empire: false
  },
  NAM: {
    name: "Namibia",
    empire: false
  },
  NRU: {
    name: "Nauru",
    empire: false
  },
  NEP: {
    name: "Nepal",
    empire: false
  },
  NED: {
    name: "Netherlands",
    empire: false
  },
  NZL: {
    name: "New Zealand",
    empire: true
  },
  NCA: {
    name: "Nicaragua",
    empire: false
  },
  NIG: {
    name: "Niger",
    empire: false
  },
  NGR: {
    name: "Nigeria",
    empire: true
  },
  NOR: {
    name: "Norway",
    empire: false
  },
  OMA: {
    name: "Oman",
    empire: false
  },
  PAK: {
    name: "Pakistan",
    empire: false
  },
  PLW: {
    name: "Palau",
    empire: false
  },
  PLE: {
    name: "Palestine*",
    empire: false
  },
  PAN: {
    name: "Panama",
    empire: false
  },
  PNG: {
    name: "Papua New Guinea",
    empire: true
  },
  PAR: {
    name: "Paraguay",
    empire: false
  },
  PER: {
    name: "Peru",
    empire: false
  },
  PHI: {
    name: "Philippines",
    empire: false
  },
  POL: {
    name: "Poland",
    empire: false
  },
  POR: {
    name: "Portugal",
    empire: false
  },
  PUR: {
    name: "Puerto Rico*",
    empire: false
  },
  QAT: {
    name: "Qatar",
    empire: false
  },
  ROU: {
    name: "Romania",
    empire: false
  },
  RUS: {
    name: "Russian Federation",
    empire: false
  },
  RWA: {
    name: "Rwanda",
    empire: false
  },
  SKN: {
    name: "Saint Kitts and Nevis",
    empire: false
  },
  LCA: {
    name: "Saint Lucia",
    empire: true
  },
  VIN: {
    name: "Saint Vincent and the Grenadines",
    empire: true
  },
  SAM: {
    name: "Samoa",
    empire: true
  },
  SMR: {
    name: "San Marino",
    empire: false
  },
  STP: {
    name: "Sao Tome and Principe",
    empire: false
  },
  KSA: {
    name: "Saudi Arabia",
    empire: false
  },
  SEN: {
    name: "Senegal",
    empire: false
  },
  SRB: {
    name: "Serbia",
    empire: false
  },
  SEY: {
    name: "Seychelles",
    empire: true
  },
  SLE: {
    name: "Sierra Leone",
    empire: true
  },
  SIN: {
    name: "Singapore",
    empire: true
  },
  SVK: {
    name: "Slovakia",
    empire: false
  },
  SLO: {
    name: "Slovenia",
    empire: false
  },
  SOL: {
    name: "Solomon Islands",
    empire: false
  },
  SOM: {
    name: "Somalia",
    empire: true
  },
  RSA: {
    name: "South Africa",
    empire: true
  },
  ESP: {
    name: "Spain",
    empire: false
  },
  SRI: {
    name: "Sri Lanka",
    empire: true
  },
  SUD: {
    name: "Sudan",
    empire: true
  },
  SUR: {
    name: "Suriname",
    empire: false
  },
  SWZ: {
    name: "Swaziland",
    empire: false
  },
  SWE: {
    name: "Sweden",
    empire: false
  },
  SUI: {
    name: "Switzerland",
    empire: false
  },
  SYR: {
    name: "Syria",
    empire: false
  },
  TPE: {
    name: "Taiwan (Chinese Taipei)",
    empire: false
  },
  TJK: {
    name: "Tajikistan",
    empire: false
  },
  TAN: {
    name: "Tanzania",
    empire: true
  },
  THA: {
    name: "Thailand",
    empire: false
  },
  TOG: {
    name: "Togo",
    empire: false
  },
  TGA: {
    name: "Tonga",
    empire: false
  },
  TRI: {
    name: "Trinidad and Tobago",
    empire: true
  },
  TUN: {
    name: "Tunisia",
    empire: false
  },
  TUR: {
    name: "Turkey",
    empire: false
  },
  TKM: {
    name: "Turkmenistan",
    empire: false
  },
  TUV: {
    name: "Tuvalu",
    empire: false
  },
  UGA: {
    name: "Uganda",
    empire: true
  },
  UKR: {
    name: "Ukraine",
    empire: false
  },
  UAE: {
    name: "United Arab Emirates",
    empire: true
  },
  GBR: {
    name: "United Kingdom (Great Britain)",
    empire: true
  },
  USA: {
    name: "United States",
    empire: false
  },
  URU: {
    name: "Uruguay",
    empire: false
  },
  UZB: {
    name: "Uzbekistan",
    empire: false
  },
  VAN: {
    name: "Vanuatu",
    empire: false
  },
  VEN: {
    name: "Venezuela",
    empire: false
  },
  VIE: {
    name: "Vietnam",
    empire: false
  },
  ISV: {
    name: "Virgin Islands*",
    empire: false
  },
  YEM: {
    name: "Yemen",
    empire: true
  },
  ZAM: {
    name: "Zambia",
    empire: false
  },
  ZIM: {
    name: "Zimbabwe",
    empire: true
  },
  EMP: {
    name: "British Empire",
    empire: false
  }
};

socket = io.connect('/');
socket.on('standings',function(data) {
  table_body.html("");
  var medals = [];
  $.each(data["medals"],function(key,value) {
    value = value[0];
    medals.push({
      code: key,
      total: parseInt(value.total),
      gold: parseInt(value.gold),
      silver: parseInt(value.silver),
      bronze: parseInt(value.bronze)
    });
  });

  empire = {
    code: "EMP",
    total: 0,
    gold: 0,
    silver: 0,
    bronze: 0
  };

  if (medals !== null) {
    $.each(medals,function(key,value) {
      row = $('<tr/>');
      if (codes[value.code] !== undefined) {
        row.append("<td>"+codes[value.code].name+"</td>");
        if (codes[value.code].empire) {
          empire.gold += value.gold;
          empire.silver += value.silver;
          empire.bronze += value.bronze;
          empire.total += value.total;
        }
      }
    });
  }
  medals.push(empire);

  medals.sort(function(a,b) {
    return b.gold - a.gold;
  });

  if (medals !== null) {
    $.each(medals,function(key,value) {
      row = $('<tr/>');
      if (codes[value.code] !== undefined) {
        row.append("<td>"+codes[value.code].name+"</td>");
        if (codes[value.code].empire) {
          row.css("background","pink");
        } else if (value.code == "EMP") {
          row.css("background","red");
          row.css('color','white');
        }
      } else {
        row.append("<td>"+value.code+"</td>");
      }
      row.append("<td>"+value.gold+"</td>");
      row.append("<td>"+value.silver+"</td>");
      row.append("<td>"+value.bronze+"</td>");
      row.append("<td>"+value.total+"</td>");
      table_body.append(row);
    });
  }
});