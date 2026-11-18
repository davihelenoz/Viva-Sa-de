// Conteúdo educativo e perguntas. Texto resumido, sem estatísticas; confirme nas fontes em #referencias.
const CAMP = {
rosa:{t:'Outubro Rosa',s:'Conscientização sobre o câncer de mama',secs:[
['O que é o câncer de mama','É o crescimento desordenado de células da mama. Existem diferentes tipos, com evolução e tratamento distintos. Quanto mais cedo é identificado, maiores as opções de tratamento.'],
['Fatores de risco','Envelhecimento, histórico familiar, obesidade, consumo de álcool, sedentarismo e uso prolongado de alguns hormônios estão entre os fatores associados. Ter fatores de risco não significa que a doença vai surgir, e não tê-los não elimina a possibilidade.'],
['Sinais e sintomas','Nódulo na mama ou axila, alteração na pele da mama (como aspecto de casca de laranja), retração ou alteração do mamilo e saída de secreção. Qualquer mudança diferente do habitual merece avaliação profissional.'],
['Prevenção e diagnóstico precoce','Manter peso saudável, praticar atividade física e evitar o álcool ajudam a reduzir o risco. O diagnóstico precoce envolve atenção a mudanças no corpo e acesso a avaliação e exames indicados por profissionais, conforme idade e risco individual.'],
['Acompanhamento profissional','Dúvidas e alterações devem ser avaliadas por médico. Exames e a periodicidade são definidos de forma individualizada.']],
mitos:[['Só mulheres têm câncer de mama.','Mito','Homens também podem ter, embora seja bem mais raro.'],['Ter caso na família aumenta a atenção necessária.','Verdade','O histórico familiar é um fator de risco e deve ser informado ao profissional.'],['Se não sinto nada, não existe doença.','Mito','A doença pode ser silenciosa em fases iniciais.']]},
azul:{t:'Novembro Azul',s:'Saúde masculina e câncer de próstata',secs:[
['Por que cuidar da saúde masculina','Muitos homens procuram atendimento tardiamente. Consultas regulares, alimentação equilibrada, atividade física e atenção a sintomas fazem parte do cuidado.'],
['O que é o câncer de próstata','A próstata é uma glândula do sistema reprodutor masculino. O câncer de próstata surge do crescimento descontrolado de células nessa glândula; muitos casos evoluem lentamente.'],
['Fatores de risco','Idade avançada, histórico familiar de câncer de próstata e obesidade estão entre os fatores associados.'],
['Sinais e sintomas','Nas fases iniciais costuma não haver sintomas. Em fases mais avançadas podem ocorrer dificuldade para urinar, vontade frequente de urinar e presença de sangue na urina. Esses sinais também ocorrem em condições benignas, por isso exigem avaliação médica.'],
['Prevenção e diagnóstico','Hábitos saudáveis contribuem para a saúde geral. A decisão sobre exames de rastreamento deve ser tomada em conversa com o médico, avaliando benefícios, riscos e características de cada pessoa.'],
['Acompanhamento profissional','Urologista ou médico de família podem orientar sobre a necessidade e o momento de cada avaliação.']],
mitos:[['PSA alterado significa sempre câncer.','Mito','Outras condições, como aumento benigno da próstata ou inflamação, podem alterar o PSA.'],['Procurar o médico só quando há sintomas é suficiente.','Mito','Fases iniciais podem não apresentar sintomas; converse com o profissional sobre sua situação.'],['Hábitos saudáveis fazem parte do cuidado.','Verdade','Alimentação equilibrada e atividade física ajudam a saúde geral.']]}};
// [pergunta, alternativas, índice correto, explicação, campanha]
const Q=[
['Qual doença é o foco do Outubro Rosa?',['Câncer de mama','Câncer de pulmão','Diabetes','Hipertensão'],0,'O Outubro Rosa é a campanha de conscientização sobre o câncer de mama.','rosa'],
['Qual destes é um possível sinal de alerta para câncer de mama?',['Nódulo na mama ou axila','Dor de garganta','Tosse leve','Cansaço após exercício'],0,'Nódulos na mama ou axila devem ser avaliados por um profissional.','rosa'],
['Homens podem ter câncer de mama?',['Nunca','Sim, embora seja raro','Somente após 90 anos','Apenas com cirurgia prévia'],1,'Homens também podem ter, mas é bem menos frequente.','rosa'],
['Qual hábito está associado à redução do risco de câncer de mama?',['Sedentarismo','Consumo frequente de álcool','Atividade física regular','Fumar'],2,'Atividade física e peso saudável ajudam a reduzir o risco.','rosa'],
['Ausência de sintomas garante que não há doença?',['Sim','Não, algumas doenças são silenciosas no início','Sim, em qualquer idade','Apenas para mulheres'],1,'Fases iniciais podem não ter sintomas, por isso o acompanhamento profissional importa.','rosa'],
['O que deve ser feito ao notar uma alteração na mama?',['Esperar sumir sozinha','Usar remédio por conta própria','Procurar avaliação profissional','Ignorar'],2,'Alterações devem ser avaliadas por profissional de saúde, sem automedicação.','rosa'],
['Qual é o foco do Novembro Azul?',['Saúde da mulher','Saúde masculina e câncer de próstata','Saúde bucal','Saúde infantil'],1,'O Novembro Azul trata da saúde masculina, com destaque ao câncer de próstata.','azul'],
['A decisão sobre exames de próstata deve ser:',['Igual para todos, sem conversa','Conversada com o médico, de forma individualizada','Tomada por amigos','Evitada sempre'],1,'A avaliação individualizada considera idade, histórico e preferências.','azul'],
['O que é a próstata?',['Glândula do sistema reprodutor masculino','Parte do pulmão','Osso da bacia','Músculo da perna'],0,'É uma glândula presente nos homens, ligada ao sistema reprodutor.','azul'],
['Qual fator está associado ao câncer de próstata?',['Idade avançada','Usar óculos','Beber água','Dormir de lado'],0,'A idade avançada e o histórico familiar são fatores associados.','azul'],
['PSA elevado significa necessariamente câncer?',['Sim, sempre','Não, outras condições podem elevá-lo','Só em jovens','Só em fumantes'],1,'Condições benignas também podem alterar o PSA; o médico interpreta o resultado.','azul'],
['Nas fases iniciais, o câncer de próstata costuma:',['Causar dor intensa','Não apresentar sintomas','Causar febre alta','Causar tosse'],1,'Costuma ser silencioso no início, daí a importância do diálogo com o médico.','azul']];
const REFS=[
['INCA — Instituto Nacional de Câncer','https://www.gov.br/inca'],
['Ministério da Saúde','https://www.gov.br/saude'],
['Organização Mundial da Saúde (OMS)','https://www.who.int'],
['Sociedade Brasileira de Mastologia','https://www.sbmastologia.com.br'],
['Sociedade Brasileira de Urologia','https://portaldaurologia.org.br']];
