const courses = [
 {id:"yt-start",category:"youtube",icon:"▶",tag:"YouTube",title:"Comece seu canal",description:"Defina o tema, o público e um formato que você consiga manter.",lessons:[
  ["Escolha um foco","Escolha um tema principal e pense em quem gostaria de assistir. Você pode variar os vídeos, mas mantenha uma promessa clara para o público. Pense também no que você gosta de produzir e no que consegue manter com regularidade. Um foco claro ajuda o público a entender por que deve voltar, mas pode evoluir conforme você aprende.","Escreva uma frase: “Meu canal ajuda/entretém ___ com vídeos sobre ___.”"],
  ["Planeje os primeiros vídeos","Liste 5 ideias específicas. Prefira ideias que respondam uma dúvida ou mostrem um desafio interessante. Transforme temas amplos em propostas específicas, como um desafio, tutorial, comparação ou história. Para cada ideia, anote o que o espectador vai descobrir e por que isso pode ser interessante.","Anote 5 títulos provisórios antes de gravar."],
  ["Publique e aprenda","Não espere perfeição. Depois de publicar, observe retenção, comentários e cliques para decidir o que melhorar. Antes de publicar, assista ao vídeo e confira voz, cortes, título e miniatura. Depois, observe retenção, comentários e cliques; use os dados como pistas e mude uma coisa por vez.","Escolha uma coisa para melhorar no próximo vídeo."]
 ]},
 {id:"shorts",category:"youtube",icon:"▣",tag:"YouTube",title:"Shorts que prendem atenção",description:"Estruture vídeos verticais com começo forte, ritmo e final claro.",lessons:[
  ["Comece pelo melhor momento","Nos primeiros segundos, mostre a situação, a pergunta ou o resultado que faz a pessoa querer continuar. Evite introduções longas. Você pode abrir com o resultado de um desafio, uma pergunta curiosa ou o instante em que algo importante acontece. Evite introduções longas e não prometa algo que o vídeo não entrega.","Escreva uma abertura de uma frase para seu próximo Short."],
  ["Uma ideia por vídeo","Shorts curtos funcionam melhor quando têm um objetivo claro. Corte pausas e partes que não ajudam a ideia principal. Organize o Short em começo, desenvolvimento e conclusão. Apresente a situação, mostre o que aconteceu e termine com o resultado ou aprendizado; corte pausas e repetições que não ajudam a história.","Resuma seu vídeo em uma frase e remova o que fugir dela."],
  ["Revise os resultados","Compare vídeos parecidos e observe retenção, visualizações e comentários. Não conclua tudo com base em um único vídeo. Compare vídeos de temas e formatos parecidos. Observe retenção, comentários e se as pessoas assistem até o fim, mas não tire conclusões fortes com base em um único vídeo.","Registre o que funcionou e teste uma mudança por vez."]
 ]},
 {id:"obs-basics",category:"obs",icon:"▦",tag:"OBS Studio",title:"OBS do zero",description:"Crie cenas, adicione fontes e faça um teste antes de transmitir.",lessons:[
  ["Crie suas cenas","No OBS, use cenas diferentes para gameplay, intervalo e encerramento. Dê nomes claros para encontrá-las rapidamente. Uma cena é um conjunto de elementos exibidos juntos. Comece com poucas cenas, como Gameplay, Intervalo e Encerramento, e dê nomes claros para alternar rapidamente durante a transmissão.","Crie uma cena de gameplay e outra de pausa."],
  ["Adicione fontes","Use Captura de Jogo quando possível para jogos; Captura de Janela ou Tela em outros casos. Adicione microfone e, se quiser, webcam. As fontes são os elementos que aparecem na cena. Confira a ordem delas, porque uma fonte acima pode cobrir outra; ajuste tamanho e posição e teste se o jogo, microfone e webcam aparecem corretamente.","Confira se a fonte mostra a imagem correta e se o microfone se move no mixer."],
  ["Faça uma gravação de teste","Grave 30 a 60 segundos e confira imagem, áudio, sincronização e desempenho antes de uma live. Fale como falaria numa live e confira imagem, áudio do computador, microfone, sincronização e desempenho. Se algo estiver errado, altere uma configuração por vez e grave novamente.","Assista à gravação com fones e ajuste o que estiver ruim."]
 ]},
 {id:"obs-audio",category:"obs",icon:"♫",tag:"OBS Studio",title:"Áudio limpo no OBS",description:"Evite microfone baixo, ruído e áudio estourado.",lessons:[
  ["Ajuste o nível","Fale no volume normal e observe o medidor do microfone. Evite que o áudio chegue constantemente ao vermelho. Teste com o jogo ligado, porque o som pode mascarar sua voz. Evite que o medidor fique constantemente no vermelho e ajuste também a posição do microfone, não apenas o volume.","Grave sua voz por 20 segundos e escute o resultado."],
  ["Filtros com moderação","O supressor de ruído ajuda com ruídos constantes; o compressor pode controlar diferenças de volume. Ajustes excessivos deixam a voz artificial. Um supressor pode reduzir ruído constante e um compressor pode controlar diferenças de volume, mas exagerar nos filtros deixa a voz artificial. Teste um filtro por vez e compare gravações.","Ative um filtro por vez e compare antes e depois."],
  ["Evite eco","Use fones e verifique se o áudio do desktop está sendo capturado uma única vez. O eco pode vir do som dos alto-falantes voltando para o microfone ou de uma fonte capturada duas vezes. Use fones, confira os dispositivos de áudio no OBS e faça uma gravação curta para diagnosticar.","Faça um teste de gravação e procure eco ou duplicação."]
 ]},
 {id:"live-platforms",category:"lives",icon:"◉",tag:"Lives",title:"Sua primeira transmissão",description:"Prepare título, categoria, privacidade e teste técnico para entrar ao vivo.",lessons:[
  ["Prepare o canal","Complete as informações básicas do canal, escolha categoria e escreva um título honesto que explique o que vai acontecer. Confira categoria, título, descrição e regras da plataforma. Prepare uma frase que explique o que está acontecendo para quem chegar no meio da transmissão.","Prepare um título e uma descrição para sua próxima live."],
  ["Conecte o OBS com segurança","Use o fluxo de conexão recomendado pela plataforma. Nunca compartilhe sua chave de transmissão; trate-a como uma senha. Use o fluxo oficial de conexão da plataforma. A chave de transmissão é privada, como uma senha: não a mostre em capturas ou vídeos e gere outra se achar que foi exposta.","Abra as configurações de transmissão e confira a plataforma escolhida."],
  ["Faça um teste privado ou local","Se a plataforma permitir, teste a transmissão. Caso contrário, grave localmente e confira áudio, imagem e cenas. Verifique como a transmissão aparece para o público ou grave localmente se não houver modo de teste. Confira áudio, imagem, estabilidade e se as configurações são adequadas ao seu computador e à conexão.","Faça uma checagem antes de anunciar a live."]
 ]},
 {id:"kick-twitch",category:"lives",icon:"↗",tag:"Kick + Twitch",title:"Prepare Kick e Twitch",description:"Entenda as configurações básicas de transmissão e interação.",lessons:[
  ["Revise as opções do canal","Confira as configurações atuais da plataforma, a categoria, o título e as regras de comunidade. As interfaces mudam, então confira as configurações atuais, categoria, título, regras e opções de moderação. Se não encontrar uma opção, consulte a ajuda oficial da plataforma.","Faça uma lista do que precisa estar pronto antes de abrir a live."],
  ["Organize alertas e chat","Use apenas integrações confiáveis e dê permissões mínimas necessárias. Teste alertas antes de transmitir. Escolha integrações confiáveis, conceda apenas as permissões necessárias e evite alertas que cubram informações importantes do jogo. Teste imagem e volume antes de entrar ao vivo.","Envie um alerta de teste e confira o tamanho na tela."],
  ["Converse com quem chegou","Dê contexto para novos espectadores, explique o que está fazendo e faça perguntas abertas sem pressionar ninguém. Explique suas decisões e dê contexto para novos espectadores, sem pressionar ninguém a conversar. Prepare assuntos relacionados ao tema para preencher pausas naturais.","Prepare três assuntos para comentar durante momentos silenciosos."]
 ]},
 {id:"strategy",category:"estrategia",icon:"⌁",tag:"Estratégia",title:"Plano de crescimento",description:"Crie uma rotina realista e melhore com base nos dados.",lessons:[
  ["Escolha uma rotina sustentável","Defina dias e formatos que caibam na sua agenda. Consistência não significa publicar o tempo todo. Monte um calendário que caiba na sua agenda e reserve tempo para planejar, gravar, editar e descansar. Uma rotina simples que você mantém vale mais do que uma agenda intensa que não consegue cumprir.","Escolha uma meta semanal realista."],
  ["Transforme uma gravação em vários conteúdos","Uma live pode render clipes, Shorts e um resumo, desde que cada corte tenha contexto e faça sentido sozinho. Marque momentos com começo e fim claros, como uma jogada, uma dica ou uma reação. Um corte deve fazer sentido para quem não viu a live inteira; acrescente contexto quando necessário.","Marque três momentos interessantes da próxima gravação."],
  ["Analise sem adivinhar","Veja cliques, retenção, comentários e espectadores recorrentes. Compare conteúdos semelhantes e teste uma mudança por vez. Cliques, retenção, tempo de exibição e comentários mostram coisas diferentes. Compare conteúdos semelhantes, considere o tema e teste uma mudança de cada vez em vez de perseguir apenas um número.","Escolha uma métrica para acompanhar nas próximas duas semanas."]
 ]},
 {id:"thumbnails",category:"youtube",icon:"▧",tag:"YouTube",title:"Títulos e thumbnails",description:"Deixe claro por que vale a pena clicar, sem prometer o que não existe.",lessons:[
  ["Promessa clara","Um bom título comunica o tema e o motivo para assistir. Evite exageros que o vídeo não entrega. Use palavras específicas e desperte curiosidade sem exagerar. O título precisa combinar com a miniatura e com o que o vídeo realmente entrega.","Escreva três títulos para a mesma ideia."],
  ["Miniatura legível","Use um ponto focal, contraste e poucas palavras. Confira se continua compreensível em tamanho pequeno. Escolha um ponto focal e evite muitos elementos competindo entre si. Se usar texto, deixe poucas palavras grandes e confira se a imagem continua compreensível em tamanho pequeno.","Reduza sua miniatura para visualizar como aparece no celular."],
  ["Compare e aprenda","Observe o desempenho com contexto: tema, público e origem das visualizações também importam. Se as pessoas veem a miniatura mas não clicam, talvez ela precise ficar mais clara; se clicam e saem cedo, confira se a abertura entrega o prometido. Trate isso como hipótese e teste uma melhoria.","Anote o que pretende testar no próximo vídeo."]
 ]}
];
const $ = s => document.querySelector(s);
const completed = new Set(JSON.parse(localStorage.getItem("ca-completed") || "[]"));
const checklist = ["Microfone correto selecionado","Jogo ou janela aparece na cena","Áudio do jogo e do microfone testados","Título e categoria conferidos","Alertas e chat testados","Internet e espaço em disco conferidos","Chave de transmissão protegida","Gravação ou teste técnico feito"];
const savedChecks = new Set(JSON.parse(localStorage.getItem("ca-checks") || "[]"));
function save(){localStorage.setItem("ca-completed",JSON.stringify([...completed]));localStorage.setItem("ca-checks",JSON.stringify([...savedChecks]));}
function renderCourses(filter="todos"){
 const grid=$("#courseGrid"); grid.innerHTML="";
 courses.filter(c=>filter==="todos"||c.category===filter).forEach(c=>{
  const done=c.lessons.filter((_,i)=>completed.has(`${c.id}-${i}`)).length;
  const card=document.createElement("article");card.className="course-card";
  card.innerHTML=`<div class="course-icon">${c.icon}</div><div class="course-tag">${c.tag}</div><h3>${c.title}</h3><p>${c.description}</p><div class="course-bottom"><span class="lesson-count">${done}/${c.lessons.length} aulas concluídas</span><button class="open-course ${done===c.lessons.length?'done':''}" data-course="${c.id}">${done===c.lessons.length?'Revisar':'Abrir aulas'} →</button></div>`;
  grid.appendChild(card);
 });
 grid.querySelectorAll("[data-course]").forEach(b=>b.addEventListener("click",()=>openCourse(b.dataset.course)));
 updateProgress();
}
function updateProgress(){
 const total=courses.reduce((n,c)=>n+c.lessons.length,0), n=completed.size, pct=Math.round(n/total*100);
 $("#progressPercent").textContent=pct+"%";$("#overallProgress").style.width=pct+"%";$("#completedCount").textContent=n;
 $("#progressCaption").textContent=pct===0?"Sua jornada começa aqui.":pct===100?"Trilha inicial concluída. Parabéns!":"Continue assim — cada aula conta.";
}
function openCourse(id){
 const c=courses.find(x=>x.id===id);if(!c)return;
 const modal=document.createElement("div");modal.className="lesson-modal";modal.innerHTML=`<div class="lesson-box" role="dialog" aria-modal="true"><button class="close-btn">Fechar ✕</button><p class="eyebrow">${c.tag}</p><h2>${c.title}</h2><p>${c.description}</p><div class="lesson-list"></div></div>`;
 const list=modal.querySelector(".lesson-list");
 c.lessons.forEach((lesson,i)=>{
  const key=`${c.id}-${i}`,isDone=completed.has(key),item=document.createElement("section");
  const videoQuery = encodeURIComponent(`${c.tag} ${c.title} ${lesson[0]} tutorial português`);
  item.innerHTML=`<hr style="border:0;border-top:1px solid #292d40;margin:18px 0"><p class="eyebrow">AULA ${i+1} ${isDone?'• CONCLUÍDA':''}</p><h3>${lesson[0]}</h3><p>${lesson[1]}</p><div class="lesson-extra"><h4>Como estudar esta aula</h4><p>Primeiro, leia a explicação inteira. Depois, abra o programa ou a plataforma e aplique as etapas no seu próprio projeto. Faça um teste curto, observe o resultado e corrija uma coisa de cada vez. Se algo não funcionar, volte ao passo anterior e confira as configurações antes de mudar várias opções ao mesmo tempo.</p><p><strong>Missão prática:</strong> ${lesson[2]}</p><a class="primary-btn video-btn" href="https://www.youtube.com/results?search_query=${videoQuery}" target="_blank" rel="noopener">▶ Assistir vídeos desta aula</a></div><button class="primary-btn lesson-toggle" data-key="${key}">${isDone?'Marcar como não concluída':'Concluir aula'} ✓</button>`;
  list.appendChild(item);
 });
 document.body.appendChild(modal);
 modal.querySelector(".close-btn").onclick=()=>modal.remove();
 modal.addEventListener("click",e=>{if(e.target===modal)modal.remove()});
 modal.querySelectorAll(".lesson-toggle").forEach(btn=>btn.onclick=()=>{const key=btn.dataset.key;if(completed.has(key))completed.delete(key);else completed.add(key);save();modal.remove();renderCourses(document.querySelector(".filter.active").dataset.filter);openCourse(id);});
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");renderCourses(btn.dataset.filter)}));
function renderChecklist(){
 const box=$("#checklistItems");box.innerHTML="";
 checklist.forEach((label,i)=>{const el=document.createElement("label");el.className="check-item";el.innerHTML=`<input type="checkbox" ${savedChecks.has(i)?'checked':''}><span>${label}</span>`;el.querySelector("input").addEventListener("change",e=>{if(e.target.checked)savedChecks.add(i);else savedChecks.delete(i);save()});box.appendChild(el)});
}
$("#resetChecklist").addEventListener("click",()=>{savedChecks.clear();save();renderChecklist()});
function escapeHTML(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
renderCourses();renderChecklist();

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").addEventListener("click",async()=>{if(!deferredPrompt){alert("No iPhone: abra este site no Safari, toque em Compartilhar e escolha 'Adicionar à Tela de Início'.");return}deferredPrompt.prompt();deferredPrompt=null;$("#installBtn").hidden=true});
if("serviceWorker" in navigator && location.protocol.startsWith("http"))navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
if(/iPhone|iPad|iPod/.test(navigator.userAgent)&&!window.navigator.standalone){$("#installBtn").hidden=false;$("#installBtn").textContent="Como instalar";}
