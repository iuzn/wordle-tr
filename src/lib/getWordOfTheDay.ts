import { answers } from '../words'

export function getWordOfTheDay () {
  if (import.meta.env.DEV) {
    console.log('DEV: MERAK doğru cevap')
    return { answer: 'merak', answerDay: 1 }
  }
const numbers=[
  618,
  103,
  865,
  1069,
  1286,
  207,
  1298,
  362,
  1395,
  957,
  847,
  1656,
  128,
  1531,
  1218,
  53,
  1623,
  1170,
  531,
  934,
  1270,
  742,
  925,
  164,
  330,
  951,
  988,
  1178,
  503,
  279,
  199,
  1469,
  1582,
  155,
  286,
  151,
  801,
  1463,
  654,
  106,
  474,
  144,
  14,
  1591,
  1183,
  1308,
  163,
  525,
  130,
  79,
  950,
  1026,
  313,
  738,
  1195,
  621,
  30,
  1557,
  229,
  1028,
  737,
  303,
  116,
  584,
  919,
  1143,
  678,
  665,
  1565,
  1581,
  1297,
  48,
  493,
  23,
  1391,
  974,
  675,
  785,
  24,
  529,
  628,
  1497,
  8,
  114,
  897,
  444,
  56,
  137,
  75,
  676,
  314,
  804,
  1169,
  129,
  696,
  455,
  364,
  301,
  1063,
  1008,
  1146,
  1196,
  1082,
  917,
  1255,
  235,
  275,
  909,
  720,
  138,
  1318,
  716,
  501,
  1311,
  813,
  1094,
  161,
  1445,
  1530,
  981,
  960,
  1480,
  1320,
  573,
  158,
  295,
  704,
  782,
  374,
  1467,
  776,
  499,
  523,
  724,
  1612,
  906,
  1191,
  963,
  298,
  352,
  363,
  698,
  1075,
  475,
  1277,
  1276,
  943,
  1134,
  205,
  297,
  1393,
  1659,
  648,
  1569,
  1305,
  664,
  1165,
  203,
  1490,
  812,
  1579,
  1543,
  166,
  582,
  459,
  924,
  359,
  1216,
  1209,
  317,
  1411,
  1526,
  38,
  1163,
  750,
  580,
  862,
  966,
  1175,
  1334,
  991,
  1031,
  469,
  123,
  1562,
  1561,
  567,
  973,
  194,
  902,
  5,
  1086,
  1594,
  1267,
  139,
  305,
  1372,
  1006,
  766,
  1535,
  868,
  1549,
  1228,
  535,
  577,
  241,
  247,
  537,
  1164,
  1123,
  1172,
  505,
  1369,
  1016,
  561,
  1235,
  1188,
  699,
  1150,
  898,
  606,
  105,
  83,
  1160,
  299,
  697,
  1292,
  634,
  811,
  380,
  1451,
  842,
  191,
  1568,
  1236,
  1638,
  941,
  260,
  786,
  1215,
  1501,
  1072,
  980,
  821,
  949,
  1140,
  1242,
  923,
  958,
  1060,
  1503,
  1225,
  245,
  911,
  762,
  1237,
  1251,
  519,
  1441,
  280,
  735,
  845,
  779,
  25,
  150,
  883,
  741,
  732,
  508,
  683,
  183,
  538,
  985,
  1362,
  287,
  871,
  1419,
  1112,
  765,
  1192,
  507,
  1207,
  45,
  88,
  1653,
  1088,
  324,
  162,
  884,
  154,
  1383,
  425,
  1438,
  61,
  1247,
  1257,
  1051,
  545,
  504,
  1328,
  701,
  717,
  1176,
  365,
  1097,
  605,
  285,
  586,
  1611,
  598,
  1486,
  1221,
  918,
  1168,
  74,
  792,
  478,
  93,
  1200,
  1227,
  180,
  961,
  187,
  1495,
  441,
  148,
  585,
  35,
  348,
  472,
  1476,
  98,
  1418,
  265,
  393,
  210,
  775,
  1496,
  1302,
  304,
  1329,
  887,
  188,
  55,
  263,
  1430,
  947,
  71,
  421,
  198,
  143,
  756,
  814,
  1487,
  215,
  839,
  1558,
  1455,
  1645,
  1287,
  266,
  1468,
  449,
  920,
  1263,
  246,
  222,
  668,
  1122,
  910,
  157,
  292,
  935,
  575,
  1280,
  1001,
  1295,
  588,
  570,
  783,
  1404,
  142,
  291,
  1322,
  9,
  611,
  87,
  424,
  1637,
  39,
  486,
  516,
  118,
  1064,
  1349,
  1155,
  1239,
  487,
  603,
  1030,
  1019,
  436,
  885,
  937,
  1260,
  1038,
  1629,
  1576,
  1431,
  1127,
  616,
  500,
  1511,
  149,
  1640,
  736,
  1364,
  551,
  1107,
  544,
  344,
  655,
  466,
  663,
  1213,
  211,
  224,
  752,
  671,
  1186,
  361,
  711,
  1344,
  1013,
  1315,
  1210,
  1505,
  667,
  1603,
  1264,
  761,
  891,
  770,
  1370,
  276,
  938,
  1379,
  1498,
  889,
  1007,
  993,
  168,
  10,
  1092,
  1341,
  19,
  170,
  420,
  643,
  346,
  527,
  754,
  1151,
  249,
  1472,
  1620,
  542,
  390,
  778,
  1360,
  315,
  476,
  967,
  1366,
  837,
  849,
  1509,
  874,
  547,
  1067,
  666,
  405,
  256,
  1606,
  928,
  506,
  971,
  1376,
  569,
  209,
  453,
  520,
  659,
  159,
  226,
  195,
  633,
  682,
  827,
  1624,
  1120,
  1294,
  254,
  311,
  730,
  225,
  387,
  27,
  908,
  975,
  136,
  1390,
  1161,
  386,
  1307,
  253,
  67,
  1326,
  751,
  1189,
  589,
  946,
  234,
  939,
  833,
  510,
  1361,
  408,
  1125,
  1380,
  1036,
  1504,
  404,
  1610,
  1412,
  1417,
  339,
  1301,
  470,
  600,
  1460,
  1173,
  1630,
  1027,
  269,
  1435,
  989,
  59,
  1600,
  990,
  1448,
  986,
  1519,
  1232,
  1076,
  1087,
  1436,
  921,
  767,
  13,
  200,
  1339,
  809,
  828,
  1545,
  341,
  396,
  592,
  1401,
  797,
  1447,
  984,
  1527,
  16,
  1474,
  700,
  953,
  231,
  1636,
  1099,
  1410,
  1084,
  1454,
  1137,
  844,
  1471,
  293,
  1572,
  684,
  705,
  1118,
  107,
  413,
  402,
  410,
  727,
  888,
  274,
  57,
  1156,
  262,
  1462,
  369,
  1046,
  440,
  7,
  1243,
  1614,
  1197,
  172,
  722,
  223,
  1130,
  1518,
  608,
  936,
  815,
  1074,
  321,
  658,
  1484,
  141,
  713,
  1185,
  1119,
  642,
  759,
  1432,
  338,
  283,
  442,
  916,
  964,
  89,
  28,
  204,
  1627,
  473,
  1077,
  1274,
  1000,
  243,
  915,
  1427,
  970,
  1217,
  1049,
  1204,
  77,
  1317,
  429,
  309,
  1009,
  1293,
  467,
  1546,
  232,
  597,
  595,
  349,
  277,
  206,
  1167,
  952,
  1115,
  1500,
  1281,
  578,
  465,
  1056,
  1478,
  1499,
  70,
  1089,
  1245,
  822,
  1428,
  201,
  1174,
  1057,
  571,
  823,
  688,
  1340,
  51,
  383,
  591,
  1515,
  1608,
  1442,
  1456,
  1477,
  1387,
  101,
  1208,
  334,
  1081,
  983,
  1555,
  1066,
  415,
  1378,
  1453,
  944,
  119,
  1536,
  1616,
  1187,
  1631,
  1464,
  1475,
  641,
  190,
  401,
  1047,
  532,
  302,
  385,
  998,
  594,
  1384,
  31,
  1353,
  733,
  1139,
  1012,
  29,
  574,
  601,
  54,
  755,
  40,
  857,
  617,
  319,
  322,
  1330,
  907,
  428,
  1567,
  1394,
  388,
  876,
  1078,
  524,
  112,
  66,
  68,
  1386,
  484,
  1403,
  443,
  1502,
  1306,
  1333,
  289,
  81,
  764,
  1159,
  181,
  555,
  1258,
  773,
  1324,
  1152,
  1658,
  639,
  208,
  213,
  1440,
  627,
  1352,
  610,
  1642,
  954,
  382,
  4,
  1080,
  824,
  126,
  723,
  353,
  728,
  802,
  515,
  1248,
  1433,
  63,
  838,
  115,
  997,
  1547,
  511,
  1166,
  1266,
  1154,
  685,
  1104,
  831,
  1180,
  1409,
  1488,
  1414,
  394,
  1299,
  796,
  193,
  609,
  1147,
  1061,
  933,
  438,
  930,
  490,
  1506,
  42,
  817,
  1233,
  1408,
  1373,
  489,
  1083,
  1272,
  290,
  1214,
  1596,
  743,
  1528,
  186,
  851,
  914,
  968,
  288,
  1128,
  1542,
  1282,
  1116,
  1003,
  252,
  977,
  852,
  789,
  650,
  1461,
  1554,
  240,
  1070,
  1304,
  1586,
  1588,
  913,
  160,
  351,
  1296,
  550,
  1397,
  333,
  672,
  579,
  373,
  715,
  483,
  670,
  1429,
  258,
  1512,
  454,
  680,
  1285,
  721,
  657,
  694,
  1564,
  379,
  464,
  1121,
  622,
  853,
  294,
  1525,
  384,
  1250,
  264,
  900,
  790,
  1234,
  127,
  526,
  1229,
  1532,
  1450,
  976,
  1420,
  536,
  1029,
  1014,
  1138,
  557,
  994,
  620,
  1109,
  456,
  354,
  1457,
  912,
  1145,
  1426,
  95,
  316,
  858,
  358,
  270,
  1018,
  1275,
  400,
  1045,
  877,
  1230,
  463,
  96,
  1100,
  1522,
  1129,
  1382,
  1256,
  1043,
  528,
  1044,
  108,
  65,
  1541,
  899,
  273,
  576,
  182,
  726,
  318,
  1181,
  1211,
  221,
  629,
  1291,
  1096,
  26,
  76,
  1316,
  196,
  1342,
  1574,
  471,
  230,
  185,
  1205,
  893,
  329,
  11,
  1363,
  1148,
  1259,
  1327,
  239,
  1052,
  1571,
  1337,
  50,
  674,
  37,
  1437,
  927,
  1485,
  867,
  244,
  745,
  873,
  768,
  861,
  1101,
  22,
  1439,
  581,
  307,
  375,
  312,
  427,
  479,
  763,
  1106,
  747,
  593,
  175,
  1343,
  1206,
  1473,
  72,
  1514,
  1589,
  1524,
  882,
  1649,
  892,
  482,
  645,
  147,
  725,
  1459,
  626,
  242,
  859,
  1493,
  895,
  1465,
  1313,
  1265,
  619,
  820,
  1133,
  638,
  1253,
  1246,
  1405,
  1309,
  1157,
  607,
  703,
  856,
  1583,
  1347,
  1356,
  113,
  1479,
  296,
  1303,
  6,
  1655,
  80,
  521,
  282,
  134,
  566,
  1224,
  1312,
  1413,
  214,
  125,
  1452,
  1041,
  202,
  84,
  596,
  228,
  33,
  120,
  1244,
  412,
  153,
  197,
  1585,
  599,
  371,
  416,
  140,
  1355,
  558,
  308,
  492,
  1377,
  978,
  331,
  1002,
  1037,
  1098,
  1648,
  1223,
  1434,
  624,
  2,
  615,
  692,
  795,
  739,
  788,
  757,
  691,
  1400,
  539,
  999,
  1283,
  238,
  996,
  378,
  1182,
  903,
  625,
  1566,
  870,
  452,
  1644,
  1407,
  100,
  855,
  102,
  3,
  1085,
  901,
  979,
  548,
  932,
  718,
  774,
  1548,
  481,
  1,
  1657,
  212,
  1022,
  1110,
  572,
  816,
  62,
  1580,
  1466,
  1136,
  1135,
  399,
  91,
  272,
  1604,
  1489,
  995,
  1162,
  744,
  563,
  1517,
  1371,
  1643,
  1388,
  431,
  1032,
  1273,
  1111,
  810,
  712,
  1023,
  1202,
  1198,
  1516,
  261,
  549,
  457,
  669,
  278,
  940,
  509,
  866,
  1193,
  1368,
  357,
  896,
  1617,
  1059,
  1533,
  132,
  1201,
  171,
  564,
  216,
  109,
  649,
  1551,
  94,
  1622,
  73,
  1634,
  848,
  1126,
  948,
  1559,
  133,
  800,
  651,
  793,
  491,
  1300,
  310,
  922,
  512,
  1513,
  1179,
  1034,
  518,
  560,
  687,
  403,
  1553,
  1190,
  337,
  99,
  156,
  1593,
  146,
  945,
  590,
  1142,
  1194,
  36,
  632,
  1584,
  962,
  1375,
  929,
  787,
  1015,
  534,
  1184,
  1556,
  613,
  850,
  1597,
  85,
  347,
  1314,
  825,
  90,
  327,
  1358,
  1090,
  780,
  450,
  1289,
  1538,
  734,
  320,
  612,
  267,
  49,
  1091,
  554,
  82,
  447,
  34,
  1396,
  1523,
  480,
  1633,
  846,
  1534,
  1332,
  708,
  152,
  355,
  1144,
  729,
  1374,
  1537,
  1042,
  689,
  1325,
  1011,
  1641,
  233,
  972,
  1635,
  875,
  477,
  117,
  631,
  179,
  145,
  1103,
  397,
  104,
  881,
  44,
  502,
  982,
  630,
  740,
  167,
  367,
  1507,
  284,
  461,
  1073,
  552,
  1108,
  635,
  1261,
  677,
  1470,
  257,
  110,
  1381,
  1279,
  1529,
  517,
  1590,
  819,
  777,
  78,
  533,
  798,
  381,
  422,
  1219,
  389,
  1345,
  553,
  1615,
  905,
  178,
  772,
  398,
  942,
  350,
  1602,
  1609,
  1652,
  1117,
  709,
  1238,
  753,
  1446,
  1102,
  1131,
  135,
  860,
  340,
  1563,
  644,
  417,
  781,
  259,
  693,
  326,
  165,
  1598,
  1392,
  637,
  1005,
  636,
  541,
  1040,
  1199,
  437,
  878,
  834,
  836,
  1628,
  1646,
  1071,
  439,
  432,
  423,
  111,
  1351,
  1335,
  886,
  1625,
  41,
  250,
  565,
  169,
  391,
  602,
  1552,
  784,
  184,
  392,
  445,
  1226,
  462,
  342,
  829,
  217,
  1599,
  1048,
  546,
  1521,
  1055,
  458,
  1354,
  1621,
  356,
  1220,
  1365,
  255,
  540,
  1421,
  1573,
  1654,
  124,
  1212,
  1359,
  731,
  1262,
  15,
  556,
  1406,
  807,
  818,
  894,
  409,
  662,
  1054,
  614,
  843,
  407,
  1021,
  832,
  1310,
  799,
  1241,
  863,
  707,
  679,
  1323,
  880,
  1491,
  1068,
  1650,
  1348,
  1605,
  1050,
  841,
  1639,
  495,
  419,
  376,
  52,
  434,
  92,
  173,
  835,
  1278,
  854,
  1660,
  748,
  681,
  1618,
  21,
  1647,
  1350,
  1035,
  448,
  955,
  1231,
  488,
  47,
  1399,
  1065,
  647,
  904,
  604,
  830,
  446,
  1271,
  530,
  587,
  1284,
  1398,
  826,
  1444,
  1402,
  1039,
  192,
  1240,
  543,
  18,
  1025,
  872,
  1020,
  1458,
  746,
  1336,
  690,
  1105,
  69,
  377,
  426,
  435,
  131,
  97,
  1416,
  987,
  368,
  1114,
  1171,
  1331,
  1575,
  251,
  806,
  335,
  1058,
  1424,
  1494,
  1158,
  1607,
  1203,
  771,
  271,
  1592,
  1422,
  1153,
  808,
  1132,
  1443,
  414,
  485,
  122,
  281,
  1613,
  1249,
  706,
  411,
  1024,
  219,
  794,
  1367,
  32,
  237,
  1619,
  803,
  64,
  328,
  640,
  791,
  514,
  460,
  931,
  1425,
  869,
  660,
  1508,
  1053,
  1510,
  1321,
  46,
  323,
  864,
  1577,
  965,
  406,
  656,
  513,
  60,
  1483,
  695,
  20,
  372,
  583,
  1268,
  1288,
  218,
  1449,
  559,
  1492,
  248,
  714,
  1481,
  174,
  497,
  496,
  43,
  1601,
  86,
  366,
  1578,
  1095,
  710,
  646,
  451,
  1389,
  686,
  1346,
  1539,
  1124,
  1004,
  1595,
  1520,
  840,
  360,
  1482,
  1269,
  336,
  1290,
  1222,
  176,
  177,
  268,
  1254,
  749,
  1010,
  1423,
  673,
  758,
  1141,
  343,
  325,
  300,
  652,
  562,
  661,
  1252,
  433,
  702,
  1177,
  959,
  1540,
  58,
  1544,
  1415,
  1062,
  623,
  1651,
  1113,
  12,
  969,
  1632,
  769,
  370,
  1587,
  345,
  498,
  189,
  1560,
  653,
  306,
  1626,
  1570,
  1149,
  227,
  890,
  395,
  17,
  760,
  1093,
  1338,
  494,
  220,
  522,
  805,
  1550,
  1319,
  430,
  879,
  1357,
  1033,
  236,
  719,
  468,
  1385,
  568,
  332,
  121,
  418,
  1017,
  992,
  926,
  956,
  1079,
]
  const now = dateToUtc(new Date())
  const start = new Date(Date.UTC(2022, 1, 16))
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }
  return { answer: answers[numbers[day+78]], answerDay: day + 1 }
}

function dateToUtc (d: Date) {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()))
}
