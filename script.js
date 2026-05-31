const P = [
  {
    n: "Actara 250 WG",
    pa: "Tiametoxam 250 g/kg",
    tp: "Inseticida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Fumo","Tomate","Uva"],
    al: ["Mosca-branca","Pulgão"], fe: [], sc: "sim",
    ob: "Inseticida sistêmico neonicotinoide; usar somente nas culturas e modalidades registradas na bula"
  },
  {
    n: "Engeo Pleno S",
    pa: "Tiametoxam 141 g/L + Lambda-cialotrina 106 g/L",
    tp: "Inseticida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Milho","Soja"],
    al: ["Lagarta","Percevejo","Pulgão"], fe: [], sc: "sim",
    ob: "Inseticida de contato, ingestão e ação sistêmica; seguir restrições para polinizadores e intervalo de segurança da bula"
  },
  {
    n: "Rapel",
    pa: "Acefato 750 g/kg",
    tp: "Inseticida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Milho","Soja","Tomate"],
    al: ["Ácaro","Lagarta","Percevejo","Pulgão"], fe: [], sc: "sim",
    ob: "Inseticida e acaricida organofosforado, sistêmico, de contato e ingestão"
  },
  {
    n: "Racio",
    pa: "Acefato 750 g/kg",
    tp: "Inseticida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: ["Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida organofosforado sistêmico, de contato e ingestão; seguir manejo de resistência"
  },
  {
    // ✅ CORRIGIDO: cl era "III" → agora "V"
    n: "Confidor Supra",
    pa: "Imidacloprido 500 g/kg + Beta-ciflutrina 10 g/kg",
    tp: "Inseticida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Fumo"],
    al: ["Broca","Mosca-branca","Pulgão"], fe: [], sc: "sim",
    ob: "Inseticida sistêmico, de contato e ingestão indicado para pragas do fumo conforme bula"
  },
  {
    n: "Ampligo",
    pa: "Lambda-cialotrina 50 g/L + Clorantraniliprole 100 g/L",
    tp: "Inseticida", mo: "Contato", cl: "III",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja","Tomate"],
    al: ["Broca","Lagarta"], fe: [], sc: "sim",
    ob: "Inseticida de contato e ingestão para complexo de lagartas; conferir alvo e cultura na bula"
  },
  {
    n: "Verimark",
    pa: "Ciantraniliprole 200 g/L",
    tp: "Inseticida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Tomate"],
    al: ["Broca","Lagarta"], fe: [], sc: "sim",
    ob: "Inseticida diamida com uso conforme cultura, alvo e modalidade de aplicação da bula"
  },
  {
    n: "Nativo",
    pa: "Trifloxistrobina 100 g/L + Tebuconazol 200 g/L",
    tp: "Fungicida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Milho","Soja","Tomate","Uva"],
    al: ["Antracnose","Ferrugem","Mancha foliar","Oídio"], fe: [], sc: "sim",
    ob: "Fungicida mesostêmico e sistêmico; alternar mecanismos de ação para manejo de resistência"
  },
  {
    // ✅ CORRIGIDO: cl era "—" → agora "IV"
    n: "Orkestra SC",
    pa: "Fluxapiroxade 167 g/L + Piraclostrobina 333 g/L",
    tp: "Fungicida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Soja","Milho"],
    al: ["Ferrugem","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida SDHI + estrobilurina; usar conforme culturas e doenças registradas"
  },
  {
    n: "Amistar Top",
    pa: "Azoxistrobina 200 g/L + Difenoconazol 125 g/L",
    tp: "Fungicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar","Oídio"], fe: [], sc: "sim",
    ob: "Fungicida sistêmico de ação preventiva, curativa e anti-esporulante"
  },
  {
    n: "Acrobat MZ",
    pa: "Dimetomorfe 90 g/kg + Mancozebe 600 g/kg",
    tp: "Fungicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate"],
    al: ["Míldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistêmico e de contato para requeima em batata e tomate"
  },
  {
    n: "Curzate",
    pa: "Mancozebe 640 g/kg + Cimoxanil 80 g/kg",
    tp: "Fungicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Míldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida com ação sistêmica e de contato para míldio/requeima"
  },
  {
    n: "Torero",
    pa: "Mancozebe 640 g/kg + Cimoxanil 80 g/kg",
    tp: "Fungicida", mo: "Sistêmico", cl: "V",
    ca: "7 dias", do: "2,0–3,0 kg/ha",
    cu: ["Batata","Tomate","Uva"],
    al: ["Míldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistêmico e de contato; seguir intervalo de aplicação conforme pressão da doença"
  },
  {
    n: "Ridomil Gold MZ 680 WG",
    pa: "Mancozebe 640 g/kg + Metalaxil-M 40 g/kg",
    tp: "Fungicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Míldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistêmico e de contato para oomicetos; nunca usar subdose"
  },
  {
    n: "Infinito",
    pa: "Cloridrato de propamocarbe 625 g/L + Fluopicolida 62,5 g/L",
    tp: "Fungicida", mo: "Translaminar", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate"],
    al: ["Míldio / Requeima"], fe: [], sc: "sim",
    ob: "Fungicida sistêmico e translaminar; usar conforme pressão de requeima/míldio"
  },
  {
    n: "Cabrio Top",
    pa: "Metiram 550 g/kg + Piraclostrobina 50 g/kg",
    tp: "Fungicida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Tomate","Uva"],
    al: ["Míldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida multissítio + estrobilurina; usar preventivamente conforme bula"
  },
  {
    // ✅ CORRIGIDO: cl era "—" → agora "V"
    n: "Score",
    pa: "Difenoconazol 250 g/L",
    tp: "Fungicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Tomate","Uva"],
    al: ["Antracnose","Mancha foliar","Oídio"], fe: [], sc: "sim",
    ob: "Fungicida triazol sistêmico; observar número máximo de aplicações e intervalo da bula"
  },
  {
    n: "Basagran 600",
    pa: "Bentazona 600 g/L",
    tp: "Herbicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Milho","Soja"],
    al: ["Ciperáceas"], fe: ["Folha larga"], sc: "sim",
    ob: "Herbicida seletivo pós-emergente; no feijão não acrescentar adjuvante não iônico por risco de fitotoxicidade"
  },
  {
    n: "Select 240 EC",
    pa: "Cletodim 240 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "—",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Fumo","Soja","Tomate","Uva"],
    al: ["Azevém"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida seletivo para culturas de folha larga; efetivo contra gramíneas, com pouca ou nenhuma ação em folhas largas"
  },
  {
    n: "Poquer",
    pa: "Cletodim 240 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Soja"],
    al: ["Azevém"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida pós-emergente para controle de azevém e outras gramíneas; não aplicar sobre azevém cultivado"
  },
  {
    n: "Verdict Max",
    pa: "Haloxifope-P-metílico 540 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Soja","Uva"],
    al: ["Azevém"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida pós-emergente para gramíneas; em milho somente quando a tecnologia/cultivar for tolerante ao haloxifope"
  },
  {
    n: "Patrol SL",
    pa: "Glufosinato - sal de amônio 200 g/L",
    tp: "Herbicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "parcial",
    ob: "Herbicida pós-emergente de ação não sistêmica e seletivo condicional; área total apenas em culturas tolerantes ou modalidades registradas"
  },
  {
    // ✅ CORRIGIDO: pa era "Glifosato - sal de amônio 806 g/L" → agora "2,4-D sal dimetilamina 806 g/L"
    n: "Aminol 806",
    pa: "2,4-D sal dimetilamina 806 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "IV",
    ca: "—", do: "Conforme bula",
    cu: ["Fumo","Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "nao",
    ob: "Não aplicar por cima do fumo convencional; usar apenas em dessecação/pré-plantio ou tecnologia tolerante registrada"
  },
  {
    n: "Kyron 40 SC",
    pa: "Nicossulfurom 40 g/L",
    tp: "Herbicida", mo: "Pós-emergente", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho; conferir híbridos recomendados, estádio da cultura e restrições de mistura"
  },
  {
    n: "Sanson 40 SC",
    pa: "Nicossulfurom 40 g/L",
    tp: "Herbicida", mo: "Pós-emergente", cl: "IV",
    ca: "45 dias", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho; consultar lista de híbridos/variedades recomendados"
  },
  {
    n: "Callisto",
    pa: "Mesotriona 480 g/L",
    tp: "Herbicida", mo: "Pós-emergente", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida seletivo para milho em pós-emergência; evitar deriva para culturas sensíveis"
  },
  {
    n: "Primóleo",
    pa: "Atrazina 400 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho em pós-emergência das plantas infestantes e da cultura"
  },
  {
    n: "Dual Gold",
    pa: "S-metolacloro 960 g/L",
    tp: "Herbicida", mo: "Pré-emergente", cl: "III",
    ca: "—", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha estreita","Folha larga"], sc: "nao",
    ob: "Herbicida residual de solo; aplicar em pré-emergência/pré-plantio conforme bula, não sobre folhas da cultura"
  },
  {
    n: "DMA 806 BR",
    pa: "2,4-D sal dimetilamina 806 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "II",
    ca: "—", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Controle de folhas largas; usar somente em modalidade/tecnologia registrada e com cuidado extremo contra deriva"
  },
  {
    n: "Tordon",
    pa: "2,4-D 402 g/L + Picloram 103,6 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "V",
    ca: "—", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida seletivo para pastagens no controle de dicotiledôneas arbóreas, arbustivas e subarbustivas"
  },
  {
    n: "Truper",
    pa: "Fluroxipir-meptílico 115,3 g/L + Triclopir-butotílico 333,8 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "IV",
    ca: "—", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida sistêmico para folhas largas em pastagens de gramíneas forrageiras"
  },
  {
    n: "PlanadorXT-S",
    pa: "Aminopiralide 59,17 g/L + Picloram 115,74 g/L + Fluroxipir-meptílico 144,09 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "—",
    ca: "—", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida seletivo para pastagem; não indicado para soja, milho, tomate, fumo, feijão, uva ou batata"
  },
  {
    n: "DisparoUltra-S",
    pa: "2,4-D 512,05 g/L + Aminopiralide 14,62 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "IV",
    ca: "—", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida de pastagem para folhas largas; não indicado para aplicação sobre as demais culturas do guia"
  },
  {
    n: "Zartan",
    pa: "Metsulfurom-metílico 600 g/kg",
    tp: "Herbicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida sistêmico para culturas registradas; não é atrazina e não deve ser indicado como herbicida de milho"
  },
  {
    n: "Primeplus BR",
    pa: "Flumetralina 125 g/L",
    tp: "Regulador", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Fumo"],
    al: ["Brotação lateral"], fe: [], sc: "sim",
    ob: "Regulador de crescimento/antibrotante para tratamento tópico do fumo; não é fungicida"
  },
  {
    n: "Actellic 500 EC",
    pa: "Pirimifós-metílico 500 g/L",
    tp: "Inseticida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: ["Gorgulho","Traça"], fe: [], sc: "nao",
    ob: "Uso pós-colheita/armazenamento conforme Agrolink; não aplicar sobre cultura no campo"
  },
  {
    n: "Ally",
    pa: "Metsulfurom-metílico 600 g/kg",
    tp: "Herbicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida sistêmico seletivo para folhas largas em culturas registradas; conferir cultura na bula antes de recomendar"
  },
  {
    n: "Antracol 700 WP",
    pa: "Propinebe 700 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Míldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida de contato/protetor à base de propinebe; usar preventivamente conforme bula"
  },
  {
    n: "Boral 500 SC",
    pa: "Sulfentrazona 500 g/L",
    tp: "Herbicida", mo: "Pré-emergente", cl: "V",
    ca: "—", do: "Conforme bula",
    cu: ["Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "nao",
    ob: "Herbicida de solo em pré-emergência/pré-plantio; não aplicar sobre folhas da cultura"
  },
  {
    n: "Bravonil 720",
    pa: "Clorotalonil 720 g/L",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Míldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida multissítio de contato/protetor; usar conforme culturas registradas no Agrolink"
  },
  {
    n: "Capataz",
    pa: "Imidacloprido 100 g/L + Beta-ciflutrina 12,5 g/L",
    tp: "Inseticida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Milho","Soja","Tomate"],
    al: ["Lagarta","Percevejo","Pulgão","Mosca-branca"], fe: [], sc: "sim",
    ob: "Inseticida sistêmico e de contato; conferir praga/cultura registradas antes do uso"
  },
  {
    n: "Cipermetrina Nortox 250 EC",
    pa: "Cipermetrina 250 g/L",
    tp: "Inseticida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja","Tomate"],
    al: ["Broca","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida piretroide de contato e ingestão; seguir intervalos e restrições para polinizadores"
  },
  {
    n: "Connect",
    pa: "Imidacloprido 100 g/L + Beta-ciflutrina 12,5 g/L",
    tp: "Inseticida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Milho","Soja","Tomate"],
    al: ["Lagarta","Percevejo","Pulgão","Mosca-branca"], fe: [], sc: "sim",
    ob: "Produto equivalente em composição ao Capataz em algumas fichas; conferir registro/cultura na bula"
  },
  {
    n: "Decis 25 EC",
    pa: "Deltametrina 25 g/L",
    tp: "Inseticida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Milho","Soja","Tomate","Uva"],
    al: ["Broca","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida piretroide de contato e ingestão; respeitar intervalo de segurança por cultura"
  },
  {
    n: "Evidence 700 WG",
    pa: "Imidacloprido 700 g/kg",
    tp: "Inseticida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Fumo","Tomate"],
    al: ["Mosca-branca","Pulgão"], fe: [], sc: "sim",
    ob: "Inseticida sistêmico neonicotinoide; conferir modalidade de aplicação na bula"
  },
  {
    n: "Flex",
    pa: "Fomesafem 250 g/L",
    tp: "Herbicida", mo: "Pós-emergente", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Soja","Feijão"],
    al: [], fe: ["Folha larga"], sc: "sim",
    ob: "Herbicida seletivo pós-emergente para folhas largas; observar intervalo para culturas em sucessão"
  },
  {
    n: "Fusiflex 250",
    pa: "Fluazifope-P-butílico 250 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Soja","Tomate"],
    al: ["Azevém"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida sistêmico pós-emergente; não aplicar sobre gramíneas cultivadas não tolerantes"
  },
  {
    n: "Fusilade 250 EW",
    pa: "Fluazifope-P-butílico 250 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Soja","Tomate","Uva"],
    al: ["Azevém"], fe: ["Folha estreita"], sc: "sim",
    ob: "Graminicida seletivo para culturas de folha larga; conferir estádio das gramíneas alvo"
  },
  {
    n: "Arvatico",
    pa: "Bacillus velezensis isolado CNPSo 3602",
    tp: "Biológico", mo: "Biológico", cl: "—",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Soja","Milho","Tomate","Fumo","Feijão","Uva","Batata","Pastagem"],
    al: ["Doenças de solo"], fe: [], sc: "sim",
    ob: "Produto biológico; conferir alvo e bula antes do uso"
  },
  {
    n: "Gamit 360 CS",
    pa: "Clomazona 360 g/L",
    tp: "Herbicida", mo: "Pré-emergente", cl: "V",
    ca: "—", do: "Conforme bula",
    cu: ["Batata","Fumo","Soja"],
    al: [], fe: ["Folha estreita","Folha larga"], sc: "nao",
    ob: "Herbicida pré-emergente/residual; contato com folhas pode causar fitotoxicidade"
  },
  {
    n: "Gastoxin B57",
    pa: "Fosfeto de alumínio 570 g/kg",
    tp: "Inseticida", mo: "Fumigante", cl: "I",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: ["Gorgulho","Traça"], fe: [], sc: "nao",
    ob: "Fumigante para grãos armazenados; gás extremamente tóxico, nunca usar em aplicação foliar/campo"
  },
  {
    n: "Goltix",
    pa: "Metamitrona",
    tp: "Herbicida", mo: "Sistêmico", cl: "—",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Beterraba"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida com ingrediente metamitrona para beterraba; não indicar para as culturas principais sem registro específico"
  },
  {
    n: "Klorpan 480 EC",
    pa: "Clorpirifós 480 g/L",
    tp: "Inseticida", mo: "Contato", cl: "II",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: ["Broca","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida organofosforado; conferir situação de registro e restrições atuais antes do uso"
  },
  {
    n: "Manzate WG",
    pa: "Mancozebe 750 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Antracnose","Míldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida protetor multissítio; seguir intervalo de segurança e limite de aplicações"
  },
  {
    n: "Metomil 215 SL Nortox",
    pa: "Metomil 215 g/L",
    tp: "Inseticida", mo: "Contato", cl: "I",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja","Tomate"],
    al: ["Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida carbamato de alta toxicidade aguda; usar EPI completo e seguir receituário"
  },
  {
    n: "Norton",
    pa: "2,4-D 402 g/L + Picloram 103,5 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Pastagem"],
    al: [], fe: ["Folha larga"], sc: "parcial",
    ob: "Herbicida hormonal para folhas largas; risco elevado para culturas sensíveis por deriva/resíduo"
  },
  {
    n: "Off Road",
    pa: "Glufosinato - sal de amônio 200 g/L",
    tp: "Herbicida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "parcial",
    ob: "Herbicida não seletivo/condicional; área total apenas em culturas tolerantes ou modalidade registrada"
  },
  {
    n: "Primatop SC",
    pa: "Atrazina 250 g/L + Simazina 250 g/L",
    tp: "Herbicida", mo: "Sistêmico", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Milho"],
    al: [], fe: ["Folha larga","Folha estreita"], sc: "parcial",
    ob: "Herbicida seletivo para milho conforme estádio e bula; não indicar para culturas sensíveis"
  },
  {
    n: "Recop",
    pa: "Oxicloreto de cobre 840 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Antracnose","Míldio / Requeima","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida/bactericida cúprico de contato; cuidado com fitotoxicidade em condições sensíveis"
  },
  {
    n: "Reglone",
    pa: "Diquat 200 g/L",
    tp: "Dessecante", mo: "Contato", cl: "II",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "parcial",
    ob: "Dessecante de contato; usar apenas em estádio/finalidade registrada, não como herbicida seletivo foliar"
  },
  {
    // ✅ CORRIGIDO: pa ajustado para 577 g/L (eq. ácido 480 g/L) e cl era "IV" → agora "V"
    n: "Roundup Original Mais",
    pa: "Glifosato - sal de isopropilamina 577 g/L (eq. ácido 480 g/L)",
    tp: "Herbicida", mo: "Sistêmico", cl: "V",
    ca: "—", do: "Conforme bula",
    cu: ["Milho","Soja"],
    al: [], fe: ["Folha larga","Folha estreita"], ns: true, sc: "nao",
    ob: "Não seletivo em culturas convencionais; área total apenas em tecnologia tolerante ou dessecação registrada"
  },
  {
    n: "Rovral",
    pa: "Iprodiona 500 g/L",
    tp: "Fungicida", mo: "Contato", cl: "V",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Feijão","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida de contato; consultar doenças/culturas registradas e intervalo de segurança"
  },
  {
    n: "Serenade",
    pa: "Bacillus subtilis QST 713 13,96 g/L",
    tp: "Fungicida", mo: "Biológico", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar","Oídio"], fe: [], sc: "sim",
    ob: "Fungicida/bactericida biológico; seguir condições de aplicação para melhor desempenho"
  },
  {
    n: "Sialex 500",
    pa: "Procimidona 500 g/kg",
    tp: "Fungicida", mo: "Contato", cl: "IV",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Tomate","Uva"],
    al: ["Antracnose","Mancha foliar"], fe: [], sc: "sim",
    ob: "Fungicida dicarboximida; usar conforme cultura/doença registrada e manejo de resistência"
  },
  {
    n: "Sumyzin 500 SC",
    pa: "Flumioxazina 500 g/L",
    tp: "Herbicida", mo: "Pré-emergente", cl: "IV",
    ca: "—", do: "Conforme bula",
    cu: ["Soja"],
    al: [], fe: ["Folha larga"], sc: "nao",
    ob: "Herbicida de contato/residual em pré-plantio/pré-emergência; não aplicar sobre folhas da cultura"
  },
  {
    n: "Talstar 100 EC",
    pa: "Bifentrina 100 g/L",
    tp: "Inseticida", mo: "Contato", cl: "III",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Feijão","Milho","Soja","Tomate"],
    al: ["Ácaro","Lagarta","Percevejo"], fe: [], sc: "sim",
    ob: "Inseticida/acaricida piretroide; seguir restrições para organismos aquáticos e polinizadores"
  },
  {
    n: "Vertimec 18 EC",
    pa: "Abamectina 18 g/L",
    tp: "Acaricida", mo: "Translaminar", cl: "III",
    ca: "Consultar bula", do: "Conforme bula",
    cu: ["Batata","Tomate","Uva"],
    al: ["Ácaro","Lagarta"], fe: [], sc: "sim",
    ob: "Acaricida/inseticida translaminar; respeitar intervalo e manejo de resistência"
  }
];

// ─── Lookup tables ───────────────────────────────────────────────
const CL = {
  I: "Classe I", II: "Classe II", III: "Classe III",
  IV: "Classe IV", V: "Classe V", "—": "Consultar bula"
};
const AC = {
  Fungicida: "acc-Fungicida", Herbicida: "acc-Herbicida",
  Inseticida: "acc-Inseticida", Acaricida: "acc-Acaricida",
  Dessecante: "acc-Dessecante", Regulador: "acc-Regulador",
  Biológico: "acc-Biológico"
};

let vm = 'grid';
document.getElementById('tc').textContent = P.length;

// ─── Troca de visualização ───────────────────────────────────────
function sv(v) {
  vm = v;
  document.getElementById('res').className = v;
  document.getElementById('bg').classList.toggle('active', v === 'grid');
  document.getElementById('bl').classList.toggle('active', v === 'list');
}

// ─── Limpar filtros ──────────────────────────────────────────────
function limpar() {
  ['fb','fc','ft','fa','fm','fs','fk'].forEach(id => {
    document.getElementById(id).value = '';
  });
  f();
}

// ─── Info de uso ─────────────────────────────────────────────────
function usoInfo(p) {
  let aplica, intervalo, warn = false;

  if (p.sc === 'sim') {
    aplica = 'Pode aplicar sobre a cultura conforme recomendação de bula.';
  } else if (p.sc === 'nao') {
    aplica = 'Não aplicar por cima da cultura; usar somente na modalidade indicada em observações/bula.';
    warn = true;
  } else {
    aplica = 'Depende do estádio da cultura, cultivar, alvo e forma de aplicação.';
  }

  intervalo = p.ca && p.ca !== '—'
    ? 'Carência/intervalo informado: ' + p.ca + '.'
    : 'Sem carência alimentar cadastrada; conferir intervalo de plantio, reentrada e restrições na bula.';

  if (p.n === 'Aminol 806') {
    aplica = 'Não aplicar por cima do fumo convencional; usar somente em dessecação/pré-plantio.';
    intervalo = 'Fumo: aguardar no mínimo 15 dias entre a aplicação e o plantio.';
    warn = true;
  } else if (p.tp === 'Herbicida' && p.sc === 'nao') {
    intervalo = 'Aplicação restrita a pré-plantio, pré-emergência, solo ou aplicação dirigida conforme bula.';
  } else if (p.tp === 'Dessecante') {
    intervalo = 'Usar apenas no estádio/finalidade indicada; conferir intervalo de colheita e reentrada na bula.';
  }

  return { aplica, intervalo, warn };
}

// ─── Filtrar e renderizar ─────────────────────────────────────────
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
    if (al === 'Não seletivo'  && !p.ns) return false;
    if (al && !['Folha larga','Folha estreita','Não seletivo'].includes(al) && !p.al.includes(al)) return false;
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
    if (p.sc === 'sim')     { bc = 'ab-sim';     bi = '✅'; bt = 'Pode aplicar sobre a cultura — ' + p.ob; }
    else if (p.sc === 'nao') { bc = 'ab-nao';     bi = '🚫'; bt = p.ob; }
    else                     { bc = 'ab-parcial';  bi = '⚠️'; bt = p.ob; }

    const tagFe = p.fe.map(e =>
      `<span class="tag ${e === 'Folha larga' ? 'tag-fl' : 'tag-fe'}">${e === 'Folha larga' ? '🍃' : '🌾'} ${e}</span>`
    ).join('');
    const tagNs = p.ns ? '<span class="tag tag-ns">⚠️ Não seletivo</span>' : '';
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
        <div class="ii"><label>Modo de ação</label><span>${p.mo}</span></div>
        <div class="ii"><label>Carência</label><span>${p.ca}</span></div>
        <div class="ii"><label>Dosagem</label><span>${p.do}</span></div>
        <div class="ii"><label>Classe tox.</label><span class="pi pi-${p.cl}">${CL[p.cl]}</span></div>
      </div>
      <div class="ct">
        ${p.cu.map(c => `<span class="tag tag-c">🌱 ${c}</span>`).join('')}
        ${tagFe}
        ${tagNs}
        ${p.al.map(a => `<span class="tag">🎯 ${a}</span>`).join('')}
      </div>
    </div>`;
  }).join('');
}

f();
