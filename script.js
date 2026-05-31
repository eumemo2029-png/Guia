const P = [
  {
    n: "Actara 250 WG",
    pa: "Tiametoxam 250 g/kg",
    tp: "Inseticida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Fumo","Tomate","Uva"],
    al: ["Mosca-branca","PulgÃ£o"], fe: [], sc: "sim",
    ob: "Inseticida sistÃªmico neonicotinoide; usar somente nas culturas e modalidades registradas na bula"
  },
  {
    n: "Engeo Pleno S",
    pa: "Tiametoxam 141 g/L + Lambda-cialotrina 106 g/L",
    tp: "Inseticida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Milho","Soja"],
    al: ["Lagarta","Percevejo","PulgÃ£o"], fe: [], sc: "sim",
    ob: "Inseticida de contato, ingestÃ£o e aÃ§Ã£o sistÃªmica; seguir restriÃ§Ãµes para polinizadores e intervalo de seguranÃ§a da bula"
  },
  {
    n: "Rapel",
    pa: "Acefato 750 g/kg",
    tp: "Inseticida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Milho","Soja","Tomate"],
    al: ["Ãcaro","Lagarta","Percevejo","PulgÃ£o"], fe: [], sc: "sim",
    ob: "Inseticida e acaricida organofosforado, sistÃªmico, de contato e ingestÃ£o"
  },
  {
    n: "Racio",
    pa: "Acefato 750 g/kg",
    tp: "Inseticida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: ["Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida organofosforado sistÃªmico, de contato e ingestÃ£o; seguir manejo de resistÃªncia"
  },
  {
    // âœ… CORRIGIDO: cl era "III" â†’ agora "V"
    n: "Confidor Supra",
    pa: "Imidacloprido 500 g/kg + Beta-ciflutrina 10 g/kg",
    tp: "Inseticida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Fumo"],
    al: ["Broca","Mosca-branca","PulgÃ£o"], fe: [], sc: "sim",
    ob: "Inseticida sistÃªmico, de contato e ingestÃ£o indicado para pragas do fumo conforme bula"
  },
  {
    n: "Ampligo",
    pa: "Lambda-cialotrina 50 g/L + Clorantraniliprole 100 g/L",
    tp: "Inseticida", mo: "Contato", cl: "III",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja","Tomate"],
    al: ["Broca","Lagarta"], fe: [], sc: "sim",
    ob: "Inseticida de contato e ingestÃ£o para complexo de lagartas; conferir alvo e cultura na bula"
  },
  {
    n: "Verimark",
    pa: "Ciantraniliprole 200 g/L",
    tp: "Inseticida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Tomate"],
    al: ["Broca","Lagarta"], fe: [], sc: "sim",
    ob: "Inseticida diamida com uso conforme cultura, alvo e modalidade de aplicaÃ§Ã£o da bula"
  },
  {
    n: "Nativo",
    pa: "Trifloxistrobina 100 g/L + Tebuconazol 200 g/L",
    tp: "Fungicida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Milho","Soja","Tomate","Uva"],
    al: ["Antracnose","Ferrugem","Mancha foliar","OÃ­dio"], fe: [], sc: "sim",
    ob: "Fungicida mesostÃªmico e sistÃªmico; alternar mecanismos de aÃ§Ã£o para manejo de resistÃªncia"
  },
  {
    // âœ… CORRIGIDO: cl era "â€”" â†’ agora "IV"
    n: "Orkestra SC",
    pa: "Fluxapiroxade 167 g/L + Piraclostrobina 333 g/L",
    tp: "Fungicida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Soja","Milho"],
    al: ["Ferrugem","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida SDHI + estrobilurina; usar conforme culturas e doenÃ§as registradas"
  },
  {
    n: "Amistar Top",
    pa: "Azoxistrobina 200 g/L + Difenoconazol 125 g/L",
    tp: "Fungicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar","OÃ­dio"], fe: [], sc: "sim",
    ob: "Fungicida sistÃªmico de aÃ§Ã£o preventiva, curativa e anti-esporulante"
  },
  {
    n: "Acrobat MZ",
    pa: "Dimetomorfe 90 g/kg + Mancozebe 600 g/kg",
    tp: "Fungicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate"],
    al: ["MÃ­ldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistÃªmico e de contato para requeima em batata e tomate"
  },
  {
    n: "Curzate",
    pa: "Mancozebe 640 g/kg + Cimoxanil 80 g/kg",
    tp: "Fungicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["MÃ­ldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida com aÃ§Ã£o sistÃªmica e de contato para mÃ­ldio/requeima"
  },
  {
    n: "Torero",
    pa: "Mancozebe 640 g/kg + Cimoxanil 80 g/kg",
    tp: "Fungicida", mo: "SistÃªmico", cl: "V",
    ca: "7 dias", do: "2,0â€“3,0 kg/ha",
    cu: ["Batata","Tomate","Uva"],
    al: ["MÃ­ldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistÃªmico e de contato; seguir intervalo de aplicaÃ§Ã£o conforme pressÃ£o da doenÃ§a"
  },
  {
    n: "Ridomil Gold MZ 680 WG",
    pa: "Mancozebe 640 g/kg + Metalaxil-M 40 g/kg",
    tp: "Fungicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["MÃ­ldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistÃªmico e de contato para oomicetos; nunca usar subdose"
  },
  {
    n: "Infinito",
    pa: "Cloridrato de propamocarbe 625 g/L + Fluopicolida 62,5 g/L",
    tp: "Fungicida", mo: "Translaminar", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate"],
    al: ["MÃ­ldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistÃªmico e translaminar; usar conforme pressÃ£o de requeima/mÃ­ldio"
  },
  {
    n: "Cabrio Top",
    pa: "Metiram 550 g/kg + Piraclostrobina 50 g/kg",
    tp: "Fungicida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Tomate","Uva"],
    al: ["MÃ­ldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida multissÃ­tio + estrobilurina; usar preventivamente conforme bula"
  },
  {
    // âœ… CORRIGIDO: cl era "â€”" â†’ agora "V"
    n: "Score",
    pa: "Difenoconazol 250 g/L",
    tp: "Fungicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Tomate","Uva"],
    al: ["Antracnose","Mancha foliar","OÃ­dio"], fe: [], sc: "sim",
    ob: "Fungicida triazol sistÃªmico; observar nÃºmero mÃ¡ximo de aplicaÃ§Ãµes e intervalo da bula"
  },
  {
    n: "Basagran 600",
    pa: "Bentazona 600 g/L",
    tp: "Herbicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Milho","Soja"],
    al: ["CiperÃ¡ceas"], fe: ["Folha larga"], sc: "sim",
    ob: "Herbicida seletivo pÃ³s-emergente; no feijÃ£o nÃ£o acrescentar adjuvante nÃ£o iÃ´nico por risco de fitotoxicidade"
  },
  {
    n: "Select 240 EC",
    pa: "Cletodim 240 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "â€”",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Fumo","Soja","Tomate","Uva"],
    al: ["AzevÃ©m"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida seletivo para culturas de folha larga; efetivo contra gramÃ­neas, com pouca ou nenhuma aÃ§Ã£o em folhas largas"
  },
  {
    n: "Poquer",
    pa: "Cletodim 240 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Soja"],
    al: ["AzevÃ©m"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida pÃ³s-emergente para controle de azevÃ©m e outras gramÃ­neas; nÃ£o aplicar sobre azevÃ©m cultivado"
  },
  {
    n: "Verdict Max",
    pa: "Haloxifope-P-metÃ­lico 540 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Soja","Uva"],
    al: ["AzevÃ©m"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida pÃ³s-emergente para gramÃ­neas; em milho somente quando a tecnologia/cultivar for tolerante ao haloxifope"
  },
  {
    n: "Patrol SL",
    pa: "Glufosinato - sal de amÃ´nio 200 g/L",
    tp: "Herbicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "parcial",
    ob: "Herbicida pÃ³s-emergente de aÃ§Ã£o nÃ£o sistÃªmica e seletivo condicional; Ã¡rea total apenas em culturas tolerantes ou modalidades registradas"
  },
  {
    // âœ… CORRIGIDO: pa era "Glifosato - sal de amÃ´nio 806 g/L" â†’ agora "2,4-D sal dimetilamina 806 g/L"
    n: "Aminol 806",
    pa: "2,4-D sal dimetilamina 806 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "IV",
    ca: "â€”", do: "Conforme bula",
    cu: ["Fumo","Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "nao",
    ob: "NÃ£o aplicar por cima do fumo convencional; usar apenas em dessecaÃ§Ã£o/prÃ©-plantio ou tecnologia tolerante registrada"
  },
  {
    n: "Kyron 40 SC",
    pa: "Nicossulfurom 40 g/L",
    tp: "Herbicida", mo: "PÃ³s-emergente", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho; conferir hÃ­bridos recomendados, estÃ¡dio da cultura e restriÃ§Ãµes de mistura"
  },
  {
    n: "Sanson 40 SC",
    pa: "Nicossulfurom 40 g/L",
    tp: "Herbicida", mo: "PÃ³s-emergente", cl: "IV",
    ca: "45 dias", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho; consultar lista de hÃ­bridos/variedades recomendados"
  },
  {
    n: "Callisto",
    pa: "Mesotriona 480 g/L",
    tp: "Herbicida", mo: "PÃ³s-emergente", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida seletivo para milho em pÃ³s-emergÃªncia; evitar deriva para culturas sensÃ­veis"
  },
  {
    n: "PrimÃ³leo",
    pa: "Atrazina 400 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho em pÃ³s-emergÃªncia das plantas infestantes e da cultura"
  },
  {
    n: "Dual Gold",
    pa: "S-metolacloro 960 g/L",
    tp: "Herbicida", mo: "PrÃ©-emergente", cl: "III",
    ca: "â€”", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha estreita","Folha larga"], sc: "nao",
    ob: "Herbicida residual de solo; aplicar em prÃ©-emergÃªncia/prÃ©-plantio conforme bula, nÃ£o sobre folhas da cultura"
  },
  {
    n: "DMA 806 BR",
    pa: "2,4-D sal dimetilamina 806 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "II",
    ca: "â€”", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Controle de folhas largas; usar somente em modalidade/tecnologia registrada e com cuidado extremo contra deriva"
  },
  {
    n: "Tordon",
    pa: "2,4-D 402 g/L + Picloram 103,6 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "V",
    ca: "â€”", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida seletivo para pastagens no controle de dicotiledÃ´neas arbÃ³reas, arbustivas e subarbustivas"
  },
  {
    n: "Truper",
    pa: "Fluroxipir-meptÃ­lico 115,3 g/L + Triclopir-butotÃ­lico 333,8 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "IV",
    ca: "â€”", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida sistÃªmico para folhas largas em pastagens de gramÃ­neas forrageiras"
  },
  {
    n: "PlanadorXT-S",
    pa: "Aminopiralide 59,17 g/L + Picloram 115,74 g/L + Fluroxipir-meptÃ­lico 144,09 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "â€”",
    ca: "â€”", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida seletivo para pastagem; nÃ£o indicado para soja, milho, tomate, fumo, feijÃ£o, uva ou batata"
  },
  {
    n: "DisparoUltra-S",
    pa: "2,4-D 512,05 g/L + Aminopiralide 14,62 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "IV",
    ca: "â€”", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida de pastagem para folhas largas; nÃ£o indicado para aplicaÃ§Ã£o sobre as demais culturas do guia"
  },
  {
    n: "Zartan",
    pa: "Metsulfurom-metÃ­lico 600 g/kg",
    tp: "Herbicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida sistÃªmico para culturas registradas; nÃ£o Ã© atrazina e nÃ£o deve ser indicado como herbicida de milho"
  },
  {
    n: "Primeplus BR",
    pa: "Flumetralina 125 g/L",
    tp: "Regulador", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Fumo"],
    al: ["BrotaÃ§Ã£o lateral"], fe: [], sc: "sim",
    ob: "Regulador de crescimento/antibrotante para tratamento tÃ³pico do fumo; nÃ£o Ã© fungicida"
  },
  {
    n: "Actellic 500 EC",
    pa: "PirimifÃ³s-metÃ­lico 500 g/L",
    tp: "Inseticida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: ["Gorgulho","TraÃ§a"], fe: [], sc: "nao",
    ob: "Uso pÃ³s-colheita/armazenamento conforme Agrolink; nÃ£o aplicar sobre cultura no campo"
  },
  {
    n: "Ally",
    pa: "Metsulfurom-metÃ­lico 600 g/kg",
    tp: "Herbicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida sistÃªmico seletivo para folhas largas em culturas registradas; conferir cultura na bula antes de recomendar"
  },
  {
    n: "Antracol 700 WP",
    pa: "Propinebe 700 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["MÃ­ldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida de contato/protetor Ã  base de propinebe; usar preventivamente conforme bula"
  },
  {
    n: "Boral 500 SC",
    pa: "Sulfentrazona 500 g/L",
    tp: "Herbicida", mo: "PrÃ©-emergente", cl: "V",
    ca: "â€”", do: "Conforme bula",
    cu: ["Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "nao",
    ob: "Herbicida de solo em prÃ©-emergÃªncia/prÃ©-plantio; nÃ£o aplicar sobre folhas da cultura"
  },
  {
    n: "Bravonil 720",
    pa: "Clorotalonil 720 g/L",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["MÃ­ldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida multissÃ­tio de contato/protetor; usar conforme culturas registradas no Agrolink"
  },
  {
    n: "Capataz",
    pa: "Imidacloprido 100 g/L + Beta-ciflutrina 12,5 g/L",
    tp: "Inseticida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Milho","Soja","Tomate"],
    al: ["Lagarta","Percevejo","PulgÃ£o","Mosca-branca"], fe: [], sc: "sim",
    ob: "Inseticida sistÃªmico e de contato; conferir praga/cultura registradas antes do uso"
  },
  {
    n: "Cipermetrina Nortox 250 EC",
    pa: "Cipermetrina 250 g/L",
    tp: "Inseticida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja","Tomate"],
    al: ["Broca","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida piretroide de contato e ingestÃ£o; seguir intervalos e restriÃ§Ãµes para polinizadores"
  },
  {
    n: "Connect",
    pa: "Imidacloprido 100 g/L + Beta-ciflutrina 12,5 g/L",
    tp: "Inseticida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Milho","Soja","Tomate"],
    al: ["Lagarta","Percevejo","PulgÃ£o","Mosca-branca"], fe: [], sc: "sim",
    ob: "Produto equivalente em composiÃ§Ã£o ao Capataz em algumas fichas; conferir registro/cultura na bula"
  },
  {
    n: "Decis 25 EC",
    pa: "Deltametrina 25 g/L",
    tp: "Inseticida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Milho","Soja","Tomate","Uva"],
    al: ["Broca","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida piretroide de contato e ingestÃ£o; respeitar intervalo de seguranÃ§a por cultura"
  },
  {
    n: "Evidence 700 WG",
    pa: "Imidacloprido 700 g/kg",
    tp: "Inseticida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Fumo","Tomate"],
    al: ["Mosca-branca","PulgÃ£o"], fe: [], sc: "sim",
    ob: "Inseticida sistÃªmico neonicotinoide; conferir modalidade de aplicaÃ§Ã£o na bula"
  },
  {
    n: "Flex",
    pa: "Fomesafem 250 g/L",
    tp: "Herbicida", mo: "PÃ³s-emergente", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Soja","FeijÃ£o"],
    al: [], fe: ["Folha larga"], sc: "sim",
    ob: "Herbicida seletivo pÃ³s-emergente para folhas largas; observar intervalo para culturas em sucessÃ£o"
  },
  {
    n: "Fusiflex 250",
    pa: "Fluazifope-P-butÃ­lico 250 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Soja","Tomate"],
    al: ["AzevÃ©m"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida sistÃªmico pÃ³s-emergente; nÃ£o aplicar sobre gramÃ­neas cultivadas nÃ£o tolerantes"
  },
  {
    n: "Fusilade 250 EW",
    pa: "Fluazifope-P-butÃ­lico 250 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Soja","Tomate","Uva"],
    al: ["AzevÃ©m"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida seletivo para culturas de folha larga; conferir estÃ¡dio das gramÃ­neas alvo"
  },
  {
    n: "Arvatico",
    pa: "Bacillus velezensis isolado CNPSo 3602",
    tp: "BiolÃ³gico", mo: "BiolÃ³gico", cl: "â€”",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Soja","Milho","Tomate","Fumo","FeijÃ£o","Uva","Batata","Pastagem"],
    al: ["DoenÃ§as de solo"], fe: [], sc: "sim",
    ob: "Produto biolÃ³gico; conferir alvo e bula antes do uso"
  },
  {
    n: "Gamit 360 CS",
    pa: "Clomazona 360 g/L",
    tp: "Herbicida", mo: "PrÃ©-emergente", cl: "V",
    ca: "â€”", do: "Conforme bula",
    cu: ["Batata","Fumo","Soja"],
    al: [], fe: ["Folha estreita","Folha larga"], sc: "nao",
    ob: "Herbicida prÃ©-emergente/residual; contato com folhas pode causar fitotoxicidade"
  },
  {
    n: "Gastoxin B57",
    pa: "Fosfeto de alumÃ­nio 570 g/kg",
    tp: "Inseticida", mo: "Fumigante", cl: "I",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: ["Gorgulho","TraÃ§a"], fe: [], sc: "nao",
    ob: "Fumigante para grÃ£os armazenados; gÃ¡s extremamente tÃ³xico, nunca usar em aplicaÃ§Ã£o foliar/campo"
  },
  {
    n: "Goltix",
    pa: "Metamitrona",
    tp: "Herbicida", mo: "SistÃªmico", cl: "â€”",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Beterraba"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida com ingrediente metamitrona para beterraba; nÃ£o indicar para as culturas principais sem registro especÃ­fico"
  },
  {
    n: "Klorpan 480 EC",
    pa: "ClorpirifÃ³s 480 g/L",
    tp: "Inseticida", mo: "Contato", cl: "II",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: ["Broca","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida organofosforado; conferir situaÃ§Ã£o de registro e restriÃ§Ãµes atuais antes do uso"
  },
  {
    n: "Manzate WG",
    pa: "Mancozebe 750 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Antracnose","MÃ­ldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida protetor multissÃ­tio; seguir intervalo de seguranÃ§a e limite de aplicaÃ§Ãµes"
  },
  {
    n: "Metomil 215 SL Nortox",
    pa: "Metomil 215 g/L",
    tp: "Inseticida", mo: "Contato", cl: "I",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja","Tomate"],
    al: ["Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida carbamato de alta toxicidade aguda; usar EPI completo e seguir receituÃ¡rio"
  },
  {
    n: "Norton",
    pa: "2,4-D 402 g/L + Picloram 103,5 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida hormonal para folhas largas; risco elevado para culturas sensÃ­veis por deriva/resÃ­duo"
  },
  {
    n: "Off Road",
    pa: "Glufosinato - sal de amÃ´nio 200 g/L",
    tp: "Herbicida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "parcial",
    ob: "Herbicida nÃ£o seletivo/condicional; Ã¡rea total apenas em culturas tolerantes ou modalidade registrada"
  },
  {
    n: "Primatop SC",
    pa: "Atrazina 250 g/L + Simazina 250 g/L",
    tp: "Herbicida", mo: "SistÃªmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho conforme estÃ¡dio e bula; nÃ£o indicar para culturas sensÃ­veis"
  },
  {
    n: "Recop",
    pa: "Oxicloreto de cobre 840 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Antracnose","MÃ­ldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida/bactericida cÃºprico de contato; cuidado com fitotoxicidade em condiÃ§Ãµes sensÃ­veis"
  },
  {
    n: "Reglone",
    pa: "Diquat 200 g/L",
    tp: "Dessecante", mo: "Contato", cl: "II",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "parcial",
    ob: "Dessecante de contato; usar apenas em estÃ¡dio/finalidade registrada, nÃ£o como herbicida seletivo foliar"
  },
  {
    // âœ… CORRIGIDO: pa ajustado para 577 g/L (eq. Ã¡cido 480 g/L) e cl era "IV" â†’ agora "V"
    n: "Roundup Original Mais",
    pa: "Glifosato - sal de isopropilamina 577 g/L (eq. Ã¡cido 480 g/L)",
    tp: "Herbicida", mo: "SistÃªmico", cl: "V",
    ca: "â€”", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "nao",
    ob: "NÃ£o seletivo em culturas convencionais; Ã¡rea total apenas em tecnologia tolerante ou dessecaÃ§Ã£o registrada"
  },
  {
    n: "Rovral",
    pa: "Iprodiona 500 g/L",
    tp: "Fungicida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","FeijÃ£o","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida de contato; consultar doenÃ§as/culturas registradas e intervalo de seguranÃ§a"
  },
  {
    n: "Serenade",
    pa: "Bacillus subtilis QST 713 13,96 g/L",
    tp: "Fungicida", mo: "BiolÃ³gico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar","OÃ­dio"], fe: [], sc: "sim",
    ob: "Fungicida/bactericida biolÃ³gico; seguir condiÃ§Ãµes de aplicaÃ§Ã£o para melhor desempenho"
  },
  {
    n: "Sialex 500",
    pa: "Procimidona 500 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida dicarboximida; usar conforme cultura/doenÃ§a registrada e manejo de resistÃªncia"
  },
  {
    n: "Sumyzin 500 SC",
    pa: "Flumioxazina 500 g/L",
    tp: "Herbicida", mo: "PrÃ©-emergente", cl: "IV",
    ca: "â€”", do: "Conforme bula",
    cu: ["Soja"],
    al: [], fe: ["Folha larga"], sc: "nao",
    ob: "Herbicida de contato/residual em prÃ©-plantio/prÃ©-emergÃªncia; nÃ£o aplicar sobre folhas da cultura"
  },
  {
    n: "Talstar 100 EC",
    pa: "Bifentrina 100 g/L",
    tp: "Inseticida", mo: "Contato", cl: "III",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["FeijÃ£o","Milho","Soja","Tomate"],
    al: ["Ãcaro","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida/acaricida piretroide; seguir restriÃ§Ãµes para organismos aquÃ¡ticos e polinizadores"
  },
  {
    n: "Vertimec 18 EC",
    pa: "Abamectina 18 g/L",
    tp: "Acaricida", mo: "Translaminar", cl: "III",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Ãcaro","Lagarta"], fe: [], sc: "sim",
    ob: "Acaricida/inseticida translaminar; respeitar intervalo e manejo de resistÃªncia"
  }
];

// â”€â”€â”€ Lookup tables â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const CL = {
  I: "Classe I", II: "Classe II", III: "Classe III",
  IV: "Classe IV", V: "Classe V", "â€”": "Consultar bula"
};
const AC = {
  Fungicida: "acc-Fungicida", Herbicida: "acc-Herbicida",
  Inseticida: "acc-Inseticida", Acaricida: "acc-Acaricida",
  Dessecante: "acc-Dessecante", Regulador: "acc-Regulador",
  BiolÃ³gico: "acc-BiolÃ³gico"
};

let vm = 'grid';
document.getElementById('tc').textContent = P.length;

// â”€â”€â”€ Troca de visualizaÃ§Ã£o â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function sv(v) {
  vm = v;
  document.getElementById('res').className = v;
  document.getElementById('bg').classList.toggle('active', v === 'grid');
  document.getElementById('bl').classList.toggle('active', v === 'list');
}

// â”€â”€â”€ Limpar filtros â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function limpar() {
  ['fb','fc','ft','fa','fm','fs','fk'].forEach(id => {
    document.getElementById(id).value = '';
  });
  f();
}

// â”€â”€â”€ Info de uso â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function usoInfo(p) {
  let aplica, intervalo, warn = false;

  if (p.sc === 'sim') {
    aplica = 'Pode aplicar sobre a cultura conforme recomendaÃ§Ã£o de bula.';
  } else if (p.sc === 'nao') {
    aplica = 'NÃ£o aplicar por cima da cultura; usar somente na modalidade indicada em observaÃ§Ãµes/bula.';
    warn = true;
  } else {
    aplica = 'Depende do estÃ¡dio da cultura, cultivar, alvo e forma de aplicaÃ§Ã£o.';
  }

  intervalo = p.ca && p.ca !== 'â€”'
    ? 'CarÃªncia/intervalo informado: ' + p.ca + '.'
    : 'Sem carÃªncia alimentar cadastrada; conferir intervalo de plantio, reentrada e restriÃ§Ãµes na bula.';

  if (p.n === 'Aminol 806') {
    aplica = 'NÃ£o aplicar por cima do fumo convencional; usar somente em dessecaÃ§Ã£o/prÃ©-plantio.';
    intervalo = 'Fumo: aguardar no mÃ­nimo 15 dias entre a aplicaÃ§Ã£o e o plantio.';
    warn = true;
  } else if (p.tp === 'Herbicida' && p.sc === 'nao') {
    intervalo = 'AplicaÃ§Ã£o restrita a prÃ©-plantio, prÃ©-emergÃªncia, solo ou aplicaÃ§Ã£o dirigida conforme bula.';
  } else if (p.tp === 'Dessecante') {
    intervalo = 'Usar apenas no estÃ¡dio/finalidade indicada; conferir intervalo de colheita e reentrada na bula.';
  }

  return { aplica, intervalo, warn };
}

// â”€â”€â”€ Filtrar e renderizar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function f() {
  const bu = document.getElementById('fb').value.toLowerCase();
  const cu = document.getElementById('fc').value;
  const tp = document.getElementById('ft').value;
  const al = document.getElementById('fa').value;
  const mo = document.getElementById('fm').value;
  const sc = document.getElementById('fs').value;
  const cl = document.getElementById('fk').value;

  const res = P.filter(p => {
    if (bu && !p.n.toLowerCase().includes(bu) && !p.pa.toLowerCase().includes(bu)) return false;
    if (cu && !p.cu.includes(cu)) return false;
    if (tp && p.tp !== tp) return false;
    if (al === 'Folha larga'   && !p.fe.includes('Folha larga'))   return false;
    if (al === 'Folha estreita' && !p.fe.includes('Folha estreita')) return false;
    if (al === 'NÃ£o seletivo'  && !p.ns) return false;
    if (al && !['Folha larga','Folha estreita','NÃ£o seletivo'].includes(al) && !p.al.includes(al)) return false;
    if (mo && !p.mo.toLowerCase().includes(mo.toLowerCase())) return false;
    if (sc && p.sc !== sc) return false;
    if (cl && p.cl !== cl) return false;
    return true;
  });

  document.getElementById('cn').textContent = res.length;
  const cont = document.getElementById('res');

  if (!res.length) {
    cont.innerHTML = '<div class="empty"><p>Nenhum produto encontrado</p><span>Tente ajustar os filtros</span></div>';
    return;
  }

  cont.innerHTML = res.map(p => {
    const ac = AC[p.tp] || 'acc-Inseticida';
    let bc, bi, bt;
    if (p.sc === 'sim')     { bc = 'ab-sim';     bi = 'âœ…'; bt = 'Pode aplicar sobre a cultura â€” ' + p.ob; }
    else if (p.sc === 'nao') { bc = 'ab-nao';     bi = 'ðŸš«'; bt = p.ob; }
    else                     { bc = 'ab-parcial';  bi = 'âš ï¸'; bt = p.ob; }

    const tagFe = p.fe.map(e =>
      `<span class="tag ${e === 'Folha larga' ? 'tag-fl' : 'tag-fe'}">${e === 'Folha larga' ? 'ðŸƒ' : 'ðŸŒ¾'} ${e}</span>`
    ).join('');
    const tagNs = p.ns ? '<span class="tag tag-ns">âš ï¸ NÃ£o seletivo</span>' : '';
    const uso = usoInfo(p);

    return `<div class="card">
      <div class="cab ${ac}"></div>
      <div class="ch">
        <div><div class="cn">${p.n}</div><div class="cp">${p.pa}</div></div>
        <span class="badge badge-${p.tp}">${p.tp}</span>
      </div>
      <div class="ab ${bc}"><span class="ab-icon">${bi}</span><span>${bt}</span></div>
      <div class="ug">
        <div class="ui ${uso.warn ? 'ui-warn' : ''}"><label>Uso sobre a cultura</label><span>${uso.aplica}</span></div>
        <div class="ui ${uso.warn ? 'ui-warn' : ''}"><label>Intervalo / cuidado</label><span>${uso.intervalo}</span></div>
      </div>
      <div class="cg">
        <div class="ii"><label>Modo de aÃ§Ã£o</label><span>${p.mo}</span></div>
        <div class="ii"><label>CarÃªncia</label><span>${p.ca}</span></div>
        <div class="ii"><label>Dosagem</label><span>${p.do}</span></div>
        <div class="ii"><label>Classe tox.</label><span class="pi pi-${p.cl}">${CL[p.cl]}</span></div>
      </div>
      <div class="ct">
        ${p.cu.map(c => `<span class="tag tag-c">ðŸŒ± ${c}</span>`).join('')}
        ${tagFe}
        ${tagNs}
        ${p.al.map(a => `<span class="tag">ðŸŽ¯ ${a}</span>`).join('')}
      </div>
    </div>`;
  }).join('');
}

f();
